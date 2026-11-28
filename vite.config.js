import { isIPv4 } from 'node:net'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'

function enlaceConsola(url) {
  return `\u001B]8;;${url}\u001B\\${url}\u001B]8;;\u001B\\`
}

async function obtenerIpv4Publica() {
  const metadataUrl = 'http://169.254.169.254/latest'
  const tokenResponse = await fetch(`${metadataUrl}/api/token`, {
    method: 'PUT',
    headers: { 'X-aws-ec2-metadata-token-ttl-seconds': '60' },
    signal: AbortSignal.timeout(2000)
  })

  if (!tokenResponse.ok) {
    throw new Error(`AWS metadata devolvió HTTP ${tokenResponse.status} al solicitar el token.`)
  }

  const token = await tokenResponse.text()
  const ipResponse = await fetch(`${metadataUrl}/meta-data/public-ipv4`, {
    headers: { 'X-aws-ec2-metadata-token': token },
    signal: AbortSignal.timeout(2000)
  })

  if (!ipResponse.ok) {
    throw new Error(`AWS metadata devolvió HTTP ${ipResponse.status} al consultar la IP pública.`)
  }

  const address = (await ipResponse.text()).trim()
  if (!isIPv4(address)) {
    throw new Error('AWS metadata no devolvió una dirección IPv4 pública válida.')
  }

  return address
}

function apiDocsUrlPlugin() {
  return {
    name: 'api-docs-url',
    async configureServer(server) {
      let publicIpv4

      if (process.env.VITEST !== 'true') {
        try {
          publicIpv4 = await obtenerIpv4Publica()
        } catch (error) {
          const detail = error instanceof Error ? error.message : String(error)
          server.config.logger.warn(`No se pudo detectar la IP pública de AWS: ${detail}`)
        }
      }

      server.httpServer?.once('listening', () => {
        if (publicIpv4 && server.resolvedUrls) {
          const currentUrl = server.resolvedUrls.network[0] ?? server.resolvedUrls.local[0]
          if (currentUrl) {
            const publicUrl = new URL(currentUrl)
            publicUrl.hostname = publicIpv4
            server.resolvedUrls.network = [publicUrl.href]
          }
        }

        for (const url of server.resolvedUrls?.network ?? []) {
          const localUrl = server.resolvedUrls?.local[0] ?? ''
          const publicUrl = new URL(url).href
          console.log(`\u2FCB IP Pública: ${enlaceConsola(publicUrl)} \u2FCB \n\u3291 IP Local:   ${enlaceConsola(localUrl)} \u3291`)
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backendTarget = env.BACKEND_URL || 'http://localhost:3000'

  return {
    plugins: [react(), apiDocsUrlPlugin()],

    server: {
      host: '0.0.0.0',
      port: 5173,

      proxy: {
        '/api-docs': {
          target: backendTarget,
          changeOrigin: true
        },
        '/api/v1': {
          target: backendTarget,
          changeOrigin: true
        }
      }
    },

    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.js',
      coverage: {
        provider: 'v8',
        include: [
          'src/utils/**',
          'src/components/**',
          'src/services/**'
        ],
      },
    },
  }
})
import { networkInterfaces } from 'node:os'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

function obtenerIpv4() {
  const address = Object.values(networkInterfaces())
    .flatMap((interfaces) => interfaces ?? [])
    .find(({ family, internal }) => !internal && (family === 'IPv4' || family === 4))

  if (!address) {
    throw new Error('No se pudo detectar una dirección IPv4 para conectar con el backend.')
  }

  return address.address
}

const backendTarget = `http://${obtenerIpv4()}:3000`

function apiDocsUrlPlugin() {
  return {
    name: 'api-docs-url',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        for (const url of server.resolvedUrls?.network ?? []) {
          server.config.logger.info(`\u2FCB Documentacion Swagger: ${new URL('/api-docs/', url).href} \u2FCB`)
        }
      })
    },
  }
}

export default defineConfig({
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
})
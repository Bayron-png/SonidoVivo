# Sonido Vivo

###### Tecnologías Utilizadas
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![React Bootstrap](https://img.shields.io/badge/React%20Bootstrap-41E0FD?style=flat&logo=reactbootstrap&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

## Integrantes
| Nombres          | Apellidos         | Correo                 |
| ---------------- | ----------------- | ---------------------- |
| Luis Antonio     | Álvarez Requejo   | luis.alvarez@duocuc.cl |
| José Miguel      | Ibarra Vyhmeister | jo.ibarrav@duocuc.cl   |
| Bayron Alexander | Urrutia Flores    | bay.urrutia@duocuc.cl  |

## Contexto del Caso
Sonido Vivo es una tienda de instrumentos musicales que actualmente es atendida solo por su dueño y dos vendedores.
Ofrecen un amplio catálogo de instrumentos y accesorios, pero últimamente reciben muchos pedidos por Whatsapp e Instagram.

El sistema creado brinda al usuario la posibilidad de ver el catálogo con precios y disponibilidad sin tener que consultar al Whatsapp o Instagram, y a su vez pudiendo recibir pedidos de forma online con seguimiento y actualización de stock.

## Estructura del Proyecto
```
└── 📁SonidoVivo
    └── 📁public
        └── 📁categorias-catalogo
            ├── accesorios.png
            ├── amplificador.png
            ├── bajo-electrico.png
            ├── bateria.png
            ├── estudio-grabacion.png
            ├── guitarra-acustica.png
            ├── guitarra-electrica.png
            ├── microfono.png
            ├── pedal-efectos.png
            ├── teclado-piano.png
        └── 📁productos
            └── 📁accesorios
                ├── ac001.png
                ├── ac002.png
                ├── ac003.png
                ├── ac004.png
                ├── ac005.png
                ├── ac006.png
                ├── ac007.png
                ├── ac008.png
                ├── ac009.png
                ├── ac010.png
            └── 📁amplificadores
                ├── am001.png
                ├── am002.png
                ├── am003.png
                ├── am004.png
            └── 📁bajos-electricos
                ├── ba001.png
                ├── ba002.png
                ├── ba003.png
            └── 📁baterias
                ├── bt001.png
                ├── bt002.png
                ├── bt003.png
                ├── bt004.png
                ├── bt005.png
            └── 📁estudio-grabacion
                ├── es001.png
                ├── es002.png
                ├── es003.png
                ├── es004.png
                ├── es005.png
            └── 📁guitarras-acusticas
                ├── ga001.png
                ├── ga002.png
                ├── ga003.png
                ├── ga004.png
                ├── ga005.png
            └── 📁guitarras-electricas
                ├── ge001.png
                ├── ge002.png
                ├── ge003.png
                ├── ge004.png
                ├── ge005.png
            └── 📁microfonos
                ├── mi001.png
                ├── mi002.png
                ├── mi003.png
                ├── mi004.png
            └── 📁pedales
                ├── pe001.png
                ├── pe002.png
                ├── pe003.png
                ├── pe004.png
                ├── pe005.png
                ├── pe006.png
            └── 📁teclados-pianos
                ├── tc001.png
                ├── tc002.png
                ├── tc003.png
                ├── tc004.png
        ├── favicon.svg
        ├── icons.svg
        ├── logo.png
    └── 📁src
        └── 📁assets
            ├── react.svg
            ├── vite.svg
        └── 📁components
            └── 📁atoms
                └── 📁botones
                    ├── BotonAgregarAlCarrito.jsx
                    ├── BotonEnviar.jsx
                    ├── BotonVolver.jsx
                └── 📁carrito
                    ├── BotonEliminarItem.jsx
                    ├── BotonProcederPago.jsx
                    ├── ControlesCantidad.jsx
                    ├── MensajePedidoExitoso.jsx
                    ├── OpcionesEnvio.jsx
                    ├── TotalCarrito.jsx
                └── 📁catalogo
                    ├── ImagenCategoria.jsx
                    ├── TituloCategoria.jsx
                └── 📁footer
                    ├── CampoFormulario.jsx
                    ├── TextoFooter.jsx
                └── 📁form
                    ├── ApellidoInput.jsx
                    ├── ConfirmPasswordInput.jsx
                    ├── GmailInput.jsx
                    ├── NombreInput.jsx
                    ├── PasswordInput.jsx
                    ├── RutInput.jsx
                    ├── TelefonoInput.jsx
                └── 📁header
                    ├── BotonCarrito.jsx
                    ├── LogoHeader.jsx
                    ├── TextoHeader.jsx
                └── 📁productos
                    ├── MensajeSinProductos.jsx
                ├── TituloRedondeado.jsx
            └── 📁molecules
                └── 📁footer
                    ├── EnlacesFooter.jsx
                    ├── IdentidadFooter.jsx
                    ├── InformacionContacto.jsx
                ├── CamposLogin.jsx
                ├── CamposRegister.jsx
                ├── CartItem.jsx
                ├── CategoriaProducto.jsx
                ├── ProductCard.jsx
            └── 📁organisms
                ├── CategoriasCatalogo.jsx
                ├── Footer.jsx
                ├── FormularioContacto.jsx
                ├── Header.jsx
                ├── ListaCarrito.jsx
                ├── LoginForm.jsx
                ├── ProductosLista.jsx
                ├── RegisterForm.jsx
            └── 📁templates
                ├── CarritoTemplate.jsx
                ├── CatalogoTemplate.jsx
                ├── HomeTemplate.jsx
                ├── LoginTemplate.jsx
                ├── ProductosTemplate.jsx
                ├── RegisterTemplate.jsx
        └── 📁context
            ├── CarritoContext.jsx
        └── 📁data
            ├── categoriasData.js
            ├── productosData.js
        └── 📁hooks
            ├── ScrollToTop.jsx
            ├── useProductosPorCategoria.jsx
        └── 📁pages
            └── 📁Carrito
                ├── Carrito.jsx
            └── 📁Catalogo
                ├── Catalogo.jsx
            └── 📁Home
                ├── Home.jsx
            └── 📁Login
                ├── Login.jsx
            └── 📁PaginaProductos
                ├── PaginaProductos.jsx
            └── 📁Register
                ├── Register.jsx
        ├── App.jsx
        ├── index.css
        ├── main.jsx
    ├── .gitignore
    ├── .oxlintrc.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── vite.config.js
```

## Como ejecutar el Proyecto
### Prerequisitos

Asegúrate de tener instalado **Node.js** (versión 18 o superior recomendada):
- [Descargar Node.js](https://nodejs.org/)

### Pasos para iniciar el proyecto

1. **Clonar el repositorio o descargar el proyecto:**
```bash
   git clone https://github.com/Bayron-png/Sonido-Vivo
   cd Sonido-Vivo
```

2. Instalar las dependencias
```bash
   npm install
```

3. Iniciar el servidor de Desarrollo
```bash
   npm run dev
```

4. Abrir en el navegador:
- Haz click en la URL que aparece en el terminal (por defecto generalmente es http://localhost:5173)

## Material Complementario
- [Drive SonidoVivo](https://drive.google.com/drive/folders/12_GrU2BjxDYlcv_tYToIAlKlEODdBjeE?usp=drive_link)
- [Tablero de Trello](https://trello.com/b/huyWCOKN)
## Bitácora (Registro)
|Fecha     |Nombre | Acción|
|----------|-------|-------|
|08-10-2026|José   | Se crea página para pantalla principal Home.|
|08-10-2026|Luis   |       |
|08-10-2026|Bayron | Añadido de secciones dinámicas al header, creación de catálogo con links dinámicos y añadido de menú de navegación desplegable para móviles (menú de hamburguesa)|
|09-10-2026|José   |       |
|09-10-2026|Luis   |       |
|09-10-2026|Bayron |       |
|10-10-2026|José   |       |
|10-10-2026|Luis   |       |
|10-10-2026|Bayron |       |
|11-10-2026|José   |       |
|11-10-2026|Luis   |       |
|11-10-2026|Bayron |       |
|12-10-2026|José   |       |
|12-10-2026|Luis   |       |
|12-10-2026|Bayron | Se completó el apartado de productos del catálogo, se añadieron todos los productos de la base de datos separando la lógica. Se creó el hook que detecta la categoría actual y filtra los productos de dicha categoría. Se creó y finalizó el apartado y la ventana de carrito además de vincularlo dentro del header.|
|13-10-2026|José   |       |
|13-10-2026|Luis   |       |
|13-10-2026|Bayron |       |
|14-10-2026|José   |       |
|14-10-2026|Luis   |       |
|14-10-2026|Bayron |       |
|15-10-2026|José   |       |
|15-10-2026|Luis   |       |
|15-10-2026|Bayron |       |
|16-10-2026|José   |       |
|16-10-2026|Luis   |       |
|16-10-2026|Bayron |       |
|17-10-2026|José   |       |
|17-10-2026|Luis   |       |
|17-10-2026|Bayron |       |
|18-10-2026|José   |       |
|18-10-2026|Luis   |       |
|18-10-2026|Bayron |       |
|19-10-2026|José   |       |
|19-10-2026|Luis   |       |
|19-10-2026|Bayron |       |
|20-10-2026|José   |       |
|20-10-2026|Luis   |       |
|20-10-2026|Bayron |       |
|21-10-2026|José   |       |
|21-10-2026|Luis   |       |
|21-10-2026|Bayron |       |
|22-10-2026|José   |       |
|22-10-2026|Luis   |       |
|22-10-2026|Bayron |       |
|23-10-2026|José   |       |
|23-10-2026|Luis   |       |
|23-10-2026|Bayron |       |

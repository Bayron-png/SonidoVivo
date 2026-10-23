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
        └── 📁eventos
            ├── fauna-primavera.jpg
            ├── festival-vina.jpg
            ├── lollapalooza-chile.jpg
        └── 📁home
            ├── concierto-home.jpg
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
                └── 📁barra-busqueda
                    ├── CampoInput.jsx
                └── 📁botones
                    ├── BotonAgregarAlCarrito.jsx
                    ├── BotonAgregarAlCarrito.test.jsx
                    ├── BotonCerrar.jsx
                    ├── BotonEnviar.jsx
                    ├── BotonFiltro.jsx
                    ├── BotonVolver.jsx
                    ├── ButtonAction.jsx
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
                    ├── GmailLoginInput.jsx
                    ├── NombreInput.jsx
                    ├── PasswordInput.jsx
                    ├── PasswordLoginInput.jsx
                    ├── RutInput.jsx
                    ├── TelefonoInput.jsx
                └── 📁header
                    ├── BotonCarrito.jsx
                    ├── LogoHeader.jsx
                    ├── TextoHeader.jsx
                └── 📁movimientos
                    ├── MensajeSinMovimientos.jsx
                    ├── MovimientoFecha.jsx
                    ├── MovimientoTipoEnvio.jsx
                    ├── MovimientoTotal.jsx
                └── 📁producto-form
                    ├── InputGroup.jsx
                    ├── InsigniaStock.jsx
                    ├── TextAreaGroup.jsx
                └── 📁productos
                    ├── MensajeSinProductos.jsx
                ├── Descripcion.jsx
                ├── Descripcion.test.jsx
                ├── TituloRedondeado.jsx
                ├── TituloSeccion.jsx
            └── 📁molecules
                └── 📁admin
                    ├── TarjetaResumen.jsx
                └── 📁admin-productos
                    ├── BarraBusqueda.jsx
                    ├── BarraBusqueda.test.jsx
                    ├── FilaProducto.jsx
                └── 📁carrito
                    ├── CartItem.jsx
                └── 📁catalogo
                    ├── CategoriaProducto.jsx
                    ├── ProductCard.jsx
                └── 📁footer
                    ├── EnlacesFooter.jsx
                    ├── IdentidadFooter.jsx
                    ├── InformacionContacto.jsx
                └── 📁formularios
                    ├── CamposLogin.jsx
                    ├── CamposRegister.jsx
                └── 📁home
                    ├── TarjetaEvento.jsx
                └── 📁movimientos
                    ├── MovimientoProducto.jsx
                    ├── ResumenMovimiento.jsx
            └── 📁organisms
                └── 📁admin
                    ├── FormularioProducto.jsx
                    ├── HeaderAdmin.jsx
                    ├── ListaAdmin.jsx
                    ├── MenuAdmin.jsx
                    ├── ResumenDashboard.jsx
                    ├── TablaItemsCriticos.jsx
                    ├── TablaProductos.jsx
                    ├── VentanaConfirmacion.jsx
                └── 📁carrito
                    ├── ListaCarrito.jsx
                └── 📁catalogo
                    ├── CategoriasCatalogo.jsx
                    ├── ContenidoCatalogo.jsx
                    ├── FiltrosCatalogo.jsx
                    ├── ProductosLista.jsx
                    ├── ProductosLista.test.jsx
                └── 📁detalle-producto
                    ├── DetalleProductoContenido.jsx
                └── 📁formularios
                    ├── FormularioContacto.jsx
                    ├── LoginForm.jsx
                    ├── RegisterForm.jsx
                └── 📁home
                    ├── BannerNosotros.jsx
                    ├── EventosDestacados.jsx
                    ├── ProductosDestacados.jsx
                └── 📁movimientos
                    ├── ListaMovimientos.jsx
                    ├── TarjetaMovimiento.jsx
                └── 📁nosotros
                    ├── ContenidoNosotros.jsx
                ├── Footer.jsx
                ├── Header.jsx
            └── 📁templates
                ├── AdminDashboardTemplate.jsx
                ├── AdminGestionProductosTemplate.jsx
                ├── AdminLayout.jsx
                ├── CarritoTemplate.jsx
                ├── CatalogoTemplate.jsx
                ├── DetalleProductoTemplate.jsx
                ├── HomeTemplate.jsx
                ├── ItemsCriticosTemplate.jsx
                ├── LoginTemplate.jsx
                ├── MovimientosTemplate.jsx
                ├── NosotrosTemplate.jsx
                ├── ProductosTemplate.jsx
                ├── RegisterTemplate.jsx
        └── 📁context
            ├── AuthContext.jsx
            ├── CarritoContext.jsx
            ├── MovimientosContext.jsx
            ├── ProductoContext.jsx
        └── 📁data
            ├── categoriasData.js
            ├── eventosData.js
            ├── productosData.js
        └── 📁hooks
            ├── ScrollToTop.jsx
            ├── useCatalogo.jsx
            ├── useProductosPorCategoria.jsx
        └── 📁pages
            └── 📁AdminDashboard
                ├── AdminDashboard.jsx
            └── 📁AdminGestionProductos
                ├── AdminGestionProductos.jsx
            └── 📁Carrito
                ├── Carrito.jsx
            └── 📁Catalogo
                ├── Catalogo.jsx
            └── 📁DetalleProducto
                ├── DetalleProducto.jsx
            └── 📁Home
                ├── Home.jsx
            └── 📁ItemsCriticos
                ├── ItemsCriticos.jsx
            └── 📁Login
                ├── Login.jsx
            └── 📁Movimientos
                ├── Movimientos.jsx
            └── 📁Nosotros
                ├── Nosotros.jsx
            └── 📁PaginaProductos
                ├── PaginaProductos.jsx
            └── 📁Register
                ├── Register.jsx
        └── 📁routes
            ├── RutaProtegida.jsx
        └── 📁services
            ├── productService.jsx
            ├── productService.test.jsx
        └── 📁utils
            └── 📁validaciones
                ├── validacionApellido.js
                ├── validacionConfirmPassword.js
                ├── validacionCorreo.js
                ├── validacionCorreoLogin.js
                ├── validacionesGenerales.js
                ├── validacionFormProducto.js
                ├── validacionNombre.js
                ├── validacionPassword.js
                ├── validacionRut.js
                ├── validacionTelefono.js
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── setupTests.js
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
   git clone https://github.com/Bayron-png/SonidoVivo
   cd SonidoVivo
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
|09-10-2026|Luis   | Se actualiza visualizacion de estructura en el readme|
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
|13-10-2026|Luis   |Se agregaron validaciones para campos input "nombre" y "apellido" del formulario de registro, separacion de responsabilidades, las validaciones ahora se encuentran en sus respectivos archivos js en la carpeta utils/validaciones. Los campos obligatorios tienen un mensaje de error personalizado y este cambia segun la validacion que no esten cumpliendo (minimo de longitud y ingresar numeros o simbolos). Tambien se cambio la validacion del correo durante la separacion de responsabilidades para que acepte cualquier dominio de correo y no solo uno corporativo como tenia en un principio. Esto en la rama "feature/validations-inputs", no se hizo pull request al main.
|13-10-2026|Bayron |       |
|14-10-2026|José   |       |
|14-10-2026|Luis   |Se finalizo la creacion de las validaciones de campos de los formularios login y register, ambos teniendo validadores en el formulario como archivos js individuales por cada campo que tuviera que cumplir con algun criterio. Cuando pasan las validaciones redireccionan a la pagina de inicio. Se corrigieron errores en el proceso. Se realizo merge pull request de la rama feature/validations-inputs con el main|
|14-10-2026|Bayron | Creación del apartado de administración, en donde se modifican, eliminan o agregan productos con parámetros dinámicos. |
|15-10-2026|José   |       |
|15-10-2026|Luis   |       |
|15-10-2026|Bayron | Correcciones de errores en el apartado de administración, corrección de lógica y errores menores. Creación del apartado de "Detalle de producto" (al clickear el producto en catálogo), correcciones menores de niveles de stock. |
|16-10-2026|José   |       |
|16-10-2026|Luis   |       |
|16-10-2026|Bayron |       |
|17-10-2026|José   |       |
|17-10-2026|Luis   |       |
|17-10-2026|Bayron |       |
|18-10-2026|José   |       |
|18-10-2026|Luis   |       |
|18-10-2026|Bayron | Orden de los archivos y correcciones de errores de redirección en header y menús de administración. Corrección de rutas de páginas y cambio en la página de catálogo, añadiendo filtros y barra de búsqueda sin cambiar la estética anterior. |
|19-10-2026|José   |       |
|19-10-2026|Luis   |       |
|19-10-2026|Bayron |       |
|20-10-2026|José   |       |
|20-10-2026|Luis   |       |
|20-10-2026|Bayron |       |
|21-10-2026|José   |       |
|21-10-2026|Luis   |Se agregaron validaciones al formulario de producto del perfil administrador: Valida nombre, modelo, categoría, precio, stock e imagen. Muestra errores al interactuar con el campo o al intentar enviar. Deshabilita "Guardar cambios" en edición si no hay modificaciones. Reinicia el estado del formulario al abrirlo. Agrega prop disabled a ButtonAction|
|21-10-2026|Bayron |       |
|22-10-2026|José   |       |
|22-10-2026|Luis   |       |
|22-10-2026|Bayron | Añadido de pruebas unitarias y configuración del entorno de pruebas. |
|23-10-2026|José   |       |
|23-10-2026|Luis   |       |
|23-10-2026|Bayron |       |
|24-10-2026|José   |       |
|24-10-2026|Luis   |       |
|24-10-2026|Bayron |       |
|25-10-2026|José   |       |
|25-10-2026|Luis   |       |
|25-10-2026|Bayron |       |
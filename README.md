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

El sistema creado brinda al usuario la posibilidad de ver el catálogo con precios y disponibilidad sin tener que consultar al Whatsapp o Instagram,
y a su vez pudiendo recibir pedidos de forma online con flujo de pagos, seguimiento y actualización de stock.


## Estructura del Proyecto
```
Directory structure:
└── 📁SonidoVivo/
    ├── README.md
    ├── 📁SonidoVivo/
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── 📁public/
    │   │   ├── favicon.svg
    │   │   ├── icons.svg
    │   │   └── logo.png
    │   ├── 📁src/
    │   │   ├── App.jsx
    │   │   ├── 📁assets/
    │   │   │   ├── 📁categorias-catalogo/
    │   │   │   │   ├── accesorios.png
    │   │   │   │   ├── amplificador.png
    │   │   │   │   ├── bajo-electrico.png
    │   │   │   │   ├── bateria.png
    │   │   │   │   ├── estudio-grabacion.png
    │   │   │   │   ├── guitarra-acustica.png
    │   │   │   │   ├── guitarra-electrica.png
    │   │   │   │   ├── microfono.png
    │   │   │   │   ├── pedal-efectos.png
    │   │   │   │   └── teclado-piano.png
    │   │   │   ├── react.svg
    │   │   │   └── vite.svg
    │   │   ├── 📁components/
    │   │   │   ├── 📁atoms/
    │   │   │   │   ├── TituloRedondeado.jsx
    │   │   │   │   ├── 📁botones/
    │   │   │   │   │   ├── BotonEnviar.jsx
    │   │   │   │   │   └── BotonVolver.jsx
    │   │   │   │   ├── 📁catalogo/
    │   │   │   │   │   ├── ImagenCategoria.jsx
    │   │   │   │   │   └── TituloCategoria.jsx
    │   │   │   │   ├── 📁footer/
    │   │   │   │   │   └── TextoFooter.jsx
    │   │   │   │   ├── 📁form/
    │   │   │   │   │   ├── ApellidoInput.jsx
    │   │   │   │   │   ├── ConfirmPasswordInput.jsx
    │   │   │   │   │   ├── GmailInput.jsx
    │   │   │   │   │   ├── NombreInput.jsx
    │   │   │   │   │   ├── PasswordInput.jsx
    │   │   │   │   │   ├── RutInput.jsx
    │   │   │   │   │   └── TelefonoInput.jsx
    │   │   │   │   └── 📁header/
    │   │   │   │       ├── LogoHeader.jsx
    │   │   │   │       └── TextoHeader.jsx
    │   │   │   ├── 📁molecules/
    │   │   │   │   ├── CamposLogin.jsx
    │   │   │   │   ├── CamposRegister.jsx
    │   │   │   │   ├── CategoriaProducto.jsx
    │   │   │   │   └── ProductCard.jsx
    │   │   │   ├── 📁organisms/
    │   │   │   │   ├── CategoriasCatalogo.jsx
    │   │   │   │   ├── Footer.jsx
    │   │   │   │   ├── Header.jsx
    │   │   │   │   ├── LoginForm.jsx
    │   │   │   │   └── RegisterForm.jsx
    │   │   │   └── 📁templates/
    │   │   │       ├── CatalogoTemplate.jsx
    │   │   │       ├── LoginTemplate.jsx
    │   │   │       └── RegisterTemplate.jsx
    │   │   ├── 📁data/
    │   │   │   └── categoriasData.js
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   ├── 📁pages/
    │   │   │   ├── 📁Catalogo/
    │   │   │   │   └── Catalogo.jsx
    │   │   │   ├── 📁Login/
    │   │   │   │   └── Login.jsx
    │   │   │   └── 📁Register/
    │   │   │       └── Register.jsx
    │   │   └── 📁utils/
    │   │       └── 📁validaciones/
    │   └── vite.config.js
    ├── package-lock.json
    └── package.json
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
[Drive-SonidoVivo](https://drive.google.com/drive/folders/12_GrU2BjxDYlcv_tYToIAlKlEODdBjeE?usp=drive_link)
[Tablero-Trello](https://trello.com/b/huyWCOKN)
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
|12-10-2026|Bayron |       |
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

## 📂 Estructura del Proyecto (Frontend)

El frontend es una _Single Page Application_ (SPA) construida con **React** y **Vite**. Para el diseño y la interfaz de usuario, se utiliza **Tailwind CSS**, lo que permite un desarrollo ágil basado en clases de utilidad.

A continuación, se detalla la función de cada directorio y archivo principal:

### 🗂 Directorios Principales (`src/`)

- **`📂 assets/`**
  Recursos estáticos (imágenes, iconos, fuentes). Al usar Tailwind, aquí suele haber menos archivos CSS tradicionales, ya que los estilos se aplican directamente en el código.

- **`📂 components/`**
  Componentes reutilizables de la interfaz. Con Tailwind, estos componentes encapsulan las clases largas de utilidad para mantener el código limpio en las páginas.

- **`📂 contexts/`**
  Manejo del Estado Global. Permite compartir información (como el usuario logueado o el tema de la app) en toda la aplicación.

- **`📂 hooks/`**
  Lógica reutilizable. Separa la funcionalidad compleja de la interfaz visual.

- **`📂 pages/`**
  Vistas principales de la aplicación. Agrupan los componentes para formar las pantallas que ve el usuario (ej. `Home`, `Dashboard`).

- **`📂 utils/`**
  Funciones auxiliares de JavaScript puro (formateo de fechas, validaciones) independientes de la interfaz gráfica.

### 📄 Archivos de Estilos y Configuración

Dado que se usa Tailwind CSS, la configuración de estilos es clave:

- **`📄 tailwind.config.js`**
  Archivo de configuración de Tailwind. Aquí se personaliza el sistema de diseño y se indica en qué archivos debe buscar clases para generar el CSS.

- **`📄 postcss.config.js`**
  Configuración del procesador de CSS. Es necesario para que Vite y Tailwind trabajen juntos, transformando las utilidades de Tailwind en CSS estándar que el navegador entienda.

- **`📄 src/index.css`**
  Punto de entrada de los estilos globales. Aquí se insertan las directivas de Tailwind para inicializar el framework en toda la app.

### 📄 Archivos Clave del Aplicativo

- **`📄 src/main.jsx`**
  Punto de entrada de React. Importa el `index.css` y monta la aplicación en el DOM.

- **`📄 src/App.jsx`**
  Componente raíz. Define la estructura base y el enrutamiento de la aplicación.

- **`📄 vite.config.js`**
  Configuración de Vite. Maneja el servidor de desarrollo, los plugins y la optimización del build final.

- **`📄 index.html`**
  HTML raíz donde se inyecta la aplicación React.

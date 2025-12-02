## 📂 Estructura del Proyecto (Backend)

El backend de esta aplicación está construido con **Node.js** y sigue una arquitectura modular y en capas para asegurar la separación de responsabilidades. A continuación, se describe la función de cada directorio y archivo principal:

### 🗂 Directorios Principales (`src/`)

El código fuente se encuentra dentro de la carpeta `src`.

- **`📂 controllers/`**
  Capa de Controladores. Aquí se define la lógica para manejar las peticiones HTTP entrantes (Request) y enviar las respuestas al cliente (Response). Los controladores actúan como intermediarios, recibiendo datos y delegando la lógica de negocio a los _servicios_.

- **`📂 services/`**
  Capa de Servicios. Contiene toda la **lógica de negocio** de la aplicación. Aquí es donde ocurren los cálculos, validaciones complejas y reglas del sistema. Esta capa es invocada por los controladores y, a su vez, invoca a los _repositorios_ para obtener datos.

- **`📂 repositories/`**
  Capa de Acceso a Datos. Se encarga exclusivamente de la interacción directa con la base de datos (consultas SQL, operaciones de ORM, etc.). Aísla la lógica de base de datos del resto de la aplicación.

- **`📂 routes/`**
  Definición de rutas. Aquí se declaran los endpoints de la API (por ejemplo, `GET /users`, `POST /login`) y se asignan los _middlewares_ y _controladores_ correspondientes a cada ruta.

- **`📂 middlewares/`**
  Funciones intermedias que se ejecutan antes de llegar al controlador o después de él. Se utilizan para tareas transversales como autenticación, autorización, validación de datos entrantes y manejo de errores.

- **`📂 schemas/`**
  Definición de esquemas de datos. Dependiendo de la implementación, aquí se pueden encontrar los modelos de base de datos o esquemas de validación (por ejemplo, usando Joi o Zod) para asegurar que la información que entra al sistema tenga el formato correcto.

### 📄 Archivos de Configuración y Entrada

- **`📄 src/app.js`**
  Configuración de la aplicación. Aquí se inicializan los middlewares globales (CORS) y se montan las rutas principales.

- **`📄 src/index.js`**
  Punto de entrada de la aplicación. Se encarga de importar la configuración de la app e iniciar el servidor, escuchando en el puerto definido.

- **`📄 config.js`**
  Módulo de configuración. Centraliza las variables de entorno y configuraciones globales (credenciales de base de datos, puertos, claves secretas) para mantenerlas organizadas y separadas del código lógica.

- **`📄 package.json`**
  Archivo de manifiesto de Node.js que contiene los metadatos del proyecto y la lista de dependencias necesarias para ejecutar el backend.

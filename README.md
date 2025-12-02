# 📂 Estructura del Repositorio

Este repositorio alberga el código fuente de una aplicación web para TecnoRepuestos S.A., organizada bajo una arquitectura de separación de responsabilidades entre el cliente y el servidor.

El proyecto está estructurado como un **Monorepo**, dividiendo claramente la lógica de negocio y la interfaz de usuario en dos directorios principales.

## 🗂 Organización de Directorios

A continuación se describe el propósito general de las carpetas que componen la raíz del proyecto:

### 1. `backend/` (Servidor)

Contiene toda la lógica del lado del servidor. Está construido sobre **Node.js** y sigue una **Arquitectura en Capas** (Controller-Service-Repository) para garantizar la escalabilidad y el mantenimiento del código.

- **Función:** Manejo de API REST, conexión a base de datos, autenticación y lógica de negocio.
- **Documentación detallada:** Consulte el archivo `README.md` dentro de esta carpeta para ver el detalle de controladores, rutas y servicios.

### 2. `frontend/` (Cliente)

Contiene el código fuente de la interfaz de usuario. Es una **Single Page Application (SPA)** construida con **React** y **Vite**, utilizando **Tailwind CSS** para los estilos.

- **Función:** Renderizado de vistas, manejo de estado del cliente, interacción con el usuario y consumo de la API del backend.
- **Documentación detallada:** Consulte el archivo `README.md` dentro de esta carpeta para ver el detalle de componentes, páginas y contextos.

---

## 🏗 Diagrama de Arquitectura (Conceptual)

La estructura de carpetas refleja el flujo de comunicación de la aplicación:

```text
[ RAIZ DEL PROYECTO ]
│
├── backend/  --> Procesa datos y gestiona la base de datos.
│                 (API, Controladores, Modelos)
│
└── frontend/ --> Consume los datos y los presenta al usuario.
                  (Interfaz React, Estilos Tailwind, Vistas)
```

# Angular Simple Modal CRUD

Una aplicación completa de Angular 19 que demuestra operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando modales elegantes y JSON Server como backend simulado. Diseñada con Tailwind CSS y DaisyUI para una interfaz moderna y responsiva.

![Angular](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4.0-5A67D8?style=for-the-badge&logo=daisyui)

## 🚀 Características

- ✨ **Angular 19**: Framework moderno con las últimas características
- 🎭 **Modales Elegantes**: Interfaz intuitiva para operaciones CRUD
- 📊 **JSON Server**: API REST simulada para desarrollo rápido
- 🎨 **Tailwind CSS + DaisyUI**: Diseño moderno y componentes hermosos
- 📱 **Responsivo**: Adaptable a diferentes tamaños de pantalla
- 🔄 **RxJS**: Manejo reactivo de datos
- 📋 **Paginación**: Navegación eficiente de datos
- 🛡️ **TypeScript**: Código tipado y robusto
- 🎯 **Validaciones**: Formularios con validación en tiempo real
- 🎉 **Notificaciones**: Feedback visual con ngx-sonner

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Angular 19**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Tailwind CSS**: Framework de CSS utility-first
- **DaisyUI**: Componentes predefinidos para Tailwind
- **RxJS**: Programación reactiva
- **ngx-sonner**: Sistema de notificaciones
- **UUID**: Generación de identificadores únicos

### Backend (Simulado)

- **JSON Server**: API REST simulada
- **Node.js**: Entorno de ejecución

### Herramientas de Desarrollo

- **Angular CLI**: Herramientas de desarrollo
- **npm**: Gestor de paquetes
- **Git**: Control de versiones

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene con Node.js) o **yarn**
- **Git** - [Descargar aquí](https://git-scm.com/)
- **Angular CLI** (opcional pero recomendado)

```bash
# Verificar versiones instaladas
node --version
npm --version
git --version

# Instalar Angular CLI globalmente (opcional)
npm install -g @angular/cli
```

## 🔧 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
# Clonar desde GitHub
git clone https://github.com/jebcdev/NgSimpleModalCRUD.git

# Navegar al directorio del proyecto
cd NgSimpleModalCRUD
```

### 2. Instalar Dependencias

```bash
# Instalar dependencias del proyecto
npm install

# O si prefieres usar yarn
yarn install
```

### 3. Configurar el Backend (JSON Server)

#### Opción A: Instalación Global de JSON Server

```bash
# Instalar JSON Server globalmente
npm install -g json-server

# Iniciar el servidor con el archivo de datos
json-server --watch src/app/data/data.json --port 4000

# El servidor estará disponible en http://localhost:4000
```

#### Opción B: Usando npx (sin instalación global)

```bash
# Ejecutar JSON Server directamente
npx json-server --watch src/app/data/data.json --port 4000
```

#### Opción C: Script npm (recomendado)

```bash
# Agregar script en package.json
"scripts": {
  "json-server": "json-server --watch src/app/data/data.json --port 4000"
}

# Ejecutar el script
npm run json-server
```

### 4. Iniciar la Aplicación Angular

```bash
# En una nueva terminal, iniciar el servidor de desarrollo
ng serve

# O usando npm
npm start

# La aplicación estará disponible en http://localhost:4200
```

## 🚀 Uso de la Aplicación

### Página Principal

- Navega a `http://localhost:4200`
- Verás una página de bienvenida con información sobre el proyecto
- Utiliza el botón "Contactos" en la navegación para acceder al CRUD

### Gestión de Contactos

#### Crear Nuevo Contacto

1. Haz clic en el botón "Crear" en la página de contactos
2. Se abrirá un modal con el formulario
3. Completa los campos requeridos:
   - **Nombre**: Mínimo 2 caracteres
   - **Email**: Formato de email válido
   - **Teléfono**: Número de teléfono
4. Haz clic en "Guardar" para crear el contacto

#### Editar Contacto Existente

1. En la tabla de contactos, haz clic en "Editar" en la fila del contacto
2. Se abrirá el modal con los datos pre-cargados
3. Modifica los campos necesarios
4. Haz clic en "Guardar" para actualizar

#### Eliminar Contacto

1. Haz clic en "Eliminar" en la fila del contacto
2. El contacto se eliminará inmediatamente
3. Recibirás una notificación de confirmación

#### Navegación y Paginación

- Utiliza los controles de paginación en la parte inferior
- Cambia el número de elementos por página (10, 25, 50, 100)
- Navega entre páginas usando los botones numéricos

## 📁 Estructura del Proyecto

```
NgSimpleModalCRUD/
├── src/
│   ├── app/
│   │   ├── components/           # Componentes reutilizables
│   │   │   └── resource-status/  # Componentes de estado (loading, error, empty)
│   │   ├── data/                 # Archivos de datos JSON
│   │   │   ├── data.json         # Datos principales
│   │   │   └── dataOrg.json      # Datos originales/backup
│   │   ├── interfaces/           # Interfaces TypeScript
│   │   │   ├── contact.interface.ts
│   │   │   └── contacts-paginated.interface.ts
│   │   ├── layout/               # Layout de la aplicación
│   │   │   └── layout.component.ts
│   │   ├── pages/                # Páginas principales
│   │   │   ├── contacts/         # Página de contactos
│   │   │   │   ├── components/   # Componentes específicos de contactos
│   │   │   │   │   ├── forms/    # Formularios (crear/editar)
│   │   │   │   │   ├── header/   # Cabecera de la página
│   │   │   │   │   ├── pagination/ # Componente de paginación
│   │   │   │   │   └── table/    # Tabla de contactos
│   │   │   │   └── contacts-page.component.ts
│   │   │   └── home/             # Página de inicio
│   │   ├── routes/               # Configuración de rutas
│   │   ├── services/             # Servicios de la aplicación
│   │   │   └── contacts.service.ts
│   │   ├── app.component.ts      # Componente raíz
│   │   ├── app.config.ts         # Configuración de la app
│   │   └── app.routes.ts         # Rutas principales
│   ├── environments/             # Variables de entorno
│   ├── index.html               # HTML principal
│   ├── main.ts                  # Punto de entrada
│   └── styles.css               # Estilos globales
├── package.json                 # Dependencias y scripts
├── tailwind.config.js          # Configuración de Tailwind
├── angular.json                # Configuración de Angular
└── README.md                   # Este archivo
```

## 🌐 API Endpoints (JSON Server)

El backend simulado expone los siguientes endpoints:

### Contactos

| Método | Endpoint        | Descripción                  | Parámetros                       |
| ------ | --------------- | ---------------------------- | -------------------------------- |
| GET    | `/contacts`     | Obtener todos los contactos  | `_page`, `_per_page`             |
| GET    | `/contacts/:id` | Obtener contacto por ID      | -                                |
| POST   | `/contacts`     | Crear nuevo contacto         | Body: `{name, email, phone}`     |
| PUT    | `/contacts/:id` | Actualizar contacto completo | Body: `{id, name, email, phone}` |
| PATCH  | `/contacts/:id` | Actualizar contacto parcial  | Body: campos a actualizar        |
| DELETE | `/contacts/:id` | Eliminar contacto            | -                                |

### Ejemplos de Uso

```bash
# Obtener todos los contactos con paginación
GET http://localhost:4000/contacts?_page=1&_per_page=25

# Crear nuevo contacto
POST http://localhost:4000/contacts
Content-Type: application/json
{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "phone": "123456789"
}

# Actualizar contacto
PUT http://localhost:4000/contacts/123
Content-Type: application/json
{
  "id": "123",
  "name": "Juan Carlos Pérez",
  "email": "juancarlos@email.com",
  "phone": "987654321"
}

# Eliminar contacto
DELETE http://localhost:4000/contacts/123
```

## 🎯 Características Técnicas

### Gestión de Estado Reactivo

- Utiliza `rxResource` para manejo automático de estados de carga
- Signals para manejo de estado local
- RxJS para operaciones asíncronas

### Validaciones de Formularios

- Validación en tiempo real con Angular Reactive Forms
- Mensajes de error personalizados
- Validaciones:
  - Nombre: requerido, mínimo 2 caracteres
  - Email: requerido, formato válido
  - Teléfono: requerido

### Paginación Inteligente

- Navegación por páginas
- Selector de elementos por página
- Información de registros mostrados
- Botones de navegación con estados

### Notificaciones

- Feedback visual con ngx-sonner
- Notificaciones de éxito y error
- Posicionamiento personalizable

## 🎨 Personalización

### Temas y Estilos

La aplicación utiliza DaisyUI, que permite cambiar temas fácilmente:

```html
<!-- En index.html -->
<html data-theme="light"></html>
```

Temas disponibles: `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`

### Variables de Entorno

Modifica `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  appName: "Tu App Name",
  apiUrl: "http://localhost:4000", // Cambia la URL de la API
};
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm start                 # Iniciar servidor de desarrollo
npm run build            # Construir para producción
npm run watch            # Construir y observar cambios
npm run test             # Ejecutar pruebas unitarias

# JSON Server
npm run json-server      # Iniciar backend simulado (si está configurado)
```

## 🤝 Contribuir

1. **Fork** el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Estándares de Código

- Utiliza TypeScript estricto
- Sigue las convenciones de Angular

## 🐛 Solución de Problemas

### Errores Comunes

#### Error: "Port 4200 is already in use"

```bash
# Usar un puerto diferente
ng serve --port 4201
```

#### Error: "JSON Server not found"

```bash
# Instalar JSON Server
npm install -g json-server

# O usar npx
npx json-server --version
```

#### Error: "Cannot connect to API"

- Verifica que JSON Server esté ejecutándose en el puerto 4000
- Revisa la configuración en `environment.ts`
- Comprueba que no haya problemas de CORS

#### Problemas de Estilos

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Logs de Depuración

- Abre las herramientas de desarrollador (F12)
- Revisa la consola para errores
- Verifica las llamadas de red en la pestaña Network

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**JEBC** - [GitHub](https://github.com/jebcdev)

## 🙏 Agradecimientos

- Equipo de Angular por el excelente framework
- Comunidad de Tailwind CSS y DaisyUI
- Creadores de JSON Server
- Desarrolladores de ngx-sonner

---

⭐ **¡Si este proyecto te ha sido útil, considera darle una estrella en GitHub!**

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

1. Revisa la documentación anterior
2. Busca en los [Issues](https://github.com/jebcdev/NgSimpleModalCRUD/issues) existentes
3. Crea un nuevo issue si no encuentras solución
4. Describe el problema con el máximo detalle posible

---

**Happy Coding! 🚀**

# Melody: Plataforma de Gestión de Música

## Introducción

Melody es una plataforma integral diseñada para gestionar colecciones de música utilizando el SDK de Spotify, con un backend potenciado por PostgreSQL, Redis y Elasticsearch. La plataforma permite a los usuarios explorar, descargar y gestionar su música, ofreciendo características como la creación de playlists, búsqueda de música y más. El proyecto está containerizado usando Docker para asegurar un fácil despliegue y escalabilidad.

## Estructura del Proyecto

El proyecto está organizado en varios directorios y archivos, cada uno cumpliendo una función específica. Aquí tienes un desglose de la estructura de directorios:



```

melody/
├── .next/
├── downloads/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   ├── files/
│   │   │   ├── upload.ts
│   │   └── users/
│   │       ├── getAll.ts
│   │       ├── login.ts
│   │       └── register.ts
│   ├── components/
│   │   ├── ArtistCard.tsx
│   │   ├── Button.tsx
│   │   ├── Callback.tsx
│   │   ├── Component.tsx
│   │   ├── DownloadForm.tsx
│   │   ├── DownloadSteps.tsx
│   │   ├── Ellipse18.tsx
│   │   ├── Ellipse21.tsx
│   │   ├── FeatureStrip.tsx
│   │   ├── FileUploader.tsx
│   │   ├── FloatingPlayer.tsx
│   │   ├── Footer.tsx
│   │   ├── GradientEllipses.tsx
│   │   ├── Header.tsx
│   │   ├── HeaderDashB.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Library.tsx
│   │   ├── Marquee.tsx
│   │   ├── MusicGenre.tsx
│   │   ├── MusicPlayer.tsx
│   │   ├── PlaylistCard.tsx
│   │   ├── SearchAlt.tsx
│   │   ├── SongCard.tsx
│   │   ├── Tag.tsx
│   │   └── UserInfo.tsx
│   ├── models/
│   ├── pages/
│   │   ├── api/
│   │   │   ├── files/
│   │   │   │   ├── download.ts
│   │   │   │   └── upload.ts
│   ├── spotify/
│   │   ├── spotifyServices.ts
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── fileSlice.ts
│   │   │   ├── userSlice.ts
│   │   ├── store.ts
│   ├── styles/
│   │   ├── globals.css
│   ├── utils/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   ├── elastisearch.ts
│   │   ├── firebaseConfig.ts
│   │   ├── initAuth.ts
│   │   ├── redis.ts
│   │   ├── spotify.ts
│   │   ├── spotifyService.ts
│   │   └── global.d.ts
├── .env
├── .env.local
├── Dockerfile
├── docker-compose.yml
├── README.md

```





## Características

- **Autenticación de Usuarios**: Los usuarios pueden registrarse e iniciar sesión usando su correo electrónico, Google o GitHub a través de Firebase Authentication.
- **Gestión de Música**: Los usuarios pueden explorar, descargar y gestionar su música, incluyendo la creación de playlists y la selección de géneros.
- **Integración con Spotify**: La aplicación se integra con el SDK de Spotify para ofrecer funcionalidades de reproducción y descarga de música.
- **Almacenamiento de Datos**: Los archivos de música y los metadatos se almacenan en PostgreSQL, con caché implementado usando Redis para un acceso más rápido.
- **Funcionalidad de Búsqueda**: Elasticsearch se utiliza para capacidades de búsqueda eficientes y potentes dentro de la aplicación.
- **Dockerización**: Toda la aplicación, incluidos todos los servicios, está containerizada usando Docker para un fácil despliegue y escalabilidad.

## Ramas

- **Leonardo**: Se implementó y probó la integración con el SDK de Spotify.
- **Alex**: Se centró en la dockerización del proyecto y la configuración de Docker Compose para los servicios.

## Empezando

### Prerrequisitos

Asegúrate de tener lo siguiente instalado en tu sistema:

- Node.js (v18 o superior)
- Docker y Docker Compose
- Cuenta de Desarrollador de Spotify

### Instalación

1. Clona el repositorio:
```
git clone https://github.com/KarlaAns/Melody
```


2. Navega al directorio del proyecto:
```
cd melody
```


3. Instala las dependencias:
```
npm install
```

4. Configura tus variables de entorno:

Crea un archivo `.env` y `.env.local` en el directorio raíz y agrega tus variables de entorno, incluyendo tus credenciales de Spotify y configuraciones de base de datos.

### Ejecución de la Aplicación

Para iniciar la aplicación, ejecuta el siguiente comando:
```
docker-compose up --build
```


Esto iniciará todos los servicios, incluyendo el frontend, backend, PostgreSQL, Redis y Elasticsearch.

### Accediendo a la Aplicación

Una vez que la aplicación esté en funcionamiento, puedes acceder a ella navegando a `http://localhost:3000` en tu navegador web.

## Contribuyendo

Si deseas contribuir a este proyecto, por favor crea una nueva rama, haz tus cambios y envía una solicitud de extracción. Asegúrate de que tu código siga el estilo y las convenciones existentes.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

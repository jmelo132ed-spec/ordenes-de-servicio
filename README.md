# Foc i Fred

Web de instalación, reparación y venta de calderas, climatización y línea blanca en Barcelona. El formulario abre WhatsApp Business con la solicitud escrita.

## Poner tu WhatsApp

Copia `.env.example` a `.env` y rellena el número con prefijo 34, sin espacios:

```
PUBLIC_WHATSAPP_NUMBER=34612345678
```

En Vercel, la misma variable se añade en Settings → Environment Variables. Después hay que volver a desplegar.

Antes de activar Google Ads, completa también `PUBLIC_LEGAL_NAME`, `PUBLIC_NIF`, `PUBLIC_ADDRESS` y `PUBLIC_EMAIL`. Si vas a medir campañas, añade `PUBLIC_GA_ID` y, si lo usas, `PUBLIC_ADS_ID`. La medición queda apagada hasta que la visita acepta las cookies.

## Local

```
npm install
npm run dev
```

## GitHub y Vercel

El proyecto es Astro estático. En Vercel, importa el repositorio y deja el framework en Astro. El comando de build es `npm run build` y la salida es `dist`.

`USE_MOCK=true` publica los servicios, marcas y zonas desde `src/data/mockData.ts`. Si más adelante hay una API, `USE_MOCK=false` y `API_URL` cambian el origen de esos datos.

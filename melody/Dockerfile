# Usa la imagen oficial de Node.js como base
FROM node:18-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia el código fuente de la aplicación al contenedor
COPY . .

# Configura el directorio de salida para la construcción (ajustado si usas `src`)
ENV NEXT_PUBLIC_SRC_DIR=/src

# Construye la aplicación
RUN npm run build

# Expone el puerto que Next.js usará
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "start"]

# Multi-stage Dockerfile para Suitech Web
# Etapa 1: Build de la aplicación con Node.js
FROM node:22-alpine AS build-stage

WORKDIR /app

# Copiar manifiestos de paquetes
COPY package*.json ./

# Instalar dependencias limpias
RUN npm ci

# Copiar el código fuente
COPY . .

# Compilar proyecto para producción
RUN npm run build

# Etapa 2: Servir con servidor web ligero Nginx
FROM nginx:alpine AS production-stage

# Copiar archivos compilados desde la etapa de build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copiar configuración optimizada de Nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar servidor Nginx
CMD ["nginx", "-g", "daemon off;"]

# ---- Build Stage ----
FROM node:22.12.0-alpine AS build

# Build-time args
ARG PORT=3000 \
  VITE_FRONTEND_URL

ENV PORT=$PORT \
  VITE_FRONTEND_URL=$VITE_FRONTEND_URL

WORKDIR /app

# Copy package.json + lock first for better caching
COPY package*.json ./

# Install deps
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---- Run Stage ----
FROM nginx:stable-alpine

# Renew PORT arg from previous stage
ARG PORT

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE $PORT

# Start nginx
ENTRYPOINT ["nginx","-g","daemon off;"]

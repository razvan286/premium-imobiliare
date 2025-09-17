# Node 22.x LTS
FROM node:22.12.0-alpine AS base

ARG PORT=3000 \
  VITE_FRONTEND_URL

# In production move, vite does not read .env files and only variables present at buildtime are included in the bundle
ENV PORT=$PORT \
  VITE_FRONTEND_URL=$VITE_FRONTEND_URL

# /frontend dir of the monorepo already specified in the docker build command
WORKDIR /

FROM base AS dependencies

# Copy only the package we're building
COPY . ./

RUN npm ci
RUN npm run build


# Get build and host it on nginx
FROM nginx:stable-alpine

# Renew PORT arg from previous stage
ARG PORT
RUN apk update && apk add --no-cache curl && apk add --no-cache bash

# Copy build folder from Vite
COPY --from=dependencies /dist /usr/share/nginx/html
# Copy nginx config
COPY --from=dependencies /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $PORT
ENTRYPOINT ["nginx","-g","daemon off;"]

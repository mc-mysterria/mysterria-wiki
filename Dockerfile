# Debian rather than alpine: sharp (image service, pinned 0.32) has no reliable
# musl prebuild and compiling libvips in the build stage is far slower.
FROM node:22-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Switches astro.config.mjs off the Vercel adapter so the build lands in dist/
# as plain static files. Without it the config still targets Vercel, which is
# what keeps the existing Vercel deploy buildable from the same source.
ENV DOCKER_BUILD=1
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

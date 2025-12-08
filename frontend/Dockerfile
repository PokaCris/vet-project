FROM node:22.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm update
COPY . .
RUN npm run build

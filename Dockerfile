cat > Dockerfile <<EOL
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev --omit=optional
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
EOL
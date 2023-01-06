FROM node:14-alpine
WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 9090
CMD ["node", "/app/node/index.js"]


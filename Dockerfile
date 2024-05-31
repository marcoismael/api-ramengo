FROM node:20-slim

WORKDIR /ramenGo

COPY . .

RUN npm i
RUN npm run build
EXPOSE 3002

CMD [ "node", "./dist/index.js" ]

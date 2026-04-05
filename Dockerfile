FROM node:20

WORKDIR /dockerApp


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "app.js"]
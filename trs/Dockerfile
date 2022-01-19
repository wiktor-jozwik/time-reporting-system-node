FROM node:16-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package.json  ./
COPY . .
CMD npm i
EXPOSE 8080
CMD npm start
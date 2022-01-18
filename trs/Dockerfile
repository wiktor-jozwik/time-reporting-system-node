FROM node:16-alpine
WORKDIR /app
COPY package.json  ./
COPY . .
CMD npm i
CMD ["sh", "build-front-for-production.sh"]
EXPOSE 8080
CMD npm start
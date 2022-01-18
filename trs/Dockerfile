FROM node:16-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package.json  ./
COPY . .
CMD npm i
#CMD ["sh", "build-front-for-production.sh"]
EXPOSE 8080
#CMD [ "nodemon", "-L" ,"server.js" ]
CMD npm start
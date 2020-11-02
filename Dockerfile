FROM node:10
WORKDIR /usr/src/app
COPY tools/. ./
RUN npm i
COPY build/. ./build/
EXPOSE 80
CMD [ "nodemon", "./server.js" ]

FROM node:current-slim
WORKDIR /usr/src/app/
COPY client/package.json .
RUN npm install
EXPOSE 8080
RUN ["npm" ,"start"]
COPY ..

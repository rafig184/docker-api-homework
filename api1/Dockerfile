FROM node:20-alpine3.17

WORKDIR /usr/app
RUN npm install -g ts-node
COPY src /usr/app/src
COPY package*.json /usr/app
COPY .env /usr/app/.env
# COPY tsconfig.json /usr/app

RUN npm install 


EXPOSE 4100
CMD ["npm" ,"start", "ts-node"]

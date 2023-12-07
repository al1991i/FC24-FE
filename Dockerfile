FROM node:16.20.0-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install -f

RUN npm install -g @angular/cli@14.0.0

COPY . .

CMD ng serve --host 0.0.0.0 --port 4200

EXPOSE 4200
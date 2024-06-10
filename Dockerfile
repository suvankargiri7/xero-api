FROM node:22-alpine
RUN npm install -g nodemon
WORKDIR /server
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start:dev"]

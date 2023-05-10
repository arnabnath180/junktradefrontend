FROM node:alpine
EXPOSE 3000
WORKDIR ./
COPY package.json ./
RUN npm install
COPY . ./
CMD ["npm","start"]
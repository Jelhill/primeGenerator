
FROM node:alpine

# Set the working directory to ./app
WORKDIR '/app'

COPY package.json ./


RUN npm install

RUN npm audit fix

COPY . .

# Run app.js when the container launches
CMD ["npm", "start"]

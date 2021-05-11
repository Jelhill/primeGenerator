
FROM node:alpine

RUN mkdir -p /app/src
# Set the working directory to ./app
WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# Run app.js when the container launches
CMD ["npm", "start"]
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Create client directory
WORKDIR /usr/src/app/client
# Navigate to client directory and install dependencies
RUN cd ./client
RUN npm install
RUN npm run build
# Return to the root directory and install server dependecies
RUN cd ..
WORKDIR /usr/src/app
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
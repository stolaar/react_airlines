FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Create client directory
WORKDIR /usr/src/app/client
# Navigate to client directory and install dependencies
RUN cd ./client
RUN npm ci --only=production
RUN npm run build
# Return to the root directory and install server dependecies
RUN cd ..
WORKDIR /usr/src/app
RUN npm ci --only=production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5001
CMD [ "npm", "start" ]
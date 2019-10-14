FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

# Install app dependencies
RUN npm ci --only=production

# Navigate to client directory and install dependencies
WORKDIR /usr/src/app/client
RUN npm ci --only=production
RUN npm run-script build
# Return to the root directory and install server dependecies
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 5001
CMD [ "npm", "start" ]
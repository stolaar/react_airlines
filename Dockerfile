FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

# Install app dependencies
RUN npm ci --only=production

WORKDIR /usr/src/app/client
RUN npm ci --only=production
RUN npm run-script build

WORKDIR /usr/src/app


EXPOSE 5001
CMD [ "npm", "start" ]
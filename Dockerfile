FROM node:8.10.0-alpine

# Set a working directory
WORKDIR /usr/src/app

# Install Node.js dependencies
RUN npm i

# Run the container under "node" user by default
USER node

# Set NODE_ENV env variable to "production" for faster expressjs
ENV NODE_ENV production

CMD [ "npm", "start" ]
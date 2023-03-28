# Set the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
FROM node:14-alpine

# The /app directory should act as the main application directory
WORKDIR /app
RUN npm install -g @angular/cli@11.2.12
# Copy the app package and package-lock.json file
COPY package*.json ./
COPY angular.json ./
COPY karma.conf.js ./
COPY tsconfig.*.json ./
COPY tsconfig.json ./
COPY tslint.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
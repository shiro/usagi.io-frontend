FROM node:9-alpine

WORKDIR /opt/app/

COPY package.json yarn.lock ./

# install dev dependencies
RUN yarn --check-files --frozen-lockfile && \
    chmod -R 777 node_modules

# copy files
COPY . ./

# build the bundle and clean up
RUN yarn prod:build && \
    yarn install --production --ignore-scripts --prefer-offline && \
    yarn cache clean && \
    rm -rf src assets config

CMD yarn prod:run

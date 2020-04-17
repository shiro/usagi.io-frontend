FROM node:13-alpine

ENV NODE_ENV=development

RUN apk add --no-cache \
    python g++ make imagemagick \
    bash gawk curl sed grep bc coreutils

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn --check-files --frozen-lockfile && \
    chmod -R 777 .

COPY . ./

CMD yarn --check-files --frozen-lockfile && yarn dev

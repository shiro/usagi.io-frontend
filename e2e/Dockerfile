FROM cypress/base:10
WORKDIR /app

# dependencies will be installed only if the package files change
COPY ./package.json ./
COPY ./yarn.lock ./

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
# ENV CI=1
RUN yarn --frozen-lockfile

# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN yarn run cypress verify

CMD yarn run wait-on http://fe:3000 && \
    yarn run cypress run

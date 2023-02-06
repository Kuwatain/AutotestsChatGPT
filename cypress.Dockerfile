# syntax=docker/dockerfile:1
FROM cypress/base:12
WORKDIR /cypress_test
COPY cypress_test /cypress_test
RUN npm install cypress
CMD [ "npx", "cypress", "run" ]
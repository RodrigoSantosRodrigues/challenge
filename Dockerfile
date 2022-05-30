FROM node:14-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /challenge
COPY . .
RUN yarn
#RUN npx knex migrate:up
#RUN npx knex seed:run
RUN yarn test
RUN yarn build
CMD ["node", "/src/app.js"]
EXPOSE 3000

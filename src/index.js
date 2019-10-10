#!/usr/bin/env node
const express = require("express");
const app = express();

var server = require('./app');

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || '3000';

app.use(
  '/static/graphql-playground-react',
  express.static(require.resolve('graphql-playground-react/package.json').slice(0, -12)),
);

server.applyMiddleware({ app });

app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)


/**
 * workaround for terminate process inside of container
 */
process.on('SIGINT', function() {
    process.exit();
});
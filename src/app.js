const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require("graphql-tools")
const { GraphQlSecurity, RoleDirective } = require('@tessaroto/graphql-security');
const glue = require('schemaglue')
const graphqlPath = process.env.NODE_ENV == 'development' ? "src/graphql" : "graphql";
const { schema, resolver } = glue(graphqlPath)
const config = require('./config/security')

const graphqlSecurity = new GraphQlSecurity({config:config});

const schemaBuilded = makeExecutableSchema({
  typeDefs: schema,
  schemaDirectives: {
    auth: RoleDirective
  },
  resolvers: resolver
});

const server = new ApolloServer({
  schema: schemaBuilded,
  introspection: true,
  playground: {
    cdnUrl: '/static',
    version: ''
  },
  context: async ({ req }) => {
    let authorization = await graphqlSecurity.getAuthorization(req);
    return { authorization: authorization };
  },
 });


module.exports = server;





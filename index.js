require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/index')


const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log('connected to db')
).then(() => server.listen({ port: 3000 })
).then(res => console.log(`Server running at ${res.url}`));
const { gql } = require('apollo-server');

module.exports = gql`
    type Query{
    sayHi: String!
    }
    type Student{
        id: ID!
        email: String!
        token: String!
        name: String!
        phone: Int!
        createdAt: String!
    }
    input RegisterInput{
        name: String!
        email: String!
        password: String!
        confirmPassword: String!
        phone: String!

    }
    type Mutation {
        register(registerInput: RegisterInput): Student!
        login( email: String!, password: String! ): Student!
    }
`
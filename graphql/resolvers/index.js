const studentResolvers = require('./student')

module.exports = {
    Query: {
        sayHi: () => 'Hello World!'
    },
    Mutation: {
        ...studentResolvers.Mutation
    }
}
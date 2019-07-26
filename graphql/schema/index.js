const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
    _id: ID!
    name: String!
    email: String!
    password: String
}
type AuthData {
    userId: ID!
    token: String!
    exp: Int!
}
input UserInput {
    name: String!
    email: String!
    password: String!
    password2: String!
}

type rootQuery {
    login(email: String!, password: String!): AuthData!
}

type rootMutation {
    register(UserInput: UserInput!): User!
}
schema {
    query: rootQuery
    mutation: rootMutation
}
`);

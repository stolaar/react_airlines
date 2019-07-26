const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
    _id: ID!
    name: String!
    email: String!
    password: String
}
type AuthData {
    success: Boolean
    token: String
}
type Errors {
    name: String
    password: String
}

type LoginResponse {
    response: AuthData
    errors: Errors
}
input UserInput {
    name: String!
    email: String!
    password: String!
    password2: String!
}

type rootQuery {
    login(email: String!, password: String!): LoginResponse!
}

type rootMutation {
    register(UserInput: UserInput!): User!
}
schema {
    query: rootQuery
    mutation: rootMutation
}
`);

const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type SuccessLogin {
    success: Boolean!
    token: String!
}
type Errors {
    name: String
    email: String
    password: String
    password2: String
}

type RegisterData {
    success: Boolean!
    errors: Errors
}

type AuthData {
    data: SuccessLogin
    errors: Errors
}

input UserInput {
    name: String!
    email: String!
    password: String!
    password2: String!
}

type rootQuery {
    login(email: String!, password: String!): AuthData
}

type rootMutation {
    register(UserInput: UserInput!): RegisterData
}

schema {
    query: rootQuery
    mutation: rootMutation
}
`);

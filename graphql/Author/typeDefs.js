const typeDefs = `
    type Author {
        _id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        books: [Book!]!
    }

    type Query {
        getAuthor(_id: ID!): Author!
        getAllAuthors: [Author!]!
    }

    type Mutation {
        createAuthor(firstName: String!, password: String!): Author
        deleteAuthor(_id: ID!): Author
    }
`;

export default typeDefs;

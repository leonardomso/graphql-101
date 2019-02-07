const typeDefs = `
    type Book {
        _id: ID!
        title: String!
        description: String!
        language: String!
        author: Author!
    }

    type Query {
        getBook(_id: ID!): Book!
        getAllBooks: [Book!]!
    }

    type Mutation {
        createBook(title: String!, description: String!, language: String!, author: ID!): Book!
        deleteBook(_id: ID!): Book
    }
`;

export default typeDefs;

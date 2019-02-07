const resolvers = {
    Query: {
        getAuthor: async (parent, args, context, info) => {},
        getAllAuthors: async (parent, args, context, info) => {},
        getBook: async (parent, args, context, info) => {},
        getAllBooks: async (parent, args, context, info) => {}
    },
    Mutation: {
        createAuthor: async (parent, args, context, info) => {},
        deleteAuthor: async (parent, args, context, info) => {},
        createBook: async (parent, args, context, info) => {},
        deleteBook: async (parent, args, context, info) => {}
    },
    Book: {},
    Author: {}
};

export default resolvers;

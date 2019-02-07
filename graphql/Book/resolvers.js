const resolvers = {
    Query: {
        getBook: async (parent, args, context, info) => {},
        getAllBooks: async (parent, args, context, info) => {}
    },
    Mutation: {
        createBook: async (parent, args, context, info) => {},
        deleteBook: async (parent, args, context, info) => {}
    },
    Book: {}
};

export default resolvers;

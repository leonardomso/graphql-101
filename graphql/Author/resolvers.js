const resolvers = {
    Query: {
        getAuthor: async (parent, args, context, info) => {},
        getAllAuthors: async (parent, args, context, info) => {}
    },
    Mutation: {
        createAuthor: async (parent, args, context, info) => {},
        deleteAuthor: async (parent, args, context, info) => {},
    },
    Book: {}
};

export default resolvers;

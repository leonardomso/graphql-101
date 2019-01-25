import AuthorConnector from "../../../connectors/Author";

export default {
  Query: {
    getAuthor: async (parent, args, context, info) => {},
    getAllAuthors: async (parent, args, context, info) => {}
  },
  Mutation: {
    createAuthor: async (parent, args, context, info) => {},
    deleteAuthor: async (parent, args, context, info) => {},
  },
  Author: {}
};

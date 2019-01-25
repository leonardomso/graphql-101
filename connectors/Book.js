import Book from "../models/Book";
import Author from "../models/Author";

const BookConnector = {
  getPost: async ({ _id }) => {},
  getAllPosts: async () => {},
  createPost: async ({ title, body, published, author }) => {},
  deletePost: async ({ _id }) => {},
  author: async ({ author }) => {}
};

export default BookConnector;

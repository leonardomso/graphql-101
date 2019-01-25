import isEmail from "validator/lib/isEmail";

import Author from "../models/Author";
import Book from "../models/Book";
import {
  createToken,
  verifyToken,
  encryptPassword,
  comparePassword
} from "../utils/auth";

const AuthorConnector = {
  getUser: async ({ _id }) => {},
  getAllUsers: async () => {},
  signUpUser: async ({ email, password }) => {},
  signInUser: async ({ email, password }) => {},
  isAuthenticated({ token }) {},
  posts: async ({ _id }) => {}
};

export default AuthorConnector;

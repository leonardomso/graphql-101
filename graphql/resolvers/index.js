import { mergeResolvers } from "merge-graphql-schemas";

import Author from "./Author/";
import Book from "./Book/";

const resolvers = [Author, Book];

export default mergeResolvers(resolvers);

import { mergeResolvers } from "merge-graphql-schemas";

import Author from "./Author/resolvers";
import Book from "./Book/resolvers";

const resolvers = [Author, Book];

export default mergeResolvers(resolvers);

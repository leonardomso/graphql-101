import { mergeTypes } from "merge-graphql-schemas";

import Author from "./Author/typeDefs";
import Book from "./Book/typeDefs";

const typeDefs = [Author, Book];

export default mergeTypes(typeDefs);

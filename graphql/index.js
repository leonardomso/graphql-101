import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./typesDefs";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;

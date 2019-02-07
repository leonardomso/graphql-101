require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "./graphql/";
import { options } from "./utils/options";
import { context } from "./utils/context";

const DB =
    "mongodb://leonardomso:graphql101@ds113749.mlab.com:13749/graphql-101";

// Connect to MongoDB with Mongoose.
mongoose
    .connect(DB, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const server = new GraphQLServer({
    schema,
    context
});

server.start(options, ({ port }) => {
    console.log(
        `🚀 GraphQL 101 Server is running on http://localhost:${port}/playground`
    );
});

import { PubSub } from "graphql-yoga";

import { models } from "./models";
import { getTokenFromRequest } from "./auth";

const pubsub = new PubSub();

export const context = ({ request }) => ({
    models,
    pubsub,
    token: getTokenFromRequest(request)
});

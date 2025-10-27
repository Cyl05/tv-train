import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
	createClient({
		url: import.meta.env.VITE_HASURA_WS,
		connectionParams: {
			headers: {
				"x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET,
			},
		},
		shouldRetry: () => true,
		retryAttempts: 5,
		on: {
			connected: () => console.log("WebSocket connected"),
			error: (error) => console.error("WebSocket error:", error),
			closed: () => console.log("WebSocket closed"),
		},
	})
);

export const client = new ApolloClient({
	link: wsLink,
	cache: new InMemoryCache(),
});
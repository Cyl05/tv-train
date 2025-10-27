import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { client } from "./apolloClient";
import Content from "./Content";

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Content />
		</ApolloProvider>
	);
};

export default App;

import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "./const";

const client = new ApolloClient({
  uri: `${GRAPHQL_URL}`,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ApolloProvider>
  );
}

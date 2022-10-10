import { ApolloClient,InMemoryCache } from "@apollo/client";
const Cliente= new ApolloClient(
    {
        uri:'https://blog-backend-blush.vercel.app/graphql',
        cache: new InMemoryCache(),
    }
);
export default Cliente;
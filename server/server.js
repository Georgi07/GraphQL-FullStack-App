import { ApolloServer, gql } from "apollo-server";

// gql parses the string in to GraphQL Schema object
const typeDefs = gql`
 type Query {
    greeting: String
 }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello world!',
    }
}

const server = new ApolloServer({typeDefs, resolvers})
const {url} = await server.listen({
    port: 9000
})

console.log(`Server running at ${url}`)
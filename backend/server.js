import "dotenv/config";
import { ApolloServer } from "apollo-server";
import graphql from "./graphql";
import dbconnect from "./utility/dbconnect";

const server = new ApolloServer(graphql);
dbconnect(server);
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

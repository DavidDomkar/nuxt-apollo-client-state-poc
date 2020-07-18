import gql from 'graphql-tag';
import { Plugin } from '@nuxt/types';
import { onGlobalSetup, provide } from 'nuxt-composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const typeDefs = gql`
  type Mutation {
    signIn(email: string!, password: string!): User
  }

  type Query {
    isSignedIn: Boolean!
  }

  type Subscription {
    userAdded(userId: string!): User!
  }

  type User {
    id: string!
    email: string!
  }
`;

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
  typeDefs,
});

const core: Plugin = () => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, client);
  });
};
export default core;

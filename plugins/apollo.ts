import { Plugin } from '@nuxt/types';
import { onGlobalSetup, provide } from 'nuxt-composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

const core: Plugin = () => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, client);
  });
};
export default core;

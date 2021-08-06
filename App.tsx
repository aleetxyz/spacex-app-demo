import React from 'react';

import GraphqlClient from "./src/infra/providers/GraphqlClient"
import NavigationRouter from "./src/routes"
import { FavoritesProvider } from './src/store/Favorites';

export default function App() {
  return (
    <GraphqlClient>
      <FavoritesProvider>
        <NavigationRouter />
      </FavoritesProvider>
    </GraphqlClient>
  );
}
import React from 'react';

import GraphqlClient from "./src/infra/providers/GraphqlClient"
import NavigationRouter from "./src/routes"

export default function App() {
  return (
    <GraphqlClient>
      <NavigationRouter />
    </GraphqlClient>
  );
}
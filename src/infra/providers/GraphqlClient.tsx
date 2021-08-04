import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
})

type GraphqlClientProps = {
  children: React.ReactNode
}

export default function GraphqlClient (props: GraphqlClientProps) {
  return (
    <ApolloProvider client={client}>
      { props.children }
    </ApolloProvider>
  )
}
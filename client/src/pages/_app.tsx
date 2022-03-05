import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import PageWithLayoutType from "components/layouts/PageWithLayouts";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";
import theme from "theme";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout ||
    (({ children }) => (
      <div className="text-2xl font-bold">
        Please add Layout for this page
        {children}
      </div>
    ));

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        {/* <NextNProgress
        color="#319795" // teal.500
        options={{ showSpinner: false }}
      /> */}
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
        <ToastContainer
          autoClose={3000}
          closeOnClick={true}
          draggable={true}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;

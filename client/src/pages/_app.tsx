import { ChakraProvider } from "@chakra-ui/react";
import PageWithLayoutType from "components/layouts/PageWithLayouts";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <NextNProgress
          color="#009f7f" // teal.500
          options={{ showSpinner: false }}
        />
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

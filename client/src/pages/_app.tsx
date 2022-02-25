import { ChakraProvider } from "@chakra-ui/react";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";
import theme from "theme";
import NextNProgress from "nextjs-progressbar";
import CartSideBar from "components/modules/CartSideBar";
import PageWithLayoutType from "components/layouts/PageWithLayouts";

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

  return (
    <ThemeProvider attribute="class">
      <NextNProgress
        color="#319795" // teal.500
        options={{ showSpinner: false }}
      />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <CartSideBar />
      </ChakraProvider>
      <ToastContainer
        autoClose={3000}
        closeOnClick={true}
        draggable={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </ThemeProvider>
  );
}

export default MyApp;

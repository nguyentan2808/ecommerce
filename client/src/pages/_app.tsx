import { ChakraProvider } from "@chakra-ui/react";
import Footer from "components/layouts/Footer/Footer";
import Navbar from "components/layouts/Navbar";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";
import theme from "theme";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            {/* <NextNProgress
                color="#319795" // teal.500
                // options={{ showSpinner: false }}
            /> */}
            <ChakraProvider theme={theme}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
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

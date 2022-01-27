import "styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "theme";
import Navbar from "components/common/NavBar";
import Footer from "components/common/Footer";
import { ThemeProvider } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
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

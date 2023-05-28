import Footer from "@/footer";
import Header from "@/header";
import "&/styles/globals.css";
import "../styles/layout.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#255C7D",
  },
};

//define layout in here
export default function App({ Component, pageProps }) {
  if (Component.layout) {
    return Component.layout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Some Page</title>
        <meta
          name="description"
          content="some description about the page from the main page"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

import "../styles/globals.sass";
import { Footer, Header } from "components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <main className="app">
        <div className="app__wrapper">
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyApp;

import "../styles.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Head from "next/head";
import * as gtag from "../lib/gtag";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
    <div>
    
    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Head>
        <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - UX / UI Designer" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX, User Experience, UI, User Interface, Tom Spencer, UK, Brighton" />
        <meta name="author" content="Tom Spencer" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    </div>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
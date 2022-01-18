import "../styles.css"
import Script from "next/script"
import Head from "next/head"

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
    <div>
    <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=G-CCDKVM70NV`}
/>
<Script strategy="lazyOnload">
  {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CCDKVM70NV');
  `}
</Script>
      <Head>
        <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - UX / UI Designer" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX, User Experience, UI, User Interface, Tom Spencer, UK, Brighton" />
        <meta name="author" content="Tom Spencer" />
      </Head>
    </div>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
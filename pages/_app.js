import "../styles.css"
import Head from "next/head"

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
    <div>
      <Head>
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
import Head from "next/head"
import Layout from "@components/layout"
import "../node_modules/uikit/dist/css/uikit.css"
import "../node_modules/uikit/dist/js/uikit.js"
import "../node_modules/uikit/dist/js/uikit-icons.js"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nextjs with UIKit</title>
        <meta
          name="Description"
          content=""
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

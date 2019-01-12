import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            href="https://cdn.hytaledata.com/favicon.ico"
          />
          <link rel="stylesheet" href="/static/common.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
          />
          <meta
            name="keywords"
            content="hytale server analytics, hytale network analytics, hytale server data, hytale network data"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Hytale Data" />

          {/* Twitter & Discord */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Hytale Data - The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta
            name="twitter:description"
            content="The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta name="twitter:url" content="//hytaledata.com/" />
          <meta name="twitter:site" content="@HytaleData" />
          <meta
            property="twitter:image"
            content="https://cdn.hytaledata.com/how_it_works.png"
          />
          <meta
            name="twitter:image:alt"
            content="Hytale Data - The tools &amp; metrics you need to grow your Hytale server."
          />

          {/* Facebook */}
          <meta
            property="og:title"
            content="Hytale Data - The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta property="og:url" content="https://hytaledata.com/" />
          <meta
            property="og:description"
            content="The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta
            property="og:image"
            content="https://cdn.hytaledata.com/how_it_works.png"
          />
          <meta
            property="og:site_name"
            content="Hytale Data - The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta property="og:locale" content="en" />

          <link rel="home" href="https://hytaledata.com/" />
          <link rel="canonical" href="https://hytaledata.com/" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-128565812-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', 'UA-128565812-1');
              `
            }}
          />
          <script id="stripe-js" src="https://js.stripe.com/v3/" async />
        </Head>
        <body>
          <div id="top" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

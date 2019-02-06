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
          <base target="_parent" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            href="https://cdn.hytaledata.com/favicon.ico"
          />
          <link rel="stylesheet" href="/static/main.css" />
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
          <meta name="author" content="Hytale Data" />

          {/* Twitter & Discord */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Hytale Server Analytics by HytaleData.com"
          />
          <meta
            name="twitter:description"
            content="The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta name="twitter:url" content="//hytaledata.com/" />
          <meta name="twitter:site" content="@HytaleData" />
          <meta
            property="twitter:image"
            content="https://cdn.hytaledata.com/card.png"
          />

          {/* Facebook */}
          <meta
            property="og:title"
            content="Hytale Server Analytics by HytaleData.com"
          />
          <meta property="og:url" content="https://hytaledata.com/" />
          <meta
            property="og:description"
            content="The tools &amp; metrics you need to grow your Hytale server."
          />
          <meta
            property="og:image"
            content="https://cdn.hytaledata.com/card.png"
          />
          <meta
            property="og:site_name"
            content="Hytale Server Analytics by HytaleData.com"
          />
          <meta property="og:locale" content="en" />

          <link rel="home" href="https://hytaledata.com/" />
          <link rel="canonical" href="https://hytaledata.com/" />

          <meta
            name="description"
            content="Hytale Server Analytics by HytaleData.com - The tools &amp; metrics you need to grow your Hytale server."
          />

          <meta
            name="google-site-verification"
            content="37MQXKPWuUlnpWcOO6yh_OMs7ghSyTd2qx-s-lQNAik"
          />

          <script
            async
            src="https://www.google.com/recaptcha/api.js?render=6Ld31IkUAAAAAN--L8Z5eYfuQ3vjUZI4DgqSR0dY"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-132783851-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', 'UA-132783851-1');
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

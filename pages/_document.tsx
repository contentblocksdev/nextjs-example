import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/plo2ybr.css" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-W3VCPMGWLD"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W3VCPMGWLD');
            `}}></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
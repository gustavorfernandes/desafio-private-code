import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Poppins&display=swap" rel="stylesheet" />

        <link rel="icon" href="favicon.ico" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatibe" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

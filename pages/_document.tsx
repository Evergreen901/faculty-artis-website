import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
          rel='stylesheet'
        />

        <meta
          name='description'
          content='Artis provides leading secondary market solutions
            via a proprietary market making platform structured
            to meet specific client needs'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta
          name='apple-mobile-web-app-title'
          content={process.env.NEXT_PUBLIC_APP_TITLE}
        />
        <meta
          name='application-name'
          content={process.env.NEXT_PUBLIC_APP_TITLE}
        />
        <meta name='msapplication-TileColor' content='#1b1f23' />
        <meta name='theme-color' content='#1b1f23' />

        <meta itemProp='name' content={process.env.NEXT_PUBLIC_APP_TITLE} />
        <meta
          itemProp='description'
          content='Artis provides leading secondary market solutions
          via a proprietary market making platform structured
          to meet specific client needs'
        />
        <meta
          itemProp='image'
          content={`${process.env.NEXT_PUBLIC_APP_URL}/favicon.png`}
        />

        <meta property='og:url' content={process.env.NEXT_PUBLIC_APP_URL} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={process.env.NEXT_PUBLIC_APP_TITLE} />
        <meta
          property='og:description'
          content='Artis provides leading secondary market solutions
          via a proprietary market making platform structured
          to meet specific client needs'
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_APP_URL}/favicon.png`}
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={process.env.NEXT_PUBLIC_APP_TITLE}
        />
        <meta
          name='twitter:description'
          content='Artis provides leading secondary market solutions
          via a proprietary market making platform structured
          to meet specific client needs'
        />
        <meta
          name='twitter:image'
          content={`${process.env.NEXT_PUBLIC_APP_URL}/favicon.png`}
        />
      </Head>
      <body>
        <Script
          id='Cookiebot'
          src='https://consent.cookiebot.com/uc.js'
          data-cbid='a4ddba34-2a0c-4471-9c9b-e8077db806ae'
          type='text/javascript'
          data-cookieconsent='ignore'
          strategy='beforeInteractive'
        />
        <Script
          id='CookieDeclaration'
          src='https://consent.cookiebot.com/a4ddba34-2a0c-4471-9c9b-e8077db806ae/cd.js'
          type='text/javascript'
          async
          data-cookieconsent='ignore'
          strategy='beforeInteractive'
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

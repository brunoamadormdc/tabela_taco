import Layout from '../components/Layout/Layout.jsx'
import '../assets/styles/global.scss'
import { RecoilRoot } from 'recoil'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1813532986569200"
        crossorigin="anonymous"
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DMMDHSK6EP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DMMDHSK6EP');
        `}
      </Script>
      <Script id="Adsense" data-ad-client="ca-pub-1813532986569200"
         async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1813532986569200"
         crossorigin="anonymous"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>

  )
}

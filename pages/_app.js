import Layout from '../components/Layout/Layout.jsx'
import '../assets/styles/global.scss'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>

  )
}

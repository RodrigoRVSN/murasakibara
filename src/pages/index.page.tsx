import Head from 'next/head'
import { RecaptchaV2 } from '@components/RecaptchaV2'
import { RecaptchaV3 } from '@components/RecaptchaV3'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <RecaptchaV2 />

      <RecaptchaV3 />
    </>
  )
}

export default Home

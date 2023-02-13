import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { RecaptchaV2 } from '@components/RecaptchaV2'
import { RecaptchaV3 } from '@components/RecaptchaV3'

const Home = () => {
  return (
    <>
      <h1>Para simular um comportamento suspeito, ligue a VPN</h1>

      <RecaptchaV2 />

      <GoogleReCaptchaProvider
        reCaptchaKey='6LfxMXkkAAAAADWhuLKM4c1jAG4vYwjQdaFqaO6L'
      >
        <RecaptchaV3 />
      </GoogleReCaptchaProvider>
    </>
  )
}

export default Home

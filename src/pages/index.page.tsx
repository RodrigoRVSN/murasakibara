import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { RecaptchaV2Provider } from '@App/context/RecaptchaV2Provider'
import { RecaptchaV2 } from '@components/RecaptchaV2'
import { RecaptchaV3 } from '@components/RecaptchaV3'

const Home = () => {
  return (
    <>
      <h1>Para simular um comportamento suspeito, ligue a VPN por exemplo.</h1>

      <RecaptchaV2Provider>
        <RecaptchaV2 />
      </RecaptchaV2Provider>

      <GoogleReCaptchaProvider
        reCaptchaKey='6LfxMXkkAAAAADWhuLKM4c1jAG4vYwjQdaFqaO6L'
      >
        <RecaptchaV3 />
      </GoogleReCaptchaProvider>
    </>
  )
}

export default Home

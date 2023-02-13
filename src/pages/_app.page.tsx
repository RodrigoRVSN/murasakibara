import { AppProps } from 'next/app'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey='6LfxMXkkAAAAADWhuLKM4c1jAG4vYwjQdaFqaO6L'
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default MyApp

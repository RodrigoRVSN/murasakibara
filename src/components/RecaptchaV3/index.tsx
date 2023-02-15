
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import styles from './styles.module.css'

export const RecaptchaV3 = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [tokenv3, setTokenv3] = useState('')
  const [responseFromGoogle, setResponseFromGoogle] = useState('')

  const handleVerifyRecaptchav3 = async () => {
    if (!executeRecaptcha) return

    const token = await executeRecaptcha('actionTest')

    setTokenv3(token)

    const response = await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify({
        response: token,
        version: 'v3'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setResponseFromGoogle(await response.json())
  }

  return (
    <section className={styles['wrapper__recaptcha-v3']}>
      <button onClick={handleVerifyRecaptchav3}>Gerar token do ReCAPTCHA V3</button>

      <h1>Resposta do google: {JSON.stringify(responseFromGoogle)}</h1>

      <p>Token: {tokenv3}</p>
    </section>
  )
}

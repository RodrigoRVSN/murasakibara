
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './styles.module.css'

export const RecaptchaV2 = () => {
  const [tokenv2, setTokenv2] = useState('')
  const [responseFromGoogle, setResponseFromGoogle] = useState('')
  const recaptchaRefV2 = useRef<ReCAPTCHA>(null)

  const handleVerifyRecaptchav2 = async () => {
    const token = await recaptchaRefV2?.current?.executeAsync()

    recaptchaRefV2?.current?.reset()

    if (!token) return

    setTokenv2(token)

    const response = await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify({
        response: token,
        version: 'v2'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setResponseFromGoogle(await response.json())
  }

  return (

    <section className={styles['wrapper__recaptcha-v2']}>

      <button onClick={handleVerifyRecaptchav2}>Gerar token do ReCAPTCHA V2 invísivel</button>

      <h1>Resposta do google: {JSON.stringify(responseFromGoogle)}</h1>
      <p>Token: {tokenv2}</p>

      <ReCAPTCHA
        size='invisible'
        ref={recaptchaRefV2}
        sitekey='6Lf3UXkkAAAAAGoRjJ1V-YT_A6nd9LvksTN5rJc_'
      />
    </section>
  )
}

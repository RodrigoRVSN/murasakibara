
import { useState } from 'react'
import { useRecaptchaV2 } from '@App/context/RecaptchaV2Provider'
import styles from './styles.module.css'

export const RecaptchaV2 = () => {
  const [tokenv2, setTokenv2] = useState('')
  const [responseFromGoogle, setResponseFromGoogle] = useState('')
  const { executeRecaptcha } = useRecaptchaV2()

  const handleVerifyRecaptchav2 = async () => {
    const token = await executeRecaptcha()
    console.log('execute -> ', { token })

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

    </section>
  )
}

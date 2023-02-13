
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export const RecaptchaV2 = () => {
  const recaptchaRefV2 = useRef<ReCAPTCHA>(null)
  const [tokenv2, setTokenv2] = useState('')

  const handleRecaptchav2 = async () => {
    const token = await recaptchaRefV2?.current?.executeAsync()

    recaptchaRefV2?.current?.reset()

    if (!token) return

    setTokenv2(token)
  }

  return (

    <>
      <button onClick={handleRecaptchav2}>gerar token v2</button>

      <ReCAPTCHA
        size='invisible'
        ref={recaptchaRefV2}
        sitekey='6Lf3UXkkAAAAAGoRjJ1V-YT_A6nd9LvksTN5rJc_'
      />

      <h1>{tokenv2}</h1>
    </>
  )
}

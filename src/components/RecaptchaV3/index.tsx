
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export const RecaptchaV3 = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [tokenv3, setTokenv3] = useState('')

  const handleRecaptchav3 = async () => {
    if (!executeRecaptcha) return

    const token = await executeRecaptcha('test')
    setTokenv3(token)
  }

  return (
    <>
      <button onClick={handleRecaptchav3}>gerar token v3</button>

      <h1>{tokenv3}</h1>
    </>
  )
}

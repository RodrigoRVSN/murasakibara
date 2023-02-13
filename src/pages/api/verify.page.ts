import { NextApiRequest, NextApiResponse } from 'next'

const GOOGLE_URL = 'https://www.google.com/recaptcha/api/siteverify'

const SECRET_V2 = '6Lf3UXkkAAAAAO1N19w7o_dmAxCXPXVU71UqqVPd'
const SECRET_V3 = '6LfxMXkkAAAAAGu835Wtj1H7IwXfxwkR-1Zp6fOm'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { response, version } = req.body

  const secret = version === 'v3' ? SECRET_V3 : SECRET_V2

  try {
    const requestData = await fetch(GOOGLE_URL, {
      method: 'POST',
      body: `secret=${secret}&response=${response}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })

    const data = await requestData.json()
    res.json(data)
  } catch (error) {
    console.log({ error })
  }
}

export default handle

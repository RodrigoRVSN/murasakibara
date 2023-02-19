/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Context, RecaptchaV2ProviderProps } from './RecaptchaV2Provider.types'
import Script from 'next/script'
import { createContext, useState, useEffect, useContext, useRef, useMemo } from 'react'

const RECAPTCHA_SCRIPT_SRC_URL = 'https://www.google.com/recaptcha/api.js?render=explicit'

export const RecatapchaV2Context = createContext({} as Context)

export const RecaptchaV2Provider = ({ children }: RecaptchaV2ProviderProps) => {
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false)
  const recaptchaWidget = useRef<number | null>(null)
  const recaptchaResolve = useRef<(value: string) => void>()

  const executeRecaptcha = useMemo((): () => Promise<string> => {
    return () => new Promise(resolve => {
      if (recaptchaWidget.current === null) return

      recaptchaResolve.current = resolve
      window.grecaptcha.reset(recaptchaWidget.current)
      window.grecaptcha.execute(recaptchaWidget.current)
    })
  }, [])

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (!window.grecaptcha.render) return

      clearInterval(intervalID)
      setIsRecaptchaLoaded(true)
    }, 500)

    return () => clearInterval(intervalID)
  }, [])

  useEffect(() => {
    const canRenderRecaptcha = isRecaptchaLoaded && recaptchaWidget.current === null

    if (!canRenderRecaptcha) return

    const widget = window.grecaptcha.render!('recaptcha', {
      sitekey: '6Lf3UXkkAAAAAGoRjJ1V-YT_A6nd9LvksTN5rJc_',
      size: 'invisible',
      callback: (token) => {
        recaptchaResolve.current!(token)
      }
    })

    recaptchaWidget.current = widget
  }, [isRecaptchaLoaded, recaptchaResolve, recaptchaWidget])

  return (
    <>
      <Script
        src={RECAPTCHA_SCRIPT_SRC_URL}
        defer
        async
      />

      <div id='recaptcha' />

      <RecatapchaV2Context.Provider value={{ executeRecaptcha }}>
        {children}
      </RecatapchaV2Context.Provider>
    </>
  )
}

export const useRecaptchaV2 = () => {
  const context = useContext(RecatapchaV2Context)
  return context
}

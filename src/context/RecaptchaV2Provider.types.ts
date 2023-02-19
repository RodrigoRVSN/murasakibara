import { ReactNode } from 'react'

export type Context = {
  executeRecaptcha: () => Promise<string>
}

export type RecaptchaV2ProviderProps = {
  children: ReactNode
}

type renderParams = {
  sitekey: string,
  size: string,
  callback: (token: string) => void
}

declare global {
  interface Window {
    grecaptcha: {
      render?: (containerId: string, params: renderParams) => number,
      reset: (widgetId: number) => void
      execute: (widgetId: number) => void
    }
  }
}

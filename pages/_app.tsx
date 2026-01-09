import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://app.thinkstack.ai/bot/thinkstackai-loader.min.js"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.setAttribute('chatbot_id', '695c68ba73f434c1573c2e57')
      script.setAttribute('data-type', 'default')
      script.src = 'https://app.thinkstack.ai/bot/thinkstackai-loader.min.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return <Component {...pageProps} />
}

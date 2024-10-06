import { useEffect } from 'react'
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.removeAttribute('data-new-gr-c-s-check-loaded')
    document.body.removeAttribute('data-gr-ext-installed')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
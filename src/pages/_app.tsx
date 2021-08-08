import { AppWrapper } from 'provider';
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'
import 'styles/tailwind.css';
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

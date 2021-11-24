//import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faBars, faChevronDown, faTwitter, faFacebook)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

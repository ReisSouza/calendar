import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { globalStyles } from '@/styles/global'

const roboto = Roboto({ subsets: ['latin'], weight:['300','400','500','700'] })

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return <div className={roboto.className} >
    <Component  {...pageProps} />
  </div> 
}

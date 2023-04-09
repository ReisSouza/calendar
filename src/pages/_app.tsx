import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@/styles/global'
import { ToastProvider } from '@ionext-ui/react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  globalStyles()
  return (
    <div className={roboto.className}>
      <SessionProvider session={session}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </SessionProvider>
    </div>
  )
}

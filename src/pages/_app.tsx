/* eslint-disable react/no-unknown-property */

import '@/lib/dayjs'

import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@/styles/global'
import { ToastProvider } from '@ionext-ui/react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  globalStyles()
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </SessionProvider>
    </>
  )
}

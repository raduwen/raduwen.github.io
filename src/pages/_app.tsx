import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@/providers/ThemeProvider'
import { UserProvider } from '@/providers/UserProvider'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider>
      <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
    </ThemeProvider>
  )
}

export default App

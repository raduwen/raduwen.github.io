import { FC, useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { ThemeContext } from '@/contexts/ThemeContext'
import { theme, dateToThemeName } from '@/themes'

const ThemeProvider: FC = ({ children }) => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date())
    }, 10000)
    return () => {
      clearInterval(id)
    }
  }, [now])

  const name = dateToThemeName(now)

  return (
    <ThemeContext.Provider value={{ name }}>
      <ChakraProvider theme={theme(name)}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }

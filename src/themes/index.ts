import { extendTheme } from '@chakra-ui/react'

import { morning } from './morning'
import { daytime } from './daytime'
import { twilight } from './twilight'
import { night } from './night'

const themes = {
  morning,
  daytime,
  twilight,
  night,
}

const theme = (name: string) => {
  return extendTheme(themes[name] || daytime)
}

const dateToThemeName = (date: Date) => {
  const hour = date.getHours()

  if (hour >= 16 && hour <= 18) {
    return 'twilight'
  } else if (hour >= 19 || hour <= 5) {
    return 'night'
  } else if (hour >= 6 && hour <= 10) {
    return 'morning'
  } else {
    return 'daytime'
  }
}

export { theme, dateToThemeName }

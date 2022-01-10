import { daytime } from './daytime'

const night = JSON.parse(JSON.stringify(daytime))

night.colors.bg = 'rgb(16, 16, 48)'
night.colors.subMenu = {
  topic: {
    text: 'rgb(170, 213, 255)',
    bg: 'rgb(44, 44, 86)',
  },
  item: {
    text: 'rgb(162, 162, 255)',
    textHover: 'rgb(255, 255, 255)',
    bg: 'rgb(91, 91, 181)',
  },
}

export { night }

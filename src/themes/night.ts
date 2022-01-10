import { daytime } from './daytime'

const night = JSON.parse(JSON.stringify(daytime))

night.colors.bg = 'rgb(26, 75, 75)'
night.colors.subMenu = {
  topic: {
    text: 'rgb(190, 255, 213)',
    bg: 'rgb(44, 86, 44)',
  },
  item: {
    text: 'rgb(162, 255, 192)',
    textHover: 'rgb(245, 255, 245)',
    bg: 'rgb(32, 141, 91)',
  },
}
night.colors.board = {
  bg: 'rgb(240, 255, 240)',
}

export { night }

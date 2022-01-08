import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: 'xs',
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily:
          '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif',
      },
    },
  },
  fontSizes: {
    // [todo] - tuning font size
    xs: '10px',
    sm: '1.125rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': '2.75rem',
    '6xl': '3rem',
    '7xl': '4rem',
    '8xl': '5rem',
  },
  colors: {
    bg: 'rgb(255, 128, 128)',
    subMenu: {
      topic: {
        text: 'rgb(255, 213, 170)',
        bg: 'rgb(86, 44, 44)',
      },
      item: {
        text: 'rgb(255, 162, 162)',
        textHover: 'rgb(255, 255, 255)',
        bg: 'rgb(181, 91, 91)',
      },
    },
  },
})

export { theme }

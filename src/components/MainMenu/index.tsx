import { Box } from '@chakra-ui/react'

import { MenuList } from './MenuList'
import { MenuListItem } from './MenuListItem'

type MainMenuProps = {
  onSelected: (value: string) => void
}

const MainMenu = ({ onSelected }: MainMenuProps) => {
  const menus = [
    { color: 'a', text: 'トップ', sub: 'top', image: '/images/top.png' },
    { color: 'b', text: 'ホゲ', sub: 'hoge', image: '/images/hoge.png' },
    { color: 'c', text: 'ペカ', sub: 'peca', image: '/images/stachu.png' },
    { color: 'd', text: 'ゲーム', sub: 'game', image: '/images/stachu.png' },
    { color: 'e', text: 'プログ', sub: 'prog', image: '/images/stachu.png' },
    { color: 'f', text: '音楽', sub: 'music', image: '/images/stachu.png' },
    { color: 'g', text: '????', sub: 'yobi1', image: '/images/stachu.png' },
    { color: 'h', text: '????', sub: 'yobi2', image: '/images/stachu.png' },
    { color: 'i', text: '????', sub: 'yobi3', image: '/images/stachu.png' },
  ]

  return (
    <Box>
      <MenuList>
        {menus.map((menu) => (
          <MenuListItem
            key={menu.sub}
            color={menu.color}
            text={menu.text}
            image={menu.image}
            onClick={() => {
              onSelected(menu.sub)
            }}
          />
        ))}
      </MenuList>
    </Box>
  )
}

export { MainMenu }

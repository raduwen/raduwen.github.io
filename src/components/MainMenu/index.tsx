import { Box } from '@chakra-ui/react'

import { MenuList } from './MenuList'
import { MenuListItem } from './MenuListItem'
import { mainMenus } from './mainMenus'

type MainMenuProps = {
  onSelected: (value: string) => void
}

const MainMenu = ({ onSelected }: MainMenuProps) => {
  return (
    <Box>
      <MenuList>
        {mainMenus.map((menu) => (
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

import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

import type { MainMenuEntity } from '@/repositories/MainMenuRepository'
import { MainMenuRepository } from '@/repositories/MainMenuRepository'

import { MenuList } from './MenuList'
import { MenuListItem } from './MenuListItem'

type MainMenuProps = {
  onSelected: (value: string) => void
}

const MainMenu = ({ onSelected }: MainMenuProps) => {
  const [mainMenus, setMainMenus] = useState<MainMenuEntity[]>([])

  useEffect(() => {
    ;(async () => {
      const entities = await new MainMenuRepository().getAll()
      setMainMenus(entities)
    })()
  }, [])

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

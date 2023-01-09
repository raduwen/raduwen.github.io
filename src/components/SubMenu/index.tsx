import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

import type { SubMenuEntity } from '@/domain/site-menu/entity'
import { SubMenuRepository } from '@/domain/site-menu/repository'

import { Topic } from './Topic'
import { MenuList } from './MenuList'
import { MenuListItem } from './MenuListItem'

type SubMenuProps = {
  current: string
}

const SubMenu = ({ current }: SubMenuProps) => {
  const [menu, setMenu] = useState<SubMenuEntity | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      const repo = new SubMenuRepository()
      const data = await repo.get(current)
      setMenu(data)
    })()
  }, [current])

  return (
    <Box as="aside" bg="bg" minH="calc(100% - 74px)">
      <nav>
        <section>
          <Box>
            {menu && (
              <>
                <Topic text={menu.topic} />
                <MenuList>
                  {menu.items.map((item, i) => (
                    <MenuListItem
                      href={item.href}
                      text={item.text}
                      disabled={item.disabled}
                      key={i}
                    />
                  ))}
                </MenuList>
              </>
            )}
          </Box>
        </section>
      </nav>
    </Box>
  )
}

export { SubMenu }

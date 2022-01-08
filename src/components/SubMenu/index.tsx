import { useState } from 'react'
import { Box } from '@chakra-ui/react'

import { Topic } from './Topic'
import { MenuList } from './MenuList'
import { MenuListItem } from './MenuListItem'
import { subMenus } from './subMenus'

const SubMenu = () => {
  const [current, _setCurrent] = useState('top')

  const menu = subMenus[current]

  return (
    <Box as="aside" bg="bg" h="100%">
      <nav>
        <section>
          <Box>
            <Topic>{menu.topic}</Topic>
            <MenuList>
              {menu.items.map((item, i) => (
                <MenuListItem href={item.href} text={item.text} key={i} />
              ))}
            </MenuList>
          </Box>
        </section>
      </nav>
    </Box>
  )
}

export { SubMenu }
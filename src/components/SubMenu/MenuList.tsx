import { List } from '@chakra-ui/react'

const MenuList = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
  <List
    m={0}
    p={0}
    listStyleType="none"
    borderRight="1px solid black"
    borderLeft="1px solid black"
    bg="subMenu.item.bg"
  >
    {children}
  </List>
)

export { MenuList }

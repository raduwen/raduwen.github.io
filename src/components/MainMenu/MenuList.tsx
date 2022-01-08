import { List } from '@chakra-ui/react'

const MenuList = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <List
    m={0}
    p={0}
    display="flex"
    borderTop="2px solid black"
    borderBottom="2px solid black"
  >
    {children}
  </List>
)

export { MenuList }

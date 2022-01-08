import NextLink from 'next/link'
import { ListItem, Link } from '@chakra-ui/react'

const MenuListItem = ({ href, text }: { href: string; text: string }) => (
  <ListItem
    fontSize="1rem"
    borderBottom="1px solid black"
    color="subMenu.item.text"
    _hover={{ color: 'subMenu.item.textHover' }}
  >
    <NextLink href={href} passHref>
      <Link color="inherit">❤️ {text}</Link>
    </NextLink>
  </ListItem>
)

export { MenuListItem }

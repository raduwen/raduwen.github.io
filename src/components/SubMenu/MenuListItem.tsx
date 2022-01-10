import NextLink from 'next/link'
import { ListItem, Link } from '@chakra-ui/react'

const MenuListItem = ({
  href,
  text,
  disabled,
}: {
  href: string
  text: string
  disabled?: boolean
}) => (
  <ListItem
    fontSize="1rem"
    borderBottom="1px solid black"
    color="subMenu.item.text"
    _hover={{ color: 'subMenu.item.textHover' }}
  >
    <NextLink href={href} passHref>
      <Link
        color="inherit"
        _hover={{ textDecor: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        ❤️ {disabled ? <del>{text}</del> : text}
      </Link>
    </NextLink>
  </ListItem>
)

export { MenuListItem }

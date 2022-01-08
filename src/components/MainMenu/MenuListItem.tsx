import { useState } from 'react'
import { ListItem, Box } from '@chakra-ui/react'

type MenuListItemProps = {
  text: string
  color: string
  image: string
  onClick?: () => void
}

const MenuListItem = ({ text, color, image, onClick }: MenuListItemProps) => {
  const [hover, setHover] = useState(false)

  const c = `mainMenu.${color}.text${hover ? 'Hover' : ''}`

  return (
    <ListItem
      display="inline-block"
      w="38px"
      h="40px"
      borderRight="2px solid black"
      bgColor={`mainMenu.${color}.bg`}
      color={c}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onClick={onClick}
    >
      <Box
        position="relative"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Box transform="scale(0.8)" fontWeight="bold">
          {text}
        </Box>
        <Box
          position="relative"
          left={0}
          right={0}
          bottom="2px"
          w="28px"
          h="28px"
          border="2px solid black"
          bgImg={image}
          bgColor={c}
          bgPos="center"
        ></Box>
      </Box>
    </ListItem>
  )
}

export { MenuListItem }

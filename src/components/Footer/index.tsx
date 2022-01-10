import { Box, Text } from '@chakra-ui/react'

const Footer = () => (
  <Box
    as="footer"
    display="flex"
    justifyContent="center"
    alignItems="end"
    w="100%"
    h="100%"
    bg="bg"
    pb="1"
  >
    <Text>&copy; raduwen. v0.4.0</Text>
  </Box>
)

export { Footer }

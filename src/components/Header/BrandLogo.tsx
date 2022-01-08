import Image from 'next/image'
import { Box } from '@chakra-ui/react'

const BrandLogo = () => {
  return (
    <Box>
      <Image
        alt="brand logo"
        src="/images/brand_logo.png"
        width="134px"
        height="44px"
      />
    </Box>
  )
}

export { BrandLogo }

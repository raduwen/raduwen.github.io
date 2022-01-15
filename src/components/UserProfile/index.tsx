import { Box, Text, Image } from '@chakra-ui/react'

import { login, logout } from '@/lib/firebase'
import { useUser } from '@/hooks/useUser'

const UserProfile = () => {
  const { user, loading } = useUser()

  return (
    <Box bg="userProfile.bg" border="1px solid black" display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100%" py="2">
      {loading ? <Text color="userProfile.text">loading...</Text> : user.isAnonymous ? (
        <button onClick={login}><Text color="userProfile.text">Sign In With Twitter</Text></button>
      ) : (
        <>
          <Image src={user.photoURL} w="32px" h="32px" />
          <Text fontWeight="bold" color="userProfile.text">{user.name}</Text>
          <button onClick={logout}><Text color="userProfile.text">sign out</Text></button>
        </>
      )}
    </Box>
  )
}

export { UserProfile }

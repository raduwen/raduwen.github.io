import { useContext } from 'react'

import { UserContext } from '@/contexts/UserContext'
import type { User } from '@/providers/UserProvider'

const useUser = (): { user: User, loading: boolean } => {
  return useContext(UserContext)
}

export { useUser }

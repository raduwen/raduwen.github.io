import { FC, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuthenticate } from '@/lib/firebase'
import { UserContext } from '@/contexts/UserContext'

type User = {
  uid: string | null
  name: string | null
  photoURL: string | null
  isAnonymous: boolean
}

const NewUser = (): User => {
  return { uid: null, name: null, photoURL: null, isAnonymous: true }
}

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>(NewUser())
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(getAuthenticate(), (user) => {
      setLoading(true)
      if (user) {
        setUser({
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
        })
      } else {
        setUser(NewUser())
      }
      setLoading(false)
    })
  }, [])

  return <UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>
}

export { UserProvider }
export type { User }

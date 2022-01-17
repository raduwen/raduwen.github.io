import { FC, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuthenticate } from '@/lib/firebase'
import { UserContext } from '@/contexts/UserContext'
import { UserRepository } from '@/repositories/UserRepository'

type User = {
  uid: string | null
  name: string | null
  photoURL: string | null
  isAnonymous: boolean
}

const NewUser = (): User => {
  return { uid: null, name: null, photoURL: null, isAnonymous: true }
}

const logSignedIn = async (uid: string) => {
  const repo = new UserRepository()
  const user = await repo.get(uid)
  const now = new Date()

  if (!user) {
    repo.set(uid, {
      lastSignedIn: now,
      signInCount: 1,
    })
  } else if (now.getDate() > user.lastSignedIn.getDate()) {
    repo.set(uid, {
      lastSignedIn: now,
      signInCount: user.signInCount + 1,
    })
  }
}

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>(NewUser())
  const [loading, setLoading] = useState(true)

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
        logSignedIn(user.uid)
      } else {
        setUser(NewUser())
      }
      setLoading(false)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
export type { User }

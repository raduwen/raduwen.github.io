import { FC, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuthenticate } from '@/lib/firebase'
import { UserContext } from '@/contexts/UserContext'
import { UserRepository } from '@/repositories/UserRepository'
import { UserRoleRepository } from '@/repositories/UserRoleRepository'

type User = {
  uid: string | null
  name: string | null
  photoURL: string | null
  isAnonymous: boolean
  isAdmin: boolean
}

const NewUser = (): User => {
  return { uid: null, name: null, photoURL: null, isAnonymous: true, isAdmin: false }
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
  } else if (now.getDate() > user.lastSignedIn.getDate() || now.getMonth() > user.lastSignedIn.getMonth() || now.getFullYear() > user.lastSignedIn.getFullYear()) {
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
    onAuthStateChanged(getAuthenticate(), async (user) => {
      setLoading(true)

      if (user) {
        const repo = new UserRoleRepository()
        const role = await repo.get(user.uid)
        setUser({
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          isAdmin: role.admin,
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

import { FC, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { getAuthenticate, getFirestore } from '@/lib/firebase'
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

const logSignedIn = async (uid: string) => {
  const db = getFirestore()
  const snap = await getDoc(doc(db, 'users', uid))
  if (snap.exists()) {
    const now = new Date()
    const user = snap.data()
    if (now.getDate > user.lastSignedIn.toDate().getDate()) {
      setDoc(doc(db, 'users', uid), {
        lastSignedIn: now,
        signInCount: user.signInCount + 1,
      })
    }
  } else {
    setDoc(doc(db, 'users', uid), {
      lastSignedIn: new Date(),
      signInCount: 1,
    })
  }
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
        logSignedIn(user.uid)
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

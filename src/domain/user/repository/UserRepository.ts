import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getFirestore } from '@/lib/firebase'

import type { UserEntity } from '@/domain/user/entity'

class UserRepository {
  async get(uid: string): Promise<UserEntity | undefined> {
    const firestore = getFirestore()

    return new Promise((resolve, reject) => {
      getDoc(doc(firestore, 'users', uid))
        .then((snap) => {
          if (snap.exists()) {
            const user = snap.data()
            resolve({
              lastSignedIn: user.lastSignedIn.toDate(),
              signInCount: user.signInCount,
            })
          } else {
            resolve(undefined)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  async set(uid: string, user: UserEntity) {
    const firestore = getFirestore()

    return new Promise((resolve, reject) => {
      setDoc(doc(firestore, 'users', uid), user)
        .then(() => {
          resolve(user)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export { UserRepository }

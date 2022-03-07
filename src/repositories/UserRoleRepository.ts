import { doc, getDoc } from 'firebase/firestore'
import { getFirestore } from '@/lib/firebase'

type UserRoleEntity = {
  admin: boolean
}

class UserRoleRepository {
  async get(uid: string): Promise<UserRoleEntity | undefined> {
    const firestore = getFirestore()

    return new Promise((resolve, reject) => {
      getDoc(doc(firestore, 'user_role', uid))
        .then((snap) => {
          if (snap.exists()) {
            const role = snap.data();
            resolve({
              admin: role.admin
            })
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export type { UserRoleEntity }
export { UserRoleRepository }

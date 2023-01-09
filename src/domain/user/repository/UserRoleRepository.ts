import { doc, getDoc } from 'firebase/firestore'
import { getFirestore } from '@/lib/firebase'

import type { UserRoleEntity } from '@/domain/user/entity'

class UserRoleRepository {
  async get(uid: string): Promise<UserRoleEntity | undefined> {
    const firestore = getFirestore()

    return new Promise((resolve, reject) => {
      getDoc(doc(firestore, 'user_role', uid))
        .then((snap) => {
          if (snap.exists()) {
            const role = snap.data()
            resolve({
              admin: role.admin,
            })
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export { UserRoleRepository }

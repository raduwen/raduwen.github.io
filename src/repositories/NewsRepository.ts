import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { getFirestore } from '@/lib/firebase'

type NewsEntity = {
  date: Date
  topic: string
}

class NewsRepository {
  async getLatest(count = 10): Promise<NewsEntity[]> {
    const firestore = getFirestore()

    return new Promise((resolve, reject) => {
      const q = query(
        collection(firestore, 'news'),
        orderBy('date', 'desc'),
        limit(count),
      )
      getDocs(q)
        .then((docs) => {
          const ns: NewsEntity[] = []
          docs.forEach((doc) => {
            const data = doc.data()
            ns.push({
              date: data.date.toDate(),
              topic: data.topic,
            })
          })
          resolve(ns)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export type { NewsEntity }
export { NewsRepository }

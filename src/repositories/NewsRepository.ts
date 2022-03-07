import { collection, query, orderBy, limit, getDocs, addDoc } from 'firebase/firestore'
import { getFirestore } from '@/lib/firebase'

type NewsEntity = {
  date: Date
  topic: string
}

class NewsRepository {
  async getLatest(count = 10): Promise<NewsEntity[]> {
    if (sessionStorage.getItem('news') === null) {
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
            sessionStorage.setItem('news', JSON.stringify(ns))
            resolve(ns)
          })
          .catch((e) => {
            reject(e)
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        try {
          const ns = JSON.parse(sessionStorage.getItem('news')).map((n) => {
            return {
              date: new Date(n.date),
              topic: n.topic,
            }
          })
          resolve(ns)
        } catch (e) {
          reject(e)
        }
      })
    }
  }

  async create(news: NewsEntity): Promise<NewsEntity> {
    const firestore = getFirestore()

    return new Promise((resolve, reject) => {
      if (news.topic === "") {
        reject("invalid: topic required")
      }
      news.date = new Date()
      addDoc(collection(firestore, 'news'), news)
        .then(() => {
          resolve(news)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export type { NewsEntity }
export { NewsRepository }

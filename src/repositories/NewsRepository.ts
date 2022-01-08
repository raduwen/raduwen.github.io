type NewsEntity = {
  date: Date
  topic: string
}

class NewsRepository {
  async getLatest(count = 10): Promise<NewsEntity[]> {
    return new Promise((resolve) => {
      resolve(
        [
          {
            date: new Date('2022-01-08T00:00:00+09:00'),
            topic: 'サイト開設',
          },
        ].slice(0, count),
      )
    })
  }
}

export type { NewsEntity }
export { NewsRepository }

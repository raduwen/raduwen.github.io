import type { StatsProfile, Segment, CollectorSearchResult, SessionList } from './types'

type Platform = 'origin' | 'xbl' | 'psn'

class ApexClient {
  private baseURL: string
  private headers: Headers

  constructor(apiKey: string) {
    this.baseURL = 'https://public-api.tracker.gg/v2/apex/standard'
    this.headers = new Headers({ 'TRN-Api-Key': apiKey })
  }

  async getProfile(platform: Platform, platformUserIdentifier: string): Promise<StatsProfile> {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL}/profile/${platform}/${platformUserIdentifier}`, {
        headers: this.headers
      })
        .then(res => res.json())
        .then((data: StatsProfile) => {
          resolve(data)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  async getSegment(platform: Platform, platformUserIdentifier: string, segmentType: string): Promise<Segment> {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL}/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`, {
        headers: this.headers
      })
        .then(res => res.json())
        .then((data: Segment) => {
          resolve(data)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  async search(platform: Platform, query: string): Promise<CollectorSearchResult> {
    const params = new URLSearchParams({
      platform,
      query,
    })

    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL}/profile/search?${params}`, {
        headers: this.headers
      })
        .then(res => res.json())
        .then((data: CollectorSearchResult) => {
          resolve(data)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  getSessions(platform: Platform, platformUserIdentifier: string): Promise<SessionList> {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL} / profile / ${platform} / ${platformUserIdentifier} / sessions`, {
        headers: this.headers
      })
        .then(res => res.json())
        .then((data: SessionList) => {
          resolve(data)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export { ApexClient }

import type { ImageProps } from 'next/image'

type PostWithoutBodyEntity = {
  id: string
  project: string
  title: string
  date: Date
}

type PostEntity = PostWithoutBodyEntity & {
  body: PostElement[]
}

type PostElement =
  | {
      type: 'text' | 'h2'
      body?: string
      attributes?: { [key: string]: string }
    }
  | {
      type: 'image'
      attributes: ImageProps
    }

export type { PostEntity, PostWithoutBodyEntity, PostElement }

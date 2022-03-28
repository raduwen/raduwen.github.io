type PostWithoutBodyEntity = {
  id: string;
  project: string;
  title: string;
  date: Date;
};

type PostEntity = PostWithoutBodyEntity & {
  body: PostElement[];
};

type PostElement = {
  type: string;
  body?: string;
  attributes?: { [key: string]: string };
}


export type { PostEntity, PostWithoutBodyEntity, PostElement };

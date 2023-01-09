type SubMenuItemEntity = {
  href: string
  text: string
  disabled?: boolean
}

type SubMenuEntity = {
  topic?: string
  items: SubMenuItemEntity[]
}

export type { SubMenuEntity }

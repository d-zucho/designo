export type TNavLink = {
  href: string
  label: string
}

export type TFeature = {
  feature: string
  description: string
  image: string
}

export type TProject = {
  id: string
  title: string
  description: string
  image: string
}

export type TCategory = {
  id: string
  category: string
  heroText: string
  href: string
  heroImage: string
  image: string
  projects: TProject[]
}

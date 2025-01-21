import { TFeature, TNavLink } from '@/lib/types'

export const NAV_LINKS: TNavLink[] = [
  {
    href: '/ourcompany',
    label: 'Our Company',
  },
  {
    href: '/locations',
    label: 'Locations',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

export const CATEGORIES = [
  {
    category: 'Web Design',
    id: 'webDesign',
    desktopImage: '/assets/home/desktop/image-app-design.jpg',
  },
  {
    category: 'App Design',
    id: 'appDesign',
    tabletImage: '/assets/home/tablet/image-app-design.jpg',
  },
  {
    category: 'Graphic Design',
    id: 'graphicDesign',
    mobileImage: '/assets/home/mobile/image-graphic-design.jpg',
  },
]

export const FEATURES: TFeature[] = [
  {
    feature: 'Passionate',
    description:
      'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    image: '/assets/home/desktop/illustration-passionate.svg',
  },
  {
    feature: 'Resourceful',
    description:
      'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    image: '/assets/home/desktop/illustration-resourceful.svg',
  },
  {
    feature: 'Friendly',
    description:
      'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    image: '/assets/home/desktop/illustration-friendly.svg',
  },
]

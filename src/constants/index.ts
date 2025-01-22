import { TCategory, TFeature, TNavLink } from '@/lib/types'
import TwitterIcon from '@/assets/icons/icon-twitter.svg'
import InstragramIcon from '@/assets/icons/icon-instagram.svg'
import PinterestIcon from '@/assets/icons/icon-pinterest.svg'
import FacebookIcon from '@/assets/icons/icon-facebook.svg'
import YoutubeIcon from '@/assets/icons/icon-youtube.svg'

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

export const CATEGORIES: TCategory[] = [
  {
    category: 'Web Design',
    id: 'webDesign',
    heroImage: '/assets/web-design/desktop/bg-pattern-intro-web.svg',
    heroText:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '/category/webDesign',
    image: '/assets/home/desktop/image-app-design.jpg',
    projects: [
      {
        id: 'express',
        title: 'Express',
        description:
          'A multi-carrier shipping website for ecommerce businesses',
        image: '/src/assets/web-design/desktop/image-express.jpg',
      },
      {
        id: 'transfer',
        title: 'Transfer',
        description:
          'Site for low-cost money transfers and sending money within seconds',
        image: '/src/assets/web-design/desktop/image-transfer.jpg',
      },
      {
        id: 'photon',
        title: 'Photon',
        description:
          'A state-of-the-art music player with high-resolution audio and DSP effects',
        image: '/src/assets/web-design/desktop/image-photon.jpg',
      },
      {
        id: 'builder',
        title: 'Builder',
        description:
          'Connects users with local contractors based on their location',
        image: '/src/assets/web-design/desktop/image-builder.jpg',
      },
      {
        id: 'blogr',
        title: 'Blogr',
        description:
          'Blogr is a platform for creating an online blog or publication',
        image: '/src/assets/web-design/desktop/image-blogr.jpg',
      },
      {
        id: 'camp',
        title: 'Camp',
        description:
          'Get expert training in coding, data, design, and digital marketing',
        image: '/src/assets/web-design/desktop/image-camp.jpg',
      },
    ],
  },
  {
    category: 'App Design',
    id: 'appDesign',
    heroImage: '/assets/app-design/desktop/bg-pattern-intro-app.svg',
    heroText:
      "Our mobile designs bring intuitive digital solutions to your customers' fingertips.",
    href: '/category/appDesign',
    image: '/assets/home/tablet/image-app-design.jpg',
    projects: [
      {
        id: 'airfilter',
        title: 'Airfilter',
        description:
          'Solving the problem of poor indoor air quality by filtering the air',
        image: '/src/assets/app-design/desktop/image-airfilter.jpg',
      },
      {
        id: 'eyecam',
        title: 'Eyecam',
        description:
          'Product that lets you edit your favorite photos and videos at any time',
        image: '/src/assets/app-design/desktop/image-eyecam.jpg',
      },
      {
        id: 'faceit',
        title: 'Faceit',
        description:
          'Get to meet your favorite internet superstar with the faceit app',
        image: '/src/assets/app-design/desktop/image-faceit.jpg',
      },
      {
        id: 'todo',
        title: 'Todo',
        description:
          'A todo app that features cloud sync with light and dark mode',
        image: '/src/assets/app-design/desktop/image-todo.jpg',
      },
      {
        id: 'loopstudios',
        title: 'Loopstudios',
        description: 'A VR experience app made for Loopstudios',
        image: '/src/assets/app-design/desktop/image-loopstudios.jpg',
      },
    ],
  },
  {
    category: 'Graphic Design',
    id: 'graphicDesign',
    heroImage: '/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg',
    heroText:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    href: '/category/graphicDesign',
    image: '/assets/home/mobile/image-graphic-design.jpg',
    projects: [
      {
        id: 'timbrown',
        title: 'Tim Brown',
        description:
          'A book cover designed for Tim Brown’s new release, ‘How to Avoid a Climate Disaster’.',
        image: '/src/assets/graphic-design/desktop/image-change.jpg',
      },

      {
        id: 'boxed-water',
        title: 'Boxed Water',
        description: 'A simple packaging concept made for Boxed Water',
        image: '/src/assets/graphic-design/desktop/image-boxed-water.jpg',
      },
      {
        id: 'science',
        title: 'Science!',
        description:
          'A poster made in collaboration with the Federal Art Project',
        image: '/src/assets/graphic-design/desktop/image-science.jpg',
      },
    ],
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

export const SOCIAL_ICONS = [
  {
    icon: TwitterIcon,
    alt: 'Twitter Icon',
  },
  {
    icon: InstragramIcon,
    alt: 'Instagram Icon',
  },
  {
    icon: PinterestIcon,
    alt: 'Pinterest Icon',
  },
  {
    icon: FacebookIcon,
    alt: 'Facebook Icon',
  },
  {
    icon: YoutubeIcon,
    alt: 'Youtube Icon',
  },
]

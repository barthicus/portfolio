import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

type Tag =
  | 'Next.js'
  | 'TailwindCSS'
  | 'SendGrid'
  | 'Framer Motion'
  | 'TypeScript'
  | 'Sanity.io'
  | 'Three.js'
  | 'Firebase'
  | 'Expo'
  | 'React.js'
  | 'SCSS'
  | 'StoryBlok'
  | 'Vue.js'
  | 'Bolt.CM'
  | 'Mapbox'
  | 'PHP'
  | 'Laravel'
  | 'API Platform'
  | 'MySQL'
  | 'JavaScript'
  | 'AWS'
  | 'WordPress'
  | 'jQuery'
  | 'Gulp'
  | 'Joomla'
  | 'UI design'
  | 'NeonDB'
  | 'shadcn/ui'
  | 'MaterialUI'
  | 'Styled Components'

export type Project = {
  title: string
  slug: string
  intro: string
  description: ReactNode
  link?: string
  industry:
    | 'Software'
    | 'Healthcare'
    | 'Media'
    | 'Events'
    | 'e-Commerce'
    | 'Interactive agency'
    | 'Steel industry'
    | 'Insurance'
    | 'Transport'
    | 'Finance'
    | 'Construction'
    | 'Beauty'
    | 'Sport'
    | 'Other Services'
  tags: Tag[]
  year: number
  date: string
  image?: StaticImageData
  images?: StaticImageData[]
  isFeatured: boolean
  isVisible: boolean
}

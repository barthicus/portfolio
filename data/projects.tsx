import { StaticImageData } from 'next/image'

import avatarImg from '@/components/Aside/me.png'

type Tag =
  | 'Next.js'
  | 'TailwindCSS'
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
  | 'JavaScript'
  | 'AWS'
  | 'WordPress'
  | 'jQuery'
  | 'Joomla'
  | 'UI design'

type Project = {
  title: string
  slug: string
  intro: string
  description: string
  link: string
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
  tags: Tag[]
  year: number
  images?: StaticImageData[]
}

export const projects: Project[] = [
  {
    title: 'Portfolio (v2 - current)',
    slug: 'portfolio',
    intro: 'this website, my latest portfolio',
    description: 'this website, my latest portfolio',
    link: 'https://bpodgruszecki.vercel.app',
    industry: 'Software',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    year: 2023,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'YT without spoilers',
    slug: 'yt-without-spoilers',
    industry: 'Software',
    intro: 'simple web app that allows you to watch YouTube videos without player controls',
    description: 'simple web app that allows you to watch YouTube videos without player controls',
    link: 'https://yt-without-spoilers.vercel.app',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript'],
    year: 2023,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Perfektgaraze.pl',
    slug: 'perfektgaraze',
    intro: 'website for a company that sells metal constructions',
    description: 'website for a company that sells metal constructions',
    link: 'https://perfektgaraze.pl',
    industry: 'Steel industry',
    tags: ['Next.js', 'Sanity.io', 'TypeScript'],
    year: 2022,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'VMI',
    slug: 'vmi',
    intro: 'website for interactive agency',
    industry: 'Interactive agency',
    description: 'website for interactive agency',
    link: 'https://vmi-website.vercel.app',
    tags: ['Next.js', 'Sanity.io', 'Three.js', 'TypeScript'],
    year: 2023,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Live Events',
    slug: 'live-events',
    intro: 'web app for live events',
    industry: 'Events',
    description: 'web app for live events',
    link: 'https://live-events.vercel.app',
    tags: ['Next.js', 'Firebase', 'TypeScript'],
    year: 2020,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Covid Entrance Ticket',
    slug: 'covid-entrance-ticket',
    industry: 'Healthcare',
    intro: 'web app for generating entrance tickets',
    description: 'web app for generating entrance tickets',
    link: 'https://google.pl',
    tags: ['Next.js', 'Firebase', 'TypeScript'],
    year: 2020,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Pain Tracker',
    slug: 'pain-tracker',
    intro: 'mobile and web app for tracking pain',
    industry: 'Healthcare',
    description: 'mobile and web app for tracking pain',
    link: 'https://google.pl',
    tags: ['Expo', 'React.js', 'Firebase'],
    year: 2019,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Old Portfolio',
    slug: 'old-portfolio',
    industry: 'Software',
    intro: 'my old portfolio',
    description: 'my old portfolio',
    link: 'https://barthicus.github.io',
    tags: ['Next.js', 'SCSS', 'StoryBlok'],
    year: 2018,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Taurustal',
    slug: 'taurustal',
    intro: 'website for construction company',
    industry: 'Steel industry',
    description: 'website for construction company',
    link: 'https://pl.taurustal.com',
    tags: ['Vue.js', 'Bolt.CM', 'Three.js'],
    year: 2017,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Routes planner',
    slug: 'routes-planner',
    intro: 'web app for planning orders and grouping them into routes',
    industry: 'Steel industry',
    description: 'web app for planning orders and grouping them into routes',
    link: 'https://google.pl',
    tags: ['Vue.js', 'Mapbox', 'PHP'],
    year: 2018,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Curly Weddings',
    slug: 'curly-weddings',
    industry: 'Events',
    intro: 'website for Polish wedding organizer',
    description: 'website for Polish wedding organizer',
    link: 'https://curlyweddings.pl',
    tags: ['Bolt.CM', 'UI design'],
    year: 2019,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Compensation Claims CRM',
    slug: 'compensation-claims-crm',
    intro: 'CRM for managing compensation claims',
    industry: 'Insurance',
    description: 'CRM for managing compensation claims',
    link: 'https://google.pl',
    tags: ['Laravel', 'PHP', 'JavaScript'],
    year: 2019,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Accounting ARTAX',
    slug: 'accounting-artax',
    intro: 'website for accounting company',
    industry: 'Finance',
    description: 'website for accounting company',
    link: 'https://artax.com.pl',
    tags: ['Bolt.CM', 'JavaScript'],
    year: 2019,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: '3D reconstruction viewer',
    slug: '3d-reconstruction-viewer',
    intro: 'web app for viewing 3D reconstruction of a building',
    industry: 'Steel industry',
    description: 'web app for viewing 3D reconstruction of a building',
    link: 'https://google.pl',
    tags: ['React.js', 'Three.js', 'JavaScript', 'AWS'],
    year: 2019,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Perfekt-Blach',
    slug: 'perfekt-blach',
    intro: 'Wordpress based website for Polish company Perfekt-Blach.',
    industry: 'Steel industry',
    description: 'Wordpress based website for Polish company Perfekt-Blach.',
    link: 'https://perfekt-blach.pl',
    tags: ['WordPress', 'JavaScript'],
    year: 2015,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'TaxiBus Kraków',
    slug: 'taxibus-krakow',
    intro: 'Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków',
    description: 'Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków',
    industry: 'Transport',
    link: 'https://perfekt-blach.pl',
    tags: ['WordPress', 'jQuery', 'SCSS'],
    year: 2017,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Suwała Studio Bruku',
    slug: 'suwala-studio-bruku',
    intro: 'Wordpress based website for Polish company',
    industry: 'Construction',
    description: 'Wordpress based website for Polish company',
    link: 'https://perfekt-blach.pl',
    tags: ['WordPress', 'jQuery', 'SCSS'],
    year: 2017,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'BluePear.pl',
    slug: 'bluepear',
    industry: 'Interactive agency',
    intro: 'website for a BluePear company',
    description: 'website for a BluePear company',
    link: 'https://bluepear.pl',
    tags: ['Joomla', 'jQuery'],
    year: 2013,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'PDF documents generator',
    slug: 'pdf-documents-generator',
    industry: 'Insurance',
    intro: 'web application (CRM) for managing and generating PDF documents',
    description: 'web application (CRM) for managing and generating PDF documents',
    link: 'https://bluepear.pl',
    tags: ['WordPress', 'jQuery'],
    year: 2014,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  },
  {
    title: 'Instytut Piękna - Guinot',
    slug: 'instytut-piekna-guinot',
    industry: 'Beauty',
    intro: 'website for a beauty salon',
    description: 'website for a beauty salon',
    link: 'https://bluepear.pl',
    tags: ['WordPress', 'jQuery'],
    year: 2014,
    // images: ["/img/avatar.jpeg", "/img/avatar.jpeg"],
    images: [avatarImg, avatarImg]
  }
]
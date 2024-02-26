import { StaticImageData } from 'next/image'

import covidpassImg from './img/covidpass.png'
import portfolioImg from './img/portfolio.png'
import rpImg from './img/rp.png'
import taurustalImg from './img/taurustal.png'
import vmiImg from './img/vmi.png'
import ytWithoutSpoilersImg from './img/yt.png'

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
  | 'Joomla'
  | 'UI design'

type Project = {
  title: string
  slug: string
  intro: string
  description: string
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
  tags: Tag[]
  year: number
  image?: StaticImageData
  images?: StaticImageData[]
  isFeatured: boolean
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
    image: portfolioImg,
    isFeatured: false
  },
  {
    title: 'YT without spoilers',
    slug: 'yt-without-spoilers',
    industry: 'Software',
    intro: 'simple web app that allows you to watch YouTube videos without player controls',
    description:
      'Simple website that allows you to watch YouTube videos without player controls. It usefull when you want to watch a video without seeing the progress bar and other controls.',
    link: 'https://yt-without-spoilers.vercel.app',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript'],
    year: 2023,
    image: ytWithoutSpoilersImg,
    isFeatured: true
  },
  {
    title: 'Perfektgaraze.pl',
    slug: 'perfektgaraze',
    intro: 'website for a company that sells metal constructions',
    description: 'website for a company that sells metal constructions',
    // link: 'https://perfektgaraze.pl',
    industry: 'Steel industry',
    tags: ['Next.js', 'Sanity.io', 'TypeScript'],
    year: 2022,
    isFeatured: false
  },
  {
    title: 'VMI',
    slug: 'vmi',
    intro: 'website for interactive agency VMI built with Next.js and Sanity.io as a headless CMS.',
    description:
      'Website for interactive agency VMI, built with Next.js and TailwindCSS for styling. Content is managed by Sanity.io - modern headless CMS.',
    industry: 'Interactive agency',
    link: 'https://vmi-website.vercel.app',
    tags: ['Next.js', 'Sanity.io', 'TypeScript', 'TailwindCSS', 'SendGrid', 'Framer Motion'],
    year: 2023,
    image: vmiImg,
    isFeatured: true
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
    isFeatured: false
  },
  {
    title: 'Covid Entrance Ticket',
    slug: 'covid-entrance-ticket',
    industry: 'Healthcare',
    intro: 'web app for generating entrance tickets during COVID-19 pandemic',
    description:
      'Web application created with Next.js and TypeScript for generating entrance tickets built for healthcare facility during COVID-19 pandemic. It uses Firebase for authentication and database.',
    // link: '',
    tags: ['Next.js', 'Firebase', 'TypeScript'],
    year: 2020,
    image: covidpassImg,
    isFeatured: false
  },
  {
    title: 'Pain Tracker',
    slug: 'pain-tracker',
    intro: 'mobile and web app for tracking pain',
    industry: 'Healthcare',
    description: 'mobile and web app for tracking pain',
    // link: '',
    tags: ['Expo', 'React.js', 'Firebase'],
    year: 2019,
    isFeatured: false
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
    isFeatured: false
  },
  {
    title: 'Taurustal.com',
    slug: 'taurustal',
    intro: '3D garage configurator built and custom admin panel in WordPress',
    industry: 'Steel industry',
    description:
      'Responsive 3D garage configurator built in Vue.js that allows to create custom garage and order it. Website is built with WordPress and uses Three.js for 3D rendering. Administation panel was built as a custom WordPress plugin and allows to manage garages costs and other parameters.',
    link: 'https://pl.taurustal.com',
    tags: ['Vue.js', 'Three.js', 'WordPress'],
    year: 2017,
    image: taurustalImg,
    isFeatured: true
  },
  {
    title: 'Routes planner',
    slug: 'routes-planner',
    intro: 'CRM web application for planning orders and grouping them into routes on map',
    industry: 'Steel industry',
    // description: 'web app for planning orders as interactive markers on map and grouping them into routes',
    description:
      'Web application for planning orders as interactive markers on map and grouping them into routes. It uses Mapbox for displaying map and the backend is built with API Platform (PHP + MySQL).',
    // link: '',
    tags: ['Vue.js', 'Mapbox', 'PHP', 'API Platform', 'MySQL'],
    year: 2018,
    image: rpImg,
    isFeatured: true
  },
  {
    title: 'Curly Weddings',
    slug: 'curly-weddings',
    industry: 'Events',
    intro: 'website for Polish wedding organizer',
    description: 'website for Polish wedding organizer',
    // link: 'https://curlyweddings.pl',
    tags: ['Bolt.CM', 'UI design'],
    year: 2019,
    isFeatured: false
  },
  {
    title: 'Compensation Claims CRM',
    slug: 'compensation-claims-crm',
    intro: 'CRM for managing compensation claims',
    industry: 'Insurance',
    description: 'CRM for managing compensation claims',
    // link: '',
    tags: ['Laravel', 'PHP', 'JavaScript'],
    year: 2019,
    isFeatured: false
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
    isFeatured: false
  },
  {
    title: '3D reconstruction viewer',
    slug: '3d-reconstruction-viewer',
    intro: 'web app for viewing 3D reconstruction of a building',
    industry: 'Steel industry',
    description: 'web app for viewing 3D reconstruction of a building',
    // link: '',
    tags: ['React.js', 'Three.js', 'JavaScript', 'AWS'],
    year: 2019,
    isFeatured: false
  },
  {
    title: 'Perfekt-Blach',
    slug: 'perfekt-blach',
    intro: 'Wordpress based website for Polish company Perfekt-Blach.',
    industry: 'Steel industry',
    description: 'Wordpress based website for Polish company Perfekt-Blach.',
    // link: 'https://perfekt-blach.pl',
    tags: ['WordPress', 'JavaScript'],
    year: 2015,
    isFeatured: false
  },
  {
    title: 'TaxiBus Kraków',
    slug: 'taxibus-krakow',
    intro: 'Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków',
    description: 'Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków',
    industry: 'Transport',
    link: 'https://taxibuskrakow.pl',
    tags: ['WordPress', 'jQuery', 'SCSS'],
    year: 2017,
    isFeatured: false
  },
  {
    title: 'Suwała Studio Bruku',
    slug: 'suwala-studio-bruku',
    intro: 'Wordpress based website for Polish company',
    industry: 'Construction',
    description: 'Wordpress based website for Polish company',
    link: 'https://studiobruku.pl',
    tags: ['WordPress', 'jQuery', 'SCSS'],
    year: 2017,
    isFeatured: false
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
    isFeatured: false
  },
  {
    title: 'PDF documents generator',
    slug: 'pdf-documents-generator',
    industry: 'Insurance',
    intro: 'web application (CRM) for managing and generating PDF documents',
    description: 'web application (CRM) for managing and generating PDF documents',
    // link: '',
    tags: ['WordPress', 'jQuery'],
    year: 2014,
    isFeatured: false
  },
  {
    title: 'Instytut Piękna - Guinot',
    slug: 'instytut-piekna-guinot',
    industry: 'Beauty',
    intro: 'website for a beauty salon',
    description: 'website for a beauty salon',
    link: 'http://instytutpiekna.krakow.pl',
    tags: ['WordPress', 'jQuery'],
    year: 2014,
    isFeatured: false
  }
]

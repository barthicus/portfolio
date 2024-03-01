import { StaticImageData } from 'next/image'

import artaxImg from './img/artax.png'
import bluepearImg from './img/bluepear.png'
import casesImg from './img/cases.png'
import covidpassImg from './img/covidpass.png'
import curlyImg from './img/curly.png'
import guinotImg from './img/guinot.png'
import oldfolioImg from './img/oldfolio.png'
import perfektImg from './img/perfekt.png'
import perfektblachImg from './img/perfektblach.png'
import pgarazeImg from './img/pgaraze.png'
import portfolioImg from './img/portfolio.png'
import rpImg from './img/rp.png'
import suwalaImg from './img/suwala.png'
import taurustalImg from './img/taurustal.png'
import taxibusImg from './img/taxibus.png'
import teamsportImg from './img/teamsport.png'
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
  | 'Gulp'
  | 'Joomla'
  | 'UI design'
  | 'NeonDB'
  | 'shadcn/ui'

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

export const projects: Project[] = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    intro: 'this website, my latest portfolio',
    description:
      'My latest portfolio portfolio (this website) powered by Next.js, TypeScript and TailwindCSS for responsive design. All animations were designed with Framer Motion. This project is a refreshment of my old portfolio.',
    link: 'https://bpodgruszecki.vercel.app',
    industry: 'Software',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    year: 2024,
    date: '02/2024',
    image: portfolioImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'YT without spoilers',
    slug: 'yt-without-spoilers',
    industry: 'Software',
    intro: 'Simple web application that allows to watch YouTube videos without player controls and other distractions.',
    description:
      'Simple website that allows you to watch YouTube videos without player controls. It usefull when you want to watch a video without seeing the progress bar and other controls.',
    link: 'https://yt-without-spoilers.vercel.app',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript'],
    year: 2023,
    date: '05/2023',
    image: ytWithoutSpoilersImg,
    isFeatured: true,
    isVisible: true
  },
  {
    title: 'Perfekt Garaże',
    slug: 'perfektgaraze',
    intro: 'website for a company that sells metal constructions',
    description: 'website for a company that sells metal constructions',
    // link: 'https://perfektgaraze.pl',
    industry: 'Steel industry',
    tags: ['Next.js', 'Sanity.io', 'TypeScript'],
    year: 2022,
    date: '10/2022',
    image: pgarazeImg,
    isFeatured: false,
    isVisible: false
  },
  {
    title: 'Visual Motion Interactive',
    slug: 'vmi',
    intro:
      'Website for interactive agency VMI built with Next.js and Sanity.io. Content is managed by Sanity.io - modern headless CMS.',
    description:
      'Website for interactive agency VMI, built with Next.js and TailwindCSS for styling. Content is managed by Sanity.io - modern headless CMS. Users can send messages from contact form to the agency thanks to SendGrid API.',
    industry: 'Interactive agency',
    link: 'https://visualmotioninteractive.com',
    tags: ['Next.js', 'Sanity.io', 'TypeScript', 'TailwindCSS', 'SendGrid', 'Framer Motion'],
    year: 2024,
    date: '01/2024',
    image: vmiImg,
    isFeatured: true,
    isVisible: true
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
    date: '03/2020',
    isFeatured: false,
    isVisible: false
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
    date: '06/2020',
    image: covidpassImg,
    isFeatured: false,
    isVisible: true
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
    date: '04/2019',
    isFeatured: false,
    isVisible: false
  },
  {
    title: 'Old Portfolio',
    slug: 'old-portfolio',
    industry: 'Software',
    intro: 'my old portfolio',
    description:
      'This is my old portfolio website created in Next.js (React.js). It was a place where I could show my projects and present current developer skills. I wanted to create website that could be as fast as possible and also easy to maintain so I chose static generated website combained with headless cms. The website layout was designed by me in Adobe XD.',
    link: 'https://barthicus.github.io',
    tags: ['Next.js', 'SCSS', 'StoryBlok', 'JavaScript', 'React.js'],
    year: 2018,
    date: '12/2018',
    image: oldfolioImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'Taurustal.com',
    slug: 'taurustal',
    intro:
      '3D garage configurator built in Vue.js and custom admin panel in WordPress for managing garages costs and other parameters.',
    industry: 'Steel industry',
    description:
      'Responsive 3D garage configurator built in Vue.js that allows to create custom garage and order it. Website is built with WordPress and uses Three.js for 3D rendering. Administation panel was built as a custom WordPress plugin and allows to manage garages costs and other parameters.',
    link: 'https://pl.taurustal.com',
    tags: ['Vue.js', 'Three.js', 'WordPress'],
    year: 2017,
    date: '08/2017',
    image: taurustalImg,
    isFeatured: true,
    isVisible: true
  },
  {
    title: 'Routes planner',
    slug: 'routes-planner',
    intro:
      'Fully featured CRM web application built with Next.js for planning orders and grouping them into routes on map as markers thanks to Mapbox.',
    industry: 'Steel industry',
    description:
      'Fully featured CRM web application for planning orders as interactive markers on map and grouping them into routes. Built wih Next.js App Router, NeonDB, Mapbox for displaying map and TailwindCSS.',
    // link: '',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Mapbox', 'shadcn/ui', 'NeonDB', 'TailwindCSS'],
    year: 2024,
    date: '03/2024',
    image: rpImg,
    isFeatured: true,
    isVisible: true
  },
  {
    title: 'Curly Weddings',
    slug: 'curly-weddings',
    industry: 'Events',
    intro: 'website for Polish wedding organizer',
    description:
      'Multilingual SPA website for Polish Weddings Planning company "Curly Weddings". CMS panel allows company owner to add new services and manage galleries. The main goal was to deliver fast, modern website that may help find more potential customers.',
    // link: 'https://curlyweddings.pl',
    tags: ['Bolt.CM', 'UI design', 'JavaScript', 'SCSS', 'PHP'],
    year: 2019,
    date: '09/2019',
    image: curlyImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'Accounting ARTAX',
    slug: 'accounting-artax',
    industry: 'Finance',
    intro: 'website for accounting company',
    description:
      'Simple SPA website created for ARTAX - Polish Accounting Firm created using Bolt.CM CMS. The platform layout was designed using JS, SCSS, and compiled in Gulp.js. Clinet was able to manage the content using Bolt.CM.',
    link: 'https://artax.com.pl',
    tags: ['Bolt.CM', 'JavaScript', 'PHP', 'SCSS', 'Gulp'],
    year: 2019,
    date: '10/2019',
    image: artaxImg,
    isFeatured: false,
    isVisible: true
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
    date: '07/2019',
    isFeatured: false,
    isVisible: false
  },
  {
    title: 'Perfekt-Blach',
    slug: 'perfekt-blach',
    intro: 'Wordpress based website for Polish company Perfekt-Blach.',
    industry: 'Steel industry',
    description:
      'Simple and clean Wordpress based website for Polish company Perfekt-Blach allowring their customers to get to know the company and their offer. Layout created in Photoshop and coded with SCSS and Gulp.js.',
    link: 'http://garazeblaszane.com',
    tags: ['WordPress', 'JavaScript', 'SCSS', 'Gulp'],
    year: 2015,
    date: '06/2015',
    image: perfektblachImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'TaxiBus Kraków',
    slug: 'taxibus-krakow',
    intro: 'Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków',
    description:
      'This refreshed website built with WordPress allows company employers to add new offer on the website and set their prices in both currencies. One of the most important portal sections was interactive booking form where customer can calculate prices of the custom tour/travel and book it instantly.',
    industry: 'Transport',
    link: 'https://taxibuskrakow.pl',
    tags: ['WordPress', 'jQuery', 'SCSS', 'Gulp', 'PHP'],
    year: 2017,
    date: '07/2017',
    image: taxibusImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'Suwała Studio Bruku',
    slug: 'suwala-studio-bruku',
    intro: 'Wordpress based website for Polish company',
    industry: 'Construction',
    description:
      'Wordpress based modern CMS website for Polish company Suwała Studio Bruku with a custom blog and gallery sections. The built-in administration panel allows registered company employers to add new blog posts, manage gallery categories, add realizations photos and update services.',
    link: 'https://studiobruku.pl',
    tags: ['WordPress', 'jQuery', 'SCSS', 'Gulp'],
    year: 2017,
    date: '10/2017',
    image: suwalaImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'BluePear.pl',
    slug: 'bluepear',
    industry: 'Interactive agency',
    intro: 'website for a BluePear company',
    description:
      'Website created for BluePear - interactive agency. Designed with a custom layout in mind, SCSS for styling and jQuery for interactivity. The website is fully responsive and has a custom administration panel for managing the content (Joomla).',
    link: 'https://bluepear.pl',
    tags: ['Joomla', 'jQuery', 'JavaScript', 'SCSS', 'Gulp', 'PHP'],
    year: 2013,
    date: '02/2013',
    image: bluepearImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'PDF documents generator',
    slug: 'pdf-documents-generator',
    industry: 'Insurance',
    intro: 'web application (CRM) for managing and generating PDF documents',
    description:
      'PDF documents generator is online application with offline support for Polish law firm that allows their employers generating PDF documents during meetings with Law Firm clients. It was built with Laravel framework and jQuery. Styles were created with SCSS and compiled with Gulp.js.',
    // link: '',
    tags: ['Laravel', 'jQuery', 'PHP', 'Gulp', 'SCSS'],
    year: 2014,
    date: '04/2014',
    image: casesImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'Instytut Piękna - Guinot',
    slug: 'instytut-piekna-guinot',
    industry: 'Beauty',
    intro: 'website for Guinot Beauty Institute created with WordPress',
    description:
      'The Guinot Beauty Institute website was crafted with WordPress, utilizing Photoshop for design, and incorporating HTML5, SCSS, and jQuery. The custom layout design ensures a unique and user-friendly platform for exploring beauty services at the Guinot Beauty Institute.',
    link: 'http://instytutpiekna.krakow.pl',
    tags: ['WordPress', 'jQuery', 'JavaScript', 'SCSS', 'Gulp'],
    year: 2014,
    date: '03/2014',
    image: guinotImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'TeamSport',
    slug: 'teamsport',
    industry: 'Sport',
    intro: 'website for a company offering a range of physical activity services',
    description:
      'TeamSport is a company offering a range of physical activity services, including sports camps and instructor-led courses. The designed portal allows easy management of the entire offer through an administrative panel. Users can also sign up for sports sections dedicated to specific disciplines, and the panel facilitates the management of galleries and various forms on the website.',
    // link: '',
    tags: ['WordPress', 'jQuery', 'Gulp'],
    year: 2017,
    date: '11/2017',
    image: teamsportImg,
    isFeatured: false,
    isVisible: true
  },
  {
    title: 'Agencja Detektywistyczna Winnicki',
    slug: 'agencja-detektywistyczna-winnicki',
    industry: 'Other Services',
    intro: '???',
    description: '???',
    // link: 'https://agencjawinnicki.pl',
    tags: ['WordPress', 'jQuery', 'Gulp'],
    year: 2019,
    date: '05/2019',
    // image: teamsportImg,
    isFeatured: false,
    isVisible: false
  },
  {
    title: 'Interior24',
    slug: 'interior24',
    industry: 'Other Services',
    intro: '???',
    description: '???',
    // link: 'https://interior-24.pl',
    tags: ['WordPress', 'jQuery', 'Gulp'],
    year: 2019,
    date: '08/2019',
    // image: teamsportImg,
    isFeatured: false,
    isVisible: false
  }
]

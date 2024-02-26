import { projects } from '../projects/projectsData'

const projectsByYear = {
  '2022 - Present': projects.filter(project => project.year >= 2022),
  '2020 - 2022': projects.filter(project => project.year >= 2019 && project.year < 2022),
  '2018 - 2019': projects.filter(project => project.year >= 2017 && project.year < 2019),
  '2015 - 2017': projects.filter(project => project.year >= 2014 && project.year < 2017),
  '2009 - 2014': projects.filter(project => project.year >= 2009 && project.year < 2014)
}

export const careerSteps = [
  {
    title: 'Senior Front-End Developer',
    time: '2022 - Present',
    description:
      'Building fast webapps in React with TypeScript. Support currently running applications and adding features. Maintaining mobile apps written in Expo/TS. Doing mostly Front-End but thanks to the Next.js framework I can build complete fullstack apps.',
    descriptionBullets: [
      'Building fast webapps in React with TypeScript.',
      'Support currently running applications and adding features.',
      'Maintaining mobile apps written in Expo/TS.',
      'Doing mostly Front-End but thanks to the Next.js framework I can build complete fullstack apps.',
      'Preparing estimates for new features and creating proposals for clients.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['React', 'TypeScript', 'Next.js', 'Expo']
  },
  {
    title: 'Front-End Developer',
    time: '2020 - 2022',
    projects: projectsByYear['2020 - 2022'],
    description:
      'Developing React.js based Web apps using Next.js, Gatsby and Firebase. Integrating video-call solutions (WebRTC) and payment systems (Stripe). Building mobile apps with Expo.',
    descriptionBullets: [
      'Developing React.js based Web apps using Next.js, Gatsby and Firebase.',
      'Integrating video-call solutions (WebRTC) and payment systems (Stripe).',
      'Building mobile apps with Expo.'
    ],
    tags: ['Next.js', 'Gatsby', 'Firebase', 'Stripe', 'SendGrid', 'Twilio', 'Expo', 'React']
  },
  {
    title: 'Front-End Developer',
    time: '2018 - 2019',
    description:
      'Building web applications using Vue.js/React and designing responsive and optimized websites using Bolt.CM. On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating fast API for my frontend apps.',
    descriptionBullets: [
      'Building web applications using Vue.js/React and designing responsive and optimized websites using Bolt.CM.',
      'On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating fast API for my frontend apps.'
    ],
    projects: projectsByYear['2018 - 2019'],
    tags: ['PHP', 'Vue.js', 'React', 'Three.js', 'ApiPlatform', 'Laravel', 'Bolt.CM']
  },
  {
    title: 'Webdeveloper',
    time: '2015 - 2017',
    description:
      'I developed many company websites/stores and designed layouts. I wrote WordPress plugins and custom PHP platforms. I also started building my first SPAs using Angular.js, Grunt/Gulp, SCSS, Rollup, and BrowserSync.',
    descriptionBullets: [
      'I developed many company websites/stores and designed layouts.',
      'I wrote WordPress plugins and custom PHP platforms.',
      'I also started building my first SPAs using Angular.js, Grunt/Gulp, SCSS, Rollup, and BrowserSync.'
    ],
    projects: projectsByYear['2015 - 2017'],
    tags: ['WordPress', 'Laravel', 'Angular.js', 'Grunt', 'Gulp', 'SCSS', 'Rollup', 'BrowserSync']
  },
  {
    title: 'Beginner Webdeveloper',
    time: '2009 - 2014',
    description:
      'As a beginner developer I tried to learn as much as I can by creating websites and applications. I designed and coded many company websites, implemented JS scripts with jQuery, and optimized websites for SEO and speed. I also developed and maintained PHP 5 applications.',
    descriptionBullets: [
      'As a beginner developer I tried to learn as much as I can by creating websites and applications.',
      'I designed and coded many company websites, implemented JS scripts with jQuery, and optimized websites for SEO and speed.',
      'I also developed and maintained PHP 5 applications.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['jQuery', 'PHP', 'MySQL', 'SEO']
  }
]

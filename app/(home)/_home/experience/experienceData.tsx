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
      'Building web applications in React (Next.js) with TypeScript. Support currently running applications and adding features. Maintaining mobile apps written in Expo/TS. Doing mostly Front-End but thanks to the Next.js framework I can build complete fullstack apps.',
    descriptionBullets: [
      'Building web applications in React (Next.js) with TypeScript and TailwindCSS.',
      'Support currently running applications by adding new features.',
      'Maintaining mobile apps written in Expo and TypeScript.',
      'Designing and developing fast and nice looking websites with Next.js and Sanity.io for CMS.',
      'Preparing estimates for new features, creating proposals and documentation for clients.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['React', 'TypeScript', 'Next.js', 'Expo']
  },
  {
    title: 'Front-End Developer',
    time: '2020 - 2022',
    projects: projectsByYear['2020 - 2022'],
    description:
      'Developing React.js based Web apps using React Gatsby and Firebase. Integrating video-call solutions (WebRTC) and payment systems (Stripe). Building mobile apps with Expo.',
    descriptionBullets: [
      'Creating Routes Planner - SaSS for european companies that offer orders and routes planning (Vue.js + ApiPlatform).',
      'Developing React.js based Web apps using React, Gatsby and MaterialUI.',
      'Integrating video-call solutions (Twilio Video for WebRTC).',
      'Integrating payment systems with Stripe for scheduling appointments.',
      'Building mobile apps with React Native/Expo and Firebase.',
      'Building multiple websites using headless CMS like Sanity.io, StoryBlok and Strapi.'
    ],
    tags: ['React', 'Next.js', 'Gatsby', 'Firebase', 'Stripe', 'SendGrid', 'MaterialUI', 'Expo']
  },
  {
    title: 'Front-End Developer',
    time: '2018 - 2019',
    description:
      'Building web applications using Vue.js/React and designing responsive and optimized websites using Bolt.CM. On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating fast API for my frontend apps.',
    descriptionBullets: [
      'Building web applications using Vue.js/React and designing responsive and optimized websites with Bolt.CM as a backend CMS.',
      'Creating 3D configurators using Three.js and Vue.js and integrating them with WordPress.',
      'Integrating and creating fast API for frontend apps using technologies in PHP like ApiPlatform, Laravel, and JWT.'
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
      'Creating custom company websites themes in Wordpress using Timber framework and Grunt/Gulp, SCSS, rollup, BrowserSync for tooling',
      'Developing WordPress plugins and integrating them in websites.',
      'Designing logos and responsive layouts designs.',
      'Writing scripts using JavaScript with jQuery and AngularJS.',
      'Building PHP applications with Laravel (mostly CRMs for small companies)'
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
      'Designing and coding company websites.',
      'Implementing simple JavaScript jQuery scripts.',
      'Optimizing websites to improve SEO and initial speed loading.',
      'Developing and maintaining self-written PHP 5 applications.',
      'Learning and experimenting with different frontend and backend technologies.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['jQuery', 'PHP', 'MySQL', 'SEO']
  }
]

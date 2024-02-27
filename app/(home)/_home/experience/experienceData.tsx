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
    company: 'Voltiso',
    time: '2022 - Present',
    description:
      'Building web applications in React (Next.js) with TypeScript. Support currently running applications and adding features. Maintaining mobile apps written in Expo/TS. Doing mostly Front-End but thanks to the Next.js framework I can build complete fullstack apps.',
    descriptionBullets: [
      'Building web applications in React (Next.js) with TypeScript and TailwindCSS using serverless functions and Vercel/Google Cloud for hosting.',
      'Support currently running applications by adding new features and maintaining mobile apps written in Expo and TypeScript.',
      'Developing fast and SEO friendly fast websites with Next.js and Sanity.io for CMS. Customizing Sanity.io dashboard and developing custom plugins.',
      'Preparing estimates for new features, creating proposals and technical documentation/guides for clients.',
      'Help with the recruitment process and onboarding new developers.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['React', 'TypeScript', 'Next.js', 'Expo']
  },
  {
    title: 'Front-End Developer',
    company: 'Voltiso',
    time: '2020 - 2022',
    projects: projectsByYear['2020 - 2022'],
    description:
      'Developing React.js based Web apps using React Gatsby and Firebase. Integrating video-call solutions (WebRTC) and payment systems (Stripe). Building mobile apps with Expo.',
    descriptionBullets: [
      'Creating Routes Planner - SaSS for european companies that offer orders and routes planning as map markers (Vue.js + ApiPlatform).',
      'Developing platforms for video-calls where users can schedule and join video calls after payment (React, Twilio Video, MaterialUI, Stripe).',
      'Building mobile apps in React Native/Expo with users authentication (Firebase Auth), roles and 3D animation (ThreeJS).',
      'Creating multiple smaller websites using headless CMS like Sanity.io, StoryBlok and Strapi.'
    ],
    tags: ['React', 'Next.js', 'Gatsby', 'Firebase', 'Stripe', 'SendGrid', 'MaterialUI', 'Expo']
  },
  {
    title: 'Front-End Developer',
    company: 'Freelancer',
    time: '2018 - 2019',
    description:
      'Building web applications using Vue.js/React and designing responsive and optimized websites using Bolt.CM. On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating fast API for my frontend apps.',
    descriptionBullets: [
      'Building interactive admin dashboards (CRMs) - web applications using Vue.js/React integrated with API backend on Laravel, Strapi or API Platform.',
      'Creating 3D product configurators with dynamic price calculator using Three.js and Vue.js. Integrating them on clients websites with various type of forms.',
      'Designing responsive layouts and SEO optimized websites with Bolt.CM and Wordpress. Taking care of clients websites performance using Google Analytics, Google Search Console and other dedicated SEO tools.'
    ],
    projects: projectsByYear['2018 - 2019'],
    tags: ['PHP', 'Vue.js', 'React', 'Three.js', 'ApiPlatform', 'Laravel', 'Bolt.CM']
  },
  {
    title: 'WebDeveloper',
    company: 'BluePear',
    time: '2015 - 2017',
    description:
      'I developed many company websites/stores and designed layouts. I wrote WordPress plugins and custom PHP platforms. I also started building my first SPAs using Angular.js, Grunt/Gulp, SCSS, Rollup, and BrowserSync.',
    descriptionBullets: [
      'Creating custom company websites themes in Wordpress using Timber framework and developing WordPress plugins and integrating them in websites.',
      'Creating dedicated SEO tools to automate repetitive optimisation tasks in order to improve website speed, performance and ranking in Google Search.',
      'Building PHP applications with Laravel and writing scripts to enhance interactivity on websites using JavaScript with jQuery and AngularJS.'
    ],
    projects: projectsByYear['2015 - 2017'],
    tags: ['WordPress', 'Laravel', 'Angular.js', 'Grunt', 'Gulp', 'SCSS', 'Rollup', 'BrowserSync']
  },
  {
    title: 'Beginner WebDeveloper',
    company: 'BluePear',
    time: '2009 - 2014',
    description:
      'As a beginner developer I tried to learn as much as I can by creating websites and applications. I designed and coded many company websites, implemented JS scripts with jQuery, and optimized websites for SEO and speed. I also developed and maintained PHP 5 applications.',
    descriptionBullets: [
      'Designing and coding simple company websites and ladning pages with HTML, CSS and WordPress.',
      'Implementing simple JavaScript jQuery scripts and auditing websites to improve SEO and initial speed loading',
      'Developing and maintaining self-written PHP 5 applications like simple admin dashboards with basic UI interactivity.',
      'Designing logos, business cards, responsive layouts designs and other branding graphics in PhotoShop.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['jQuery', 'PHP', 'MySQL', 'SEO']
  }
]

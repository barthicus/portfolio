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
      'Building web applications with Next.js, TypeScript, TailwindCSS, and serverless functions, hosted on Vercel/Google Cloud/AWS. Maintaining mobile apps in Expo and TypeScript. Delivering fast, SEO-friendly websites with Sanity.io as headless CMS. Helping with estimating features, crafting proposals, providing technical documentation, and supporting recruitment and onboarding for new developers.',
    descriptionBullets: [
      'Built web applications in React (Next.js) with TypeScript and TailwindCSS using serverless functions and Vercel/Google Cloud/AWS for hosting.',
      'Support currently running applications by adding new features and maintaining mobile apps written in Expo and TypeScript.',
      'Developed fast and SEO friendly fast websites with Next.js and Sanity.io for CMS. Customizing Sanity.io dashboard and developed custom plugins.',
      'Helped prepare estimates for new features, creating proposals and technical documentation/guides for clients.',
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
      'Built a Routes Planner - SaSS for European companies using Vue.js and ApiPlatform, allowing users to manage orders and routes through map markers. Developed video-call platforms with scheduling and payment features. Developed mobile apps with Expo and Firebase. Integrated ThreeJS for 3D animation. Created various smaller websites using headless CMS platforms like Sanity.io, StoryBlok, and Strapi.',
    descriptionBullets: [
      'Built Routes Planner - SaSS for european companies that offer orders and routes planning as map markers (Vue.js + ApiPlatform).',
      'Developed platforms for video-calls where users can schedule and join video calls after payment (React, Twilio Video, MaterialUI, Stripe).',
      'Built mobile apps in React Native/Expo with users authentication (Firebase Auth), roles and 3D animation (ThreeJS).',
      'Creating multiple smaller websites using headless CMS like Sanity.io, StoryBlok and Strapi.'
    ],
    tags: ['React', 'Next.js', 'Gatsby', 'Firebase', 'Stripe', 'SendGrid', 'MaterialUI', 'Expo']
  },
  {
    title: 'Front-End Developer',
    company: 'Freelancer',
    time: '2018 - 2019',
    description:
      'Developed interactive admin dashboards (CRMs) using Vue.js/React integrated with API backends on Laravel, Strapi, or API Platform. Created 3D product configurators using Three.js and Vue.js. Designed responsive layouts and SEO-optimized websites using Bolt.CM and Wordpress, ensuring optimal performance with tools such as Google Analytics, Google Search Console, and other dedicated SEO tools.',
    descriptionBullets: [
      'Built interactive admin dashboards (CRMs) - web applications using Vue.js/React integrated with API backend on Laravel, Strapi or API Platform.',
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
      'Built custom WordPress themes using the Timber framework, SCSS and Gulp. Developed custom admin WordPress plugins. Helped to create specialised SEO tools to automate tasks, enhancing website speed, performance, and ranking in Google Search. Constructed PHP applications with Laravel, and authored scripts to boost interactivity on websites using JavaScript with jQuery and AngularJS.',
    descriptionBullets: [
      'Creating custom company websites themes in Wordpress using Timber framework and developed WordPress plugins and integrating them in websites.',
      'Creating dedicated SEO tools to automate repetitive optimisation tasks in order to improve website speed, performance and ranking in Google Search.',
      'Built PHP applications with Laravel and writing scripts to enhance interactivity on websites using JavaScript with jQuery and AngularJS.'
    ],
    projects: projectsByYear['2015 - 2017'],
    tags: ['WordPress', 'Laravel', 'Angular.js', 'Grunt', 'Gulp', 'SCSS', 'Rollup', 'BrowserSync']
  },
  {
    title: 'Beginner WebDeveloper',
    company: 'BluePear',
    time: '2009 - 2014',
    description:
      'Designed and coded company websites and landing pages using HTML, CSS, and WordPress. Implemented basic JavaScript jQuery scripts, helped to perform website audits for SEO improvements, and optimized initial loading speed. Developed and maintained PHP 5 applications, including simple admin dashboards with basic UI interactivity. Additionally, designed logos, business cards, responsive layouts, and other branding graphics using PhotoShop.',
    descriptionBullets: [
      'Designing and coding simple company websites and ladning pages with HTML, CSS and WordPress.',
      'Implementing simple JavaScript jQuery scripts and auditing websites to improve SEO and initial speed loading',
      'Developed and maintained self-written PHP 5 applications like simple admin dashboards with basic UI interactivity.',
      'Designing logos, business cards, responsive layouts designs and other branding graphics in PhotoShop.'
    ],
    projects: projectsByYear['2022 - Present'],
    tags: ['jQuery', 'PHP', 'MySQL', 'SEO']
  }
]

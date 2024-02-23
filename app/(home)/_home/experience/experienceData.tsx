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
    subtitle: 'React, TypeScript, Next.js, Expo, Firebase, Gatsby, WebRTC, Stripe',
    time: '2022 - Present',
    description: (
      <p>
        Building fast webapps in React with TypeScript. Support currently running applications and adding features.
        Maintaining mobile apps written in Expo/TS. Doing mostly Front-End but thanks to the Next.js framework I can
        build complete fullstack apps.
      </p>
    ),
    projects: projectsByYear['2022 - Present'],
    tags: ['React', 'TypeScript', 'Next.js', 'Expo', 'Firebase', 'Gatsby', 'WebRTC', 'Stripe']
  },
  {
    title: 'Front-End Developer',
    subtitle: 'Next.js, Gatsby, Firebase',
    time: '2020 - 2022',
    projects: projectsByYear['2020 - 2022'],
    description: (
      <p>
        Developing React.js based Web apps using Next.js, Gatsby and Firebase. Integrating video-call solutions (WebRTC)
        and payment systems (Stripe). Building mobile apps with Expo.
      </p>
    ),
    tags: ['Next.js', 'Gatsby', 'Firebase', 'Stripe', 'SendGrid', 'Twilio']
  },
  {
    title: 'Front-End Developer',
    time: '2018 - 2019',
    description: (
      <>
        <p className="mb-2">
          Building web applications using Vue.js/React and designing responsive and optimized websites using Bolt.CM.
        </p>
        <p>
          On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating fast API for my
          frontend apps.
        </p>
      </>
    ),
    projects: projectsByYear['2018 - 2019'],
    tags: ['PHP', 'Vue.js', 'React', 'Three.js']
  },
  {
    title: 'Webdeveloper',
    time: '2015 - 2017',
    description: (
      <p>
        I developed many company websites/stores and designed layouts. I wrote WordPress plugins and custom PHP
        platforms. I also started building my first SPAs using Angular.js, Grunt/Gulp, SCSS, Rollup, and BrowserSync.
      </p>
    ),
    projects: projectsByYear['2015 - 2017'],
    tags: ['WordPress', 'Laravel', 'Angular.js', 'Grunt', 'Gulp', 'SCSS', 'Rollup', 'BrowserSync']
  },
  {
    title: 'Beginner Webdeveloper',
    time: '2009 - 2014',
    description: (
      <p>
        As a beginner developer I tried to learn as much as I can by creating websites and applications. I designed and
        coded many company websites, implemented JS scripts with jQuery, and optimized websites for SEO and speed. I
        also developed and maintained PHP 5 applications.
      </p>
    ),
    projects: projectsByYear['2022 - Present'],
    tags: ['jQuery', 'PHP', 'MySQL', 'SEO']
  }
]

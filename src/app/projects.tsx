type Tag =
  | "Next.js"
  | "TailwindCSS"
  | "Framer Motion"
  | "TypeScript"
  | "Sanity.io"
  | "Three.js"
  | "Firebase"
  | "Expo"
  | "React.js"
  | "SCSS"
  | "StoryBlok"
  | "Vue.js"
  | "Bolt.CM"
  | "Mapbox"
  | "PHP"
  | "Laravel"
  | "JS"
  | "AWS"
  | "WordPress"
  | "jQuery"
  | "Joomla"
  | "UI design"

type Project = {
  title: string
  description: string
  link: string
  tags: Tag[]
  year: number
}

export const projects: Project[] = [
  {
    title: "Portfolio (v2 - current)",
    description: "this website, my latest portfolio",
    link: "https://bpodgruszecki.vercel.app",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    year: 2023,
  },
  {
    title: "YT without spoilers",
    description: "simple web app that allows you to watch YouTube videos without player controls",
    link: "https://yt-without-spoilers.vercel.app",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    year: 2023,
  },
  {
    title: "Perfektgaraze.pl",
    description: "website for a company that sells metal constructions",
    link: "https://perfektgaraze.pl",
    tags: ["Next.js", "Sanity.io", "TypeScript"],
    year: 2022,
  },
  {
    title: "VMI",
    description: "website for interactive agency",
    link: "https://vmi-website.vercel.app",
    tags: ["Next.js", "Sanity.io", "Three.js", "TypeScript"],
    year: 2023,
  },
  {
    title: "Live Events",
    description: "web app for live events",
    link: "https://live-events.vercel.app",
    tags: ["Next.js", "Firebase", "TypeScript"],
    year: 2020,
  },
  {
    title: "Covid Entrance Ticket",
    description: "web app for generating entrance tickets",
    link: "https://google.pl",
    tags: ["Next.js", "Firebase", "TypeScript"],
    year: 2020,
  },
  {
    title: "Pain Tracker",
    description: "mobile and web app for tracking pain",
    link: "https://google.pl",
    tags: ["Expo", "React.js", "Firebase"],
    year: 2019,
  },
  {
    title: "Old Portfolio",
    description: "my old portfolio",
    link: "https://barthicus.github.io",
    tags: ["Next.js", "SCSS", "StoryBlok"],
    year: 2018,
  },
  {
    title: "Taurustal",
    description: "website for construction company",
    link: "https://pl.taurustal.com",
    tags: ["Vue.js", "Bolt.CM", "Three.js"],
    year: 2017,
  },
  {
    title: "Routes planner",
    description: "web app for planning orders and grouping them into routes",
    link: "https://google.pl",
    tags: ["Vue.js", "Mapbox", "PHP"],
    year: 2018,
  },
  {
    title: "Curly Weddings",
    description: "website for Polish wedding organizer",
    link: "https://curlyweddings.pl",
    tags: ["Bolt.CM", "UI design"],
    year: 2019,
  },
  {
    title: "Compensation Claims CRM",
    description: "CRM for managing compensation claims",
    link: "https://google.pl",
    tags: ["Laravel", "PHP", "JS"],
    year: 2019,
  },
  {
    title: "Accounting ARTAX",
    description: "website for accounting company",
    link: "https://artax.com.pl",
    tags: ["Bolt.CM", "JS"],
    year: 2019,
  },
  {
    title: "3D reconstruction viewer",
    description: "web app for viewing 3D reconstruction of a building",
    link: "https://google.pl",
    tags: ["React.js", "Three.js", "JS", "AWS"],
    year: 2019,
  },
  {
    title: "Perfekt-Blach",
    description: "Wordpress based website for Polish company Perfekt-Blach.",
    link: "https://perfekt-blach.pl",
    tags: ["WordPress", "JS"],
    year: 2015,
  },
  {
    title: "TaxiBus Kraków",
    description:
      "Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków",
    link: "https://perfekt-blach.pl",
    tags: ["WordPress", "jQuery", "SCSS"],
    year: 2017,
  },
  {
    title: "Suwała Studio Bruku",
    description: "Wordpress based website for Polish company",
    link: "https://perfekt-blach.pl",
    tags: ["WordPress", "jQuery", "SCSS"],
    year: 2017,
  },
  {
    title: "BluePear.pl",
    description: "website for a BluePear company",
    link: "https://bluepear.pl",
    tags: ["Joomla", "jQuery"],
    year: 2013,
  },
  {
    title: "PDF documents generator",
    description: "web application (CRM) for managing and generating PDF documents",
    link: "https://bluepear.pl",
    tags: ["WordPress", "jQuery"],
    year: 2014,
  },
  {
    title: "Instytut Piękna - Guinot",
    description: "website for a beauty salon",
    link: "https://bluepear.pl",
    tags: ["WordPress", "jQuery"],
    year: 2014,
  },
]

const projectsByYear = {
  "2022 - Present": projects.filter((project) => project.year >= 2022),
  "2020 - 2022": projects.filter((project) => project.year >= 2019 && project.year < 2022),
  "2018 - 2019": projects.filter((project) => project.year >= 2017 && project.year < 2019),
  "2015 - 2017": projects.filter((project) => project.year >= 2014 && project.year < 2017),
  "2009 - 2014": projects.filter((project) => project.year >= 2009 && project.year < 2014),
}

export const careerSteps = [
  {
    title: "Front-End Developer",
    time: "2022 - Present",
    description: (
      <p>
        Building fast webapps in React with TypeScript. Support currently running applications and
        adding features. Maintaining mobile apps written in Expo/TS. Doing mostly Front-End but
        thanks to the Next.js framework I can build complete fullstack apps.
      </p>
    ),
    projects: projectsByYear["2022 - Present"],
  },
  {
    title: "Front-End Developer (Next.js, Gatsby, Firebase)",
    time: "2020 - 2022",
    projects: projectsByYear["2020 - 2022"],
    description: (
      <p>
        Developing React.js based Web apps using Next.js, Gatsby and Firebase. Integrating
        video-call solutions (WebRTC) and payment systems (Stripe). Building mobile apps with Expo.
      </p>
    ),
  },
  {
    title: "Front-End Developer (PHP, Vue.js, React, Three.js)",
    time: "2018 - 2019",
    description: (
      <>
        <p className="mb-2">
          Building web applications using Vue.js/React and designing responsive and optimized
          websites using Bolt.CM.
        </p>
        <p>
          On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating
          fast API for my frontend apps.
        </p>
      </>
    ),
    projects: projectsByYear["2018 - 2019"],
  },
  {
    title: "Webdeveloper (WordPress, Laravel, JS)",
    time: "2015 - 2017",
    description: (
      <p>
        I developed many company websites/stores and designed layouts. I wrote WordPress plugins and
        custom PHP platforms. I also started building my first SPAs using Angular.js, Grunt/Gulp,
        SCSS, Rollup, and BrowserSync.
      </p>
    ),
    projects: projectsByYear["2015 - 2017"],
  },
  {
    title: "Beginner Webdeveloper",
    time: "2009 - 2014",
    description: (
      <p>
        As a beginner developer I tried to learn as much as I can by creating websites and
        applications. I designed and coded many company websites, implemented JS scripts with
        jQuery, and optimized websites for SEO and speed. I also developed and maintained PHP 5
        applications.
      </p>
    ),
    projects: projectsByYear["2022 - Present"],
  },
]

// "use client"

// import { useState } from "react"
// import { AnimatePresence, motion } from "framer-motion"

const calendarIcon = (
  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
    <svg
      aria-hidden="true"
      className="h-3 w-3 text-blue-800 dark:text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
)

const careerSteps = [
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
    // description: (
    //   <>
    //     <p className="mb-2">
    //       Building fast webapps in React with TypeScript. Support currently running applications and
    //       adding features. Maintaining mobile apps written in Expo/TS. Doing mostly Front-End but
    //       thanks to the Next.js framework I can build complete fullstack apps.
    //     </p>
    //     <p className="mb-2 text-white">Featured projects:</p>
    //     <ul className="ml-3 list-inside list-disc space-y-2">
    //       <li>
    //         <a
    //           href="https://bpodgruszecki.vercel.app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-teal-500 hover:underline dark:text-teal-400"
    //         >
    //           Portfolio (v2 - current)
    //         </a>{" "}
    //         - this website, my latest portfolio (Next.js, TailwindCSS, Framer Motion, TypeScript)
    //       </li>
    //       <li>
    //         <a
    //           href="https://yt-without-spoilers.vercel.app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           YT without spoilers
    //         </a>{" "}
    //         - simple web app that allows you to watch YouTube videos without player controls
    //         (Next.js, TailwindCSS, TypeScript)
    //       </li>
    //       <li>
    //         <a
    //           href="https://perfektgaraze.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Perfektgaraze.pl
    //         </a>{" "}
    //         - website for a company that sells metal constructions (Next.js, Sanity.io, TypeScript)
    //       </li>
    //       <li>
    //         <a
    //           href="https://vmi-website.vercel.app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           VMI
    //         </a>{" "}
    //         - website for interactive agency (Next.js, Sanity.io, Three.js, TypeScript)
    //       </li>
    //     </ul>
    //     {/* <p className="mb-2">Tools and technologies I use:</p>
    //     <ul className="list-inside list-disc space-y-2">
    //       <li>Web: Next.js 13, TypeScript, TailwindCSS</li>
    //       <li>Mobile: Expo</li>
    //       <li>Design/UI: Figma</li>
    //       <li>Cms: Sanity.io</li>
    //       <li>Favourite libs: Zustand, DrizzleORM, Radix ui</li>
    //     </ul> */}
    //   </>
    // ),
    projects: [
      {
        title: "Portfolio (v2 - current)",
        description: "this website, my latest portfolio",
        link: "https://bpodgruszecki.vercel.app",
        tags: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
      },
      {
        title: "YT without spoilers",
        description:
          "simple web app that allows you to watch YouTube videos without player controls",
        link: "https://yt-without-spoilers.vercel.app",
        tags: ["Next.js", "TailwindCSS", "TypeScript"],
      },
      {
        title: "Perfektgaraze.pl",
        description: "website for a company that sells metal constructions",
        link: "https://perfektgaraze.pl",
        tags: ["Next.js", "Sanity.io", "TypeScript"],
      },
      {
        title: "VMI",
        description: "website for interactive agency",
        link: "https://vmi-website.vercel.app",
        tags: ["Next.js", "Sanity.io", "Three.js", "TypeScript"],
      },
    ],
  },
  {
    title: "Front-End Developer (Next.js, Gatsby, Firebase)",
    time: "2019 - 2022",
    projects: [
      {
        title: "Live Events",
        description: "web app for live events",
        link: "https://live-events.vercel.app",
        tags: ["Next.js", "Firebase", "TypeScript"],
      },
      {
        title: "Covid Entrance Ticket",
        description: "web app for generating entrance tickets",
        link: "https://google.pl",
        tags: ["Next.js", "Firebase", "TypeScript"],
      },
      {
        title: "Pain Tracker",
        description: "mobile and web app for tracking pain",
        link: "https://google.pl",
        tags: ["Expo", "React.js", "Firebase"],
      },
      {
        title: "Old Portfolio",
        description: "my old portfolio",
        link: "https://barthicus.github.io",
        tags: ["Next.js", "SCSS", "StoryBlok"],
      },
    ],
    description: (
      <p>
        Developing React.js based Web apps using Next.js, Gatsby and Firebase. Integrating
        video-call solutions (WebRTC) and payment systems (Stripe). Building mobile apps with Expo.
      </p>
    ),
    // description: (
    //   <>
    //     <p className="mb-2">
    //       Developing React.js based Web apps using Next.js, Gatsby and Firebase. Integrating
    //       video-call solutions (WebRTC) and payment systems (Stripe). Building mobile apps with
    //       Expo.
    //     </p>
    //     {/* <ul className="list-inside list-disc space-y-2">
    //       <li>React Native Mobile Apps (RN, Expo, WebRTC, Stripe, QRCode, UIKitten)</li>
    //       <li>Firebase (React, AWS)</li>
    //       <li>NodeJS (Express, Sockets)</li>
    //       <li>Headless CSM: Sanity, StoryBlok, WordPress API, Strapi</li>
    //       <li>Other: PHP 7, SCSS, Three.js</li>
    //     </ul> */}
    //     <p className="mb-2 text-white">Featured projects:</p>
    //     <ul className="ml-3 list-inside list-disc space-y-2">
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Live Events
    //         </a>{" "}
    //         - web app for managing live events (Next.js, Firebase, TypeScript)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Covid Entrance Ticket
    //         </a>{" "}
    //         - web app for clinics to manage personel and patients (Next.js, Firebase, TypeScript)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Pain Tracker
    //         </a>{" "}
    //         - mobile and web app for tracking pain (Expo, Next.js, Firebase)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Old portfolio
    //         </a>{" "}
    //         - my previous portfolio (Next.js, SCSS, StoryBlok)
    //       </li>
    //     </ul>
    //   </>
    // ),
  },
  {
    title: "Front-End Developer (PHP, Vue.js, React, Three.js)",
    time: "2017 - 2019",
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
    projects: [
      {
        title: "Taurustal",
        description: "website for construction company",
        link: "https://pl.taurustal.com",
        tags: ["Vue.js", "Bolt.CM", "Three.js"],
      },
      {
        title: "Routes planner",
        description: "web app for planning orders and grouping them into routes",
        link: "https://google.pl",
        tags: ["Vue.js", "Mapbox", "PHP"],
      },
      {
        title: "Curly Weddings",
        description: "website for Polish wedding organizer",
        link: "https://curlyweddings.pl",
        tags: ["Bolt.CM", "logo/layout design"],
      },
      {
        title: "Compensation Claims CRM",
        description: "CRM for managing compensation claims",
        link: "https://google.pl",
        tags: ["Laravel", "PHP", "JS"],
      },
      {
        title: "Accounting ARTAX",
        description: "website for accounting company",
        link: "https://artax.com.pl",
        tags: ["Bolt.CM", "JS"],
      },
      {
        title: "3D reconstruction viewer",
        description: "web app for viewing 3D reconstruction of a building",
        link: "https://google.pl",
        tags: ["React", "Three.js", "JS", "AWS"],
      },
    ],
    // description: (
    //   <>
    //     <p className="mb-2">
    //       Building web applications using Vue.js/React and designing responsive and optimized
    //       websites using Bolt.CM.
    //     </p>
    //     <p className="mb-2">
    //       On the backend, I worked with technologies like ApiPlatform, Laravel, and JWT for creating
    //       fast API for my frontend apps.
    //     </p>
    //     <p className="mb-2 text-white">Featured projects:</p>
    //     <ul className="ml-3 list-inside list-disc space-y-2">
    //       <li>
    //         <a
    //           href="https://pl.taurustal.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Taurustal
    //         </a>{" "}
    //         - ecommerce website for Polish company Taurustal including interactive form with 3D
    //         product preview (WordPress, Vue.js, Three.js)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Routes planner
    //         </a>{" "}
    //         - web app for planning orders and grouping them into routes (Vue.js, Mapbox, PHP)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Curly Weddings
    //         </a>{" "}
    //         - website for Polish wedding organizer (WordPress, logo/layout design)
    //       </li>

    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Compensation Claims CRM
    //         </a>{" "}
    //         - CRM for managing compensation claims (Laravel PHP, JS)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Accounting ARTAX
    //         </a>{" "}
    //         - website for accounting company (WordPress, JS)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           3D reconstruction viewer
    //         </a>{" "}
    //         - web app for viewing 3D reconstruction of a building (React, Three.js, JS, AWS)
    //       </li>
    //     </ul>
    //   </>
    // ),
  },
  {
    title: "Webdeveloper (WordPress, Laravel, JS)",
    time: "2014 - 2017",
    description: (
      <p>
        I developed many company websites/stores and designed layouts. I wrote WordPress plugins and
        custom PHP platforms. I also started building my first SPAs using Angular.js, Grunt/Gulp,
        SCSS, Rollup, and BrowserSync.
      </p>
    ),
    projects: [
      {
        title: "Perfekt-Blach",
        description: "Wordpress based website for Polish company Perfekt-Blach.",
        link: "https://perfekt-blach.pl",
        tags: ["WordPress", "JS"],
      },
      {
        title: "TaxiBus Kraków",
        description:
          "Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków",
        link: "https://perfekt-blach.pl",
        tags: ["WordPress", "jQuery", "SCSS"],
      },
      {
        title: "Suwała Studio Bruku",
        description: "Wordpress based website for Polish company",
        link: "https://perfekt-blach.pl",
        tags: ["WordPress", "jQuery", "SCSS"],
      },
    ],
    // description: (
    //   <>
    //     <p className="mb-2">
    //       I developed many company websites/stores and designed layouts. I wrote WordPress plugins
    //       and custom PHP platforms. I also started building my first SPAs using Angular.js,
    //       Grunt/Gulp, SCSS, Rollup, and BrowserSync.
    //     </p>
    //     <ul className="list-inside list-disc space-y-2">
    //       <p className="mb-2 text-white">Featured projects:</p>
    //       <ul className="ml-3 list-inside list-disc space-y-2">
    //         <li>
    //           <a
    //             href="http://garazeblaszane.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-cyan-500 hover:underline dark:text-cyan-400"
    //           >
    //             Perfekt-Blach
    //           </a>{" "}
    //           - Wordpress based website for Polish company Perfekt-Blach.
    //         </li>
    //         <li>
    //           <a
    //             href="https://taxibuskrakow.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-cyan-500 hover:underline dark:text-cyan-400"
    //           >
    //             TaxiBus Kraków
    //           </a>{" "}
    //           - Multilanguage portal created for Polish Tours and Travels company - TaxiBus Kraków
    //           (jQuery, WordPress, SCSS)
    //         </li>
    //         <li>
    //           <a
    //             href="https://studiobruku.pl/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-cyan-500 hover:underline dark:text-cyan-400"
    //           >
    //             Suwała Studio Bruku
    //           </a>{" "}
    //           - Wordpress based website for Polish company (jQuery, WordPress, SCSS)
    //         </li>
    //       </ul>
    //     </ul>
    //   </>
    // ),
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
    projects: [
      {
        title: "BluePear.pl",
        description: "website for a BluePear company",
        link: "https://bluepear.pl",
        tags: ["Joomla", "jQuery"],
      },
      {
        title: "PDF documents generator",
        description: "web application (CRM) for managing and generating PDF documents",
        link: "https://bluepear.pl",
        tags: ["WordPress", "jQuery"],
      },
      {
        title: "Instytut Piękna - Guinot",
        description: "website for a beauty salon",
        link: "https://bluepear.pl",
        tags: ["WordPress", "jQuery"],
      },
    ],
    // description: (
    //   <>
    //     <p className="mb-2">
    //       As a beginner developer I tried to learn as much as I can by creating websites and
    //       applications. I designed and coded many company websites, implemented JS scripts with
    //       jQuery, and optimized websites for SEO and speed. I also developed and maintained PHP 5
    //       applications.
    //     </p>
    //     {/* <ul className="list-inside list-disc space-y-2">
    //       <li>Designing and coding landing pages with simple interactivy.</li>
    //       <li>Implementing simple JavaScript jQuery scripts.</li>
    //       <li>Optimizing websites to improve SEO and initial speed loading.</li>
    //       <li>Developing and maintaining self-written PHP 5 applications.</li>
    //     </ul> */}
    //     <p className="mb-2 text-white">Featured projects:</p>
    //     <ul className="ml-3 list-inside list-disc space-y-2">
    //       <li>
    //         <a
    //           href="https://bluepear.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           BluePear.pl
    //         </a>{" "}
    //         - website for a BluePear company (Joomla, jQuery)
    //       </li>
    //       <li>
    //         <a
    //           href="https://google.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           PDF documents generator
    //         </a>{" "}
    //         - web application (CRM) for managing and generating PDF documents (PHP, jQuery)
    //       </li>
    //       <li>
    //         <a
    //           href="http://instytutpiekna.krakow.pl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-cyan-500 hover:underline dark:text-cyan-400"
    //         >
    //           Instytut Piękna - Guinot
    //         </a>{" "}
    //         - website for a beauty salon (WordPress, jQuery)
    //       </li>
    //     </ul>
    //   </>
    // ),
  },
]

export const TimeLine = () => {
  // const [isTimelineVisible, setIsTimelineVisible] = useState(true)

  return (
    <ol className="relative mt-10 border-l border-gray-200 dark:border-gray-700">
      {careerSteps.map((step, index) => (
        <li key={index} className="mb-10 ml-6">
          {calendarIcon}
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {step.title}
            {index === 0 && (
              <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                Current
              </span>
            )}
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {step.time}
          </time>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
            <div className="mb-2">{step.description}</div>
            <p className="mb-2 text-white">Featured projects:</p>
            <ul className="ml-3 list-inside list-disc space-y-2">
              {step.projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:underline dark:text-cyan-400"
                  >
                    {project.title}
                  </a>{" "}
                  - {project.description}
                  {/* (
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mr-1 inline-block rounded bg-gray-100 px-2 py-0.5 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
                ) */}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}

"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

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
      <>
        <p className="mb-2">
          Building webapps in TypeScript. Support currently running webapps by adding features and
          updating vendor APIs. Maintaining mobile app written in Expo/TS.
        </p>
        <p className="mb-2">Tools and technologies I use:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Web: Next.js 13, TypeScript, TailwindCSS</li>
          <li>Mobile: Expo</li>
          <li>Design/UI: Figma</li>
          <li>Cms: Sanity.io</li>
          <li>Favourite libs: Zustand, DrizzleORM, Radix ui</li>
        </ul>
      </>
    ),
  },
  {
    title: "Front-End Developer (Next.js, Gatsby, Firebase)",
    time: "2019 - 2022",
    description: (
      <ul className="list-inside list-disc space-y-2">
        <li>
          Developing React.js based Web apps (CRA, Next,js, Gatsby, MaterialUI, AntDesign, Redux -
          RTK)
        </li>
        <li>React Native Mobile Apps (RN, Expo, WebRTC, Stripe, QRCode, UIKitten)</li>
        <li>Firebase (React, AWS)</li>
        <li>NodeJS (Express, Sockets)</li>
        <li>Headless CSM: Sanity, StoryBlok, WordPress API, Strapi</li>
        <li>Other: PHP 7, SCSS, Three.js</li>
      </ul>
    ),
  },
  {
    title: "Front-End Developer (PHP, Vue.js, React, Three.js)",
    time: "2017 - 2019",
    description: (
      <ul className="list-inside list-disc space-y-2">
        <li>
          Building web applications with ES6+ JavaScript: Vue.js/React, Three.js and state managment
          libraries (vuex, redux).
        </li>
        <li>Designing responsive and optimized websites based on Bolt.CM.</li>
        <li>Creating backend solutions with ApiPlatform, Laravel and JWT.</li>
        <li>Integrating websites and apps with with backend REST services.</li>
      </ul>
    ),
  },
  {
    title: "Webdeveloper (WordPress, Laravel, JS)",
    time: "2014 - 2017",
    description: (
      <ul className="list-inside list-disc space-y-2">
        <li>
          Creating company websites custom themes in Wordpress: SPA, shops and portals using
          Grunt/Gulp, SCSS, rollup, BrowserSync.
        </li>
        <li>Developing custom WordPress plugins and integrating in websites.</li>
        <li>Designing logos and RWD layouts.</li>
        <li>Writing JS scripts using ES5, jQuery, AngularJS.</li>
        <li>
          Writing PHP custom applications with Laravel:
          <ul className="mt-2 list-inside list-disc space-y-1 pl-5">
            <li>Cases Managment and PDF documents Generator for Polish Law Firm</li>
            <li>Orders Managment with map markers for Polish Steel Constructions Company</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Beginner Webdeveloper",
    time: "2009 - 2014",
    description: (
      <ul className="list-inside list-disc space-y-2">
        <li>Designing and coding landing pages with simple interactivy.</li>
        <li>Implementing simple JavaScript jQuery scripts.</li>
        <li>Optimizing websites to improve SEO and initial speed loading.</li>
        <li>Developing and maintaining self-written PHP 5 applications.</li>
        <li>Trying and implementing different frontend and backend technologies.</li>
      </ul>
    ),
  },
]

export const TimeLine = () => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false)

  return (
    <>
      <button
        className="mt-4 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] px-8 py-3 text-gray-800 transition duration-200 ease-linear hover:bg-gradient-to-l"
        onClick={() => setIsTimelineVisible((isTimelineVisible) => !isTimelineVisible)}
      >
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isTimelineVisible ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
        {isTimelineVisible ? "Hide" : "Show"} carrer timeline
      </button>
      <AnimatePresence initial={false}>
        {isTimelineVisible && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: Number(isTimelineVisible), y: 0 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
          >
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
                  <div className="font-normal text-gray-500 dark:text-gray-400">
                    {step.description}
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

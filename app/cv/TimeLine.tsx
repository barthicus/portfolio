'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BiHide, BiShow } from 'react-icons/bi'

import { careerSteps } from '../projects'

const calendarIcon = (
  <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
    <svg
      aria-hidden="true"
      className="size-3 text-blue-800 dark:text-blue-300"
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

export const TimeLine = () => {
  const [areProjectsVisible, setAreProjectsVisible] = useState(false)

  return (
    <div className="mt-4 flex flex-col">
      <button
        onClick={() => setAreProjectsVisible(prev => !prev)}
        className="mb-4 inline-flex items-center place-self-center rounded-[35px] bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] px-8 py-3 text-gray-800 transition duration-200 ease-linear hover:bg-gradient-to-l"
      >
        {areProjectsVisible ? <BiHide /> : <BiShow />}
        <span className="ml-2">{areProjectsVisible ? 'Hide' : 'Reveal'} projects</span>
      </button>
      <ol className="relative mt-10 border-l border-gray-200 dark:border-gray-700">
        {careerSteps.map((step, index) => (
          <li key={index} className="mb-8 ml-6">
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
              {step.description}
              <AnimatePresence initial={false}>
                {areProjectsVisible && (
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: Number(areProjectsVisible), y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="mb-2 text-gray-700 dark:text-gray-300">Featured projects:</p>
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
                          </a>{' '}
                          - {project.description}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              {!areProjectsVisible && (
                <p className="mt-3 text-sm text-zinc-300 dark:text-zinc-700">Projects are hidden.</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

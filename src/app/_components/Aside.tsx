"use client"

import { ReactNode } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import clsx from "clsx"

import avatarImg from "../../../public/img/avatar.jpeg"

const SocialIconLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-500 transition-colors duration-300 ease-out hover:bg-gradient-to-l hover:from-red-600 hover:via-red-600 hover:to-pink-500 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white">
        {children}
      </span>
    </a>
  )
}

export const Aside = () => {
  const pathname = usePathname()

  return (
    <aside
      className={clsx("relative mx-auto mb-6 mt-[140px] w-full md:mt-[220px] lg:my-0", {
        "hidden md:block": pathname !== "/",
      })}
    >
      <Image
        alt="Bartosz Podgruszecki avatar"
        src={avatarImg}
        priority
        className="absolute left-[50%] z-10 mx-auto mt-[-140px] h-[240px] w-[240px] translate-x-[-50%] rounded-2xl drop-shadow-xl"
      />
      <div
        className={clsx(
          "relative mx-auto mb-6 mt-[140px] w-full overflow-hidden rounded-2xl bg-white px-6 text-center dark:bg-[#111111] md:mt-[220px] lg:my-0",
          "after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-full after:bg-[linear-gradient(90deg,_#05bf85_0%,_#05bf85_10%,_#159f85_10%,_#159f85_20%,_#15709f_20%,_#15709f_30%,_#15569f_30%,_#15569f_40%,_#152c9f_40%,_#152c9f_50%,_#6038c5_50%,_#6038c5_60%,_#ae4add_60%,_#ae4add_70%,_#dd4a96_70%,_#dd4a96_80%,_#dd4a54_80%,_#dd4a54_90%,_#dd814a_90%,_#dd814a_100%)] after:content-['']",
        )}
      >
        <div className="pb-8 pt-[100px]">
          <p className="mb-1 mt-6 text-2xl font-semibold dark:text-white">Bartosz Podgruszecki</p>
          <p className="mb-4 inline-block rounded-lg px-5 py-1.5 text-[#7B7B7B] dark:bg-[#1D1D1D] dark:text-[#A6A6A6]">
            web developer
          </p>

          <div className="flex justify-center space-x-3">
            <SocialIconLink href="https://github.com/barthicus">
              <svg
                stroke="currentColor"
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/bartosz-podgruszecki">
              <svg
                stroke="currentColor"
                fill="currentColor"
                role="img"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </SocialIconLink>
          </div>
          <div className="mt-7 rounded-2xl bg-[#F3F6F6] p-7 dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E93B81] transition-colors duration-300 ease-out">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                </svg>
              </span>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-gray-500 dark:text-[#A6A6A6]">Work status</p>
                <p className="break-all text-sm dark:text-white">Freelance contractor</p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#6AB5B9] transition-colors duration-300 ease-out">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
              </span>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-gray-500 dark:text-[#A6A6A6]">Location</p>
                <p className="break-all text-sm dark:text-white">Krotoszyn, Poland (Remote)</p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#FD7590] transition-colors duration-300 ease-out">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                </svg>
              </span>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-gray-500 dark:text-[#A6A6A6]">Email</p>
                <p className="break-all dark:text-white">
                  <a
                    className="text-sm transition duration-300 hover:text-[#FA5252]"
                    href="mailto:bartosz.podgruszecki@gmail.com"
                  >
                    bartosz.podgruszecki@mail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex py-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#C17CEB] transition-colors duration-300 ease-out">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </span>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-gray-500 dark:text-[#A6A6A6]">Tech stack</p>
                <p className="break-all text-sm dark:text-white">React, Typescript, Serverless</p>
              </div>
            </div>
          </div>
          <a
            href="/images/cv.pdf"
            download=""
            className="mx-auto mt-6 inline-flex items-center rounded-[35px] bg-gradient-to-r from-[#05dfc6] to-[#29d9f7] px-8 py-3 text-gray-800 transition duration-200 ease-linear hover:bg-gradient-to-l"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5L13 5ZM6.29289 9.70711L11.2929 14.7071L12.7071 13.2929L7.70711 8.29289L6.29289 9.70711ZM12.7071 14.7071L17.7071 9.70711L16.2929 8.29289L11.2929 13.2929L12.7071 14.7071ZM13 14L13 5L11 5L11 14L13 14Z"
                fill="currentColor"
              />
              <path
                d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </aside>
  )
}

# Bartosz Podgruszecki - Portfolio

[![Build Status](https://travis-ci.org/barthicus/portfolio.svg?branch=master)](https://travis-ci.org/barthicus/portfolio)

Hello everyone! I'm Bartosz Podgruszecki and this is my website where I can show my projects and present my current developer skills.

I wanted to create website that could be as fast as possible and also easy to maintain so I chose static generated website combained with headless cms.
My last requirement was to build a final product using React. Having in mind these facts I had 2 choices: Gatsby and Next.js. 

Gatsby was looking pretty nice but I needed framework with a lot of configuration possibilities that isn't forcing developer to anything. This is why I went with Next.js (+ some other smaller libraries). Website the content is fetched from [Storyblok](https://storyblok.com).

I really recommend this stack - it's very convinient during development proccess (all configs ready, HMR, Scss) and also very easy to deploy (generate and uplaod files). I was missing some prettier and eslint hints so I added it and finally whole dev stage is really smooth and fast.

Next.js comes with built-in SSR, so all necessary data are being fetched from CMS API only during generating proccess. After deploy there is no single API request executed during website browsing because every page that user can vitit is just static HTML (and I really believe Google Search Engine like it).

The website layout was designed by me in Adobe XD.

# Stack
* [Next.js](https://nextjs.org)
* PageTransition
* prettier
* Storyblok (Headless CMS)
* Adobe XD

Other packages can be found in current [package.json](https://github.com/barthicus/portfolio/blob/master/package.json) file.

# TODO
* Find a way to generate routes after StoryBlock content change. I know there are webhooks, but this functionality isn't available in "Starter Plan" :disappointed:
* Add Blog section, I always wanted to start writing it and have some tech posts ideas, but I'm not sure it's good idea yet.
* Add polish language and language switcher

# Contact

I can be found here:
* Email: bartosz.podgruszecki@gmail.com
* Portfolio: [https://barthicus.github.io](https://barthicus.github.io)
* Github: [github.com/barthicus](https://github.com/barthicus)
* [LinkedIn](https://www.linkedin.com/in/bartosz-podgruszecki)
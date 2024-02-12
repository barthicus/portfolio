import puppeteer from 'puppeteer'

import { projects } from '@/data/projects'

export const GET = async (request: Request) => {
  // Create a browser instance
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'] // required for Vercel: https://github.com/puppeteer/puppeteer/issues/3698#issuecomment-504648941
  })

  // Create a new page
  const page = await browser.newPage()

  // Prepare HTML content
  let html = `<style>.mystyle{color: red;}</style>`
  html += `<div>`
  html += `<h1 class="mystyle">Hello World 23</h1>`
  html += '<p>Projects: ' + projects.map(project => project.title).join(', ') + '</p>'
  html += `</div>`

  await page.setContent(html, { waitUntil: 'domcontentloaded' })

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen')

  // Download the PDF
  const pdf = await page.pdf({
    // path: "result.pdf", // this will save to file to disk
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4'
  })

  // Set the content type to application/pdf
  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')

  // Close the browser instance
  await browser.close()

  // Return the PDF file
  return new Response(pdf, { headers })
}

import { MetadataRoute } from 'next'

const VERCEL_URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
const LOCAL_URL = 'http://localhost:3000'
const HOST_URL = process.env.NODE_ENV === 'development' ? LOCAL_URL : VERCEL_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: HOST_URL,
    lastModified: new Date().toString()
  }

  const allProjects = {
    url: `${HOST_URL}/all-projects/grid`,
    lastModified: new Date().toString()
  }

  const cvPdf = {
    url: `${HOST_URL}/cv-pdf`,
    lastModified: new Date().toString()
  }

  return [home, allProjects, cvPdf]
}

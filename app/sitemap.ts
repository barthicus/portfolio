import { MetadataRoute } from 'next'

const VERCEL_URL = `https://bpodgruszecki.vercel.app`
const LOCAL_URL = 'http://localhost:3000'
const HOST_URL = process.env.NODE_ENV === 'development' ? LOCAL_URL : VERCEL_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: HOST_URL,
    lastModified: new Date()
  }

  const allProjects = {
    url: `${HOST_URL}/all-projects/grid`,
    lastModified: new Date()
  }

  const cvPdf = {
    url: `${HOST_URL}/cv-pdf`,
    lastModified: new Date()
  }

  return [home, allProjects, cvPdf]
}

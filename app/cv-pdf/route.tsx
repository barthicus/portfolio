import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'

import { getCVContent } from './getCVContent'

export const GET = async (request: Request) => {
  const shouldDownload = request.headers.get('download') === 'true'

  const cvContent = getCVContent()

  const buffer = await renderToBuffer(cvContent)

  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')

  if (shouldDownload) {
    headers.set('Content-Disposition', `attachment; filename="Bartosz_Podgruszecki_CV.pdf"`)
  }

  return new NextResponse(buffer, { headers })
}

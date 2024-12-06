import {NextResponse} from 'next/server'
import {render} from '@react-email/render'
import Email from '../../emails/MorningBrief'

export async function POST(request) {
  const data = await request.json()
  console.log(data, data.reportName)
  const html = await render(<Email reportName={data.reportName} />)
  const response = new NextResponse(html)
  response.headers.set('Content-Type', 'text/html; charset=utf-8')
  return response
}

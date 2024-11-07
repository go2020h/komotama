// app/api/submitForm/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  if (!process.env.WEBHOOK_URL) {
    return NextResponse.json({ success: false, error: 'Webhook URL is not configured' }, { status: 500 })
  }

  try {
    const data = await request.json()
    console.log('Received form data:', data) // デバッグログ

    if (!data || !data.name || !data.email) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const webhookUrl = process.env.WEBHOOK_URL

    const message = {
      embeds: [
        {
          fields: [
            {
              name: data.name,
              email: data.email
            }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    }

    //console.log('Sending webhook message:', message) // デバッグログ

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })

    if (!response.ok) {
      console.error('Discord webhook error:', await response.text())
      throw new Error('Discord webhook failed')
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    })
  } catch (error) {
    console.error('Error in submitForm:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: error.message
      },
      { status: 500 }
    )
  }
}

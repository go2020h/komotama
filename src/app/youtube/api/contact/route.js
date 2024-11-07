import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()

    const webhookResponse = await fetch(process.env.WEBHOOK_y_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: `
新規お問い合わせ
お名前: ${data.firstName} ${data.lastName}
電話番号: ${data.phone}
メールアドレス: ${data.email}
ご相談内容: ${data.content}
        `.trim()
      })
    })

    if (!webhookResponse.ok) {
      throw new Error('Webhook送信に失敗しました')
    }

    return NextResponse.json({ message: '送信が完了しました' })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 })
  }
}

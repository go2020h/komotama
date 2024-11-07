'use client'
import React from 'react'

function MainComponent() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">プライバシーポリシー</h1>

        <div className="prose max-w-none">
          <p className="mb-8">
            当ウェブサイト（以下「本サイト」といいます）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、ユーザーの個人情報の収集、利用、および保護について説明するものです。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. 収集する情報</h2>
          <p>本サイトでは、以下の個人情報を収集します。</p>
          <ul className="list-disc pl-6 mb-8">
            <li>名前</li>
            <li>メールアドレス</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. 情報の収集方法</h2>
          <p className="mb-8">本サイトは、ユーザーがフォームに入力する際に、名前およびメールアドレスを収集します。</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. 情報の利用目的</h2>
          <p>収集した個人情報は、以下の目的で利用します。</p>
          <ul className="list-disc pl-6 mb-8">
            <li>ユーザーへのサービス提供</li>
            <li>問い合わせへの対応</li>
            <li>サイト運営上の通知</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. 情報の共有および提供</h2>
          <p>本サイトは、以下の場合を除き、ユーザーの個人情報を第三者に開示しません。</p>
          <ul className="list-disc pl-6 mb-8">
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づき開示が必要な場合</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. 情報の保護</h2>
          <p className="mb-8">
            本サイトは、ユーザーの個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、および漏洩から保護するための合理的な対策を講じます。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">6. クッキーの使用</h2>
          <p className="mb-8">
            本サイトは、ユーザーの利便性向上およびサイトの運営・改善のためにクッキーを使用することがあります。クッキーは、ユーザーのブラウザ設定により拒否することができますが、クッキーを拒否した場合、一部のサービスが利用できなくなることがあります。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">7. 解析ツールの使用</h2>
          <p className="mb-8">
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">8. プライバシーポリシーの変更</h2>
          <p className="mb-8">
            本プライバシーポリシーは、予告なく変更することがあります。変更後のプライバシーポリシーは、本サイトに掲載した時点から効力を生じます。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">9. お問い合わせ</h2>
          <p className="mb-4">本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-bold mb-2">[お問い合わせ先情報]</p>
            <p>住所：東京都新宿区西新宿1丁目26番2号新宿野村ビル32階</p>
            <p>社名：株式会社HIDANE</p>
            <p>Eメールアドレス：info@hiddane.org</p>
          </div>

          <p className="mt-8 text-right text-gray-600">2024年6月7日改定</p>
        </div>
      </div>
    </div>
  )
}

export default MainComponent

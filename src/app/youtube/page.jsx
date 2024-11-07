'use client'
import React from 'react'
import { useState } from 'react'

function MainComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  return (
    <div className="font-sans bg-[#181e3a] text-white">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.6.0/css/all.css"></link>

      <main>
        <section
          id="top"
          className="h-[66vh] flex items-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('/youtube/top.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-white">YouTubeチャンネルの価値、本当にわかっていますか？</h1>
            <p className="text-xl mb-8 text-white">
              あなたの努力の結晶、正当に評価され、確実に引き継がれる方法があります
            </p>
            <a
              href="#contact"
              className="bg-yellow-400 text-[#1e2a5a] font-bold py-2 px-6 rounded-full hover:bg-yellow-300 inline-block"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              無料で相談してみる
            </a>
          </div>
        </section>

        <section className="py-10 bg-[#f0f0f0] text-[#1e2a5a] shadow-md p-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-lg font-bold mb-2">日々YouTubeを運営していらっしゃるあなたへ</h2>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-center text-2xl font-bold mb-6">こんなお悩みありませんか？</h3>
            <div className="space-y-4">
              <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                <i className="fas fa-check-circle text-blue-600 text-2xl mr-4"></i>
                <p>チャンネルを売却したいけど、どうすればいいかわからない...</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                <i className="fas fa-check-circle text-blue-600 text-2xl mr-4"></i>
                <p>アカウントの引き継ぎって、本当に安全にできるの？</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                <i className="fas fa-check-circle text-blue-600 text-2xl mr-4"></i>
                <p>自分のチャンネルの価値がわからない...</p>
              </div>
              <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                <i className="fas fa-check-circle text-blue-600 text-2xl mr-4"></i>
                <p>買収後、視聴者が離れていってしまうのでは？</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e3ecf5] py-12 mb-10 rounded-lg shadow-lg w-11/12 sm:max-w-4xl mx-auto">
          <div className="px-4 md:px-8">
            <h2 className="text-center text-3xl font-bold flex flex-col items-center justify-center h-full">
              <span className="text-[#2563eb] block mb-2">YouTube案件特化型M&A専門家が、</span>
              <span className="text-[#2563eb] block mt-2">あなたの悩みをすべて解決します！</span>
            </h2>
          </div>
        </section>

        <section id="advisor" className="py-10 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1e2a5a]">サービスの特徴</h2>
            <div className="bg-white p-6 rounded shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-[#1e2a5a]">IT業界に特化した専門的なアドバイス</h3>
              <ul className="list-disc list-inside text-[#1e2a5a]">
                <li>YouTube特化だからこそわかる、適正な評価と価格設定</li>
                <li>安全確実なアカウント引き継ぎのサポート</li>
                <li>買収後の視聴者維持戦略の提案</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-noto-sans-jp mb-8 text-center">なぜ専門家が必要なのか？</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start mb-4">
                  <i className="fas fa-exclamation-triangle text-2xl text-red-500 mr-4 mt-1"></i>
                  <h3 className="text-xl font-bold font-noto-sans-jp text-black">アマチュア的な売却による価値の損失</h3>
                </div>
                <p className="text-gray-700 font-noto-sans-jp leading-relaxed">
                  YouTubeチャンネルの価値は、単なる登録者数や再生回数だけでは測れません。専門知識のない売却では、ブランド価値や将来性といった重要な要素を見落とし、本来の価値よりも大幅に低い金額で手放してしまうリスクがあります。実際に、適切な評価なしでの売却により、潜在的な価値の50%以上を損失したケースも少なくありません。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start mb-4">
                  <i className="fas fa-shield-alt text-2xl text-red-500 mr-4 mt-1"></i>
                  <h3 className="text-xl font-bold font-noto-sans-jp text-black">
                    不適切な引き継ぎによるアカウントの喪失リスク
                  </h3>
                </div>
                <p className="text-gray-700 font-noto-sans-jp leading-relaxed">
                  YouTubeチャンネルの引き継ぎには、アカウント情報の移管から視聴者とのコミュニケーション方法まで、細心の注意を要する多くのステップが存在します。専門家のサポートなしでは、アカウントの凍結や停止、さらには完全な喪失といった深刻なリスクに直面する可能性があります。特に収益化されているチャンネルの場合、一つのミスが取り返しのつかない損失につながることもあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-[#f0f0f0]">
          <div className="bg-transparent text-white pt-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-noto font-bold mb-6 text-[#1e2a5a]">圧倒的な成果を実現</h1>
              <p className="text-xl text-[#1e2a5a]/80 mb-8">数々の成功実績が証明する確かな実力</p>
              <p className="text-2xl md:text-3xl text-[#1e2a5a]/90 font-noto font-bold">YouTube M&A実績</p>{' '}
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1e293b] rounded-2xl shadow-xl p-8 border border-[#334155]">
                <div className="text-center mb-8">
                  <span className="inline-block bg-[#3b82f6] text-white text-sm font-bold px-6 py-2 rounded-full mb-6 shadow-lg">
                    事例 1
                  </span>
                  <h2 className="text-2xl font-noto font-bold text-white mb-6">ニュース系チャンネル</h2>
                  <div className="bg-[#3b82f6] p-6 rounded-xl shadow-lg">
                    <p className="text-white text-xl font-bold">収益額50倍を達成</p>
                    <p className="text-white/80 text-sm mt-2">達成期間：1ヶ月</p>
                  </div>
                </div>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">サムネイルワードの精度向上</span>
                      <span className="text-sm text-white/80 block mt-1">
                        ・動画の結末を端的にインパクトをもって訴求
                      </span>
                      <span className="text-sm text-white/80 block">・視聴者ニーズを刺激するワードで再生数上昇</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">投稿頻度の担保</span>
                      <span className="text-sm text-white/80 block mt-1">・外注体制のサポート体制構築</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <span className="ml-3">動画企画のチェック体制確立</span>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <span className="ml-3">参考チャンネルの分析と提案</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e293b] rounded-2xl shadow-xl p-8 border border-[#334155]">
                <div className="text-center mb-8">
                  <span className="inline-block bg-[#3b82f6] text-white text-sm font-bold px-6 py-2 rounded-full mb-6 shadow-lg">
                    事例 2
                  </span>
                  <h2 className="text-2xl font-noto font-bold text-white mb-6">雑学エンタメ系チャンネル</h2>
                  <div className="bg-[#3b82f6] p-6 rounded-xl shadow-lg">
                    <p className="text-white text-xl font-bold">収益額＋120万円を達成</p>
                    <p className="text-white/80 text-sm mt-2">達成期間：2ヶ月</p>
                  </div>
                </div>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <span className="ml-3">ターゲット視聴者の多いジャンルへ路線変更し、長尺動画を80%削減</span>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">サムネイル改善でクリック率向上</span>
                      <span className="text-sm text-white/80 block mt-1">3.8%から11.7%まで上昇</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">新規企画の戦略的導入</span>
                      <span className="text-sm text-white/80 block mt-1">8万再生を突破する動画を実現</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">制作コストの削減</span>
                      <span className="text-sm text-white/80 block mt-1">1本あたり2,000〜3,000円削減</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e293b] rounded-2xl shadow-xl p-8 border border-[#334155]">
                <div className="text-center mb-8">
                  <span className="inline-block bg-[#3b82f6] text-white text-sm font-bold px-6 py-2 rounded-full mb-6 shadow-lg">
                    事例 3
                  </span>
                  <h2 className="text-2xl font-noto font-bold text-white mb-6">海外系チャンネル</h2>
                  <div className="bg-[#3b82f6] p-6 rounded-xl shadow-lg">
                    <p className="text-white text-xl font-bold">収益額120万円/月を達成</p>
                    <p className="text-white/80 text-sm mt-2">達成期間：3ヶ月</p>
                  </div>
                </div>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">動画尺の最適化</span>
                      <span className="text-sm text-white/80 block mt-1">20分動画と50分の総集編を組み合わせ</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <span className="ml-3">サムネイル改善でクリック率向上</span>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <span className="ml-3">企画構成の最適化で視聴者の興味を引く内容に</span>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <span className="ml-3">他ジャンルの成功事例を分析・導入</span>
                  </li>
                  <li className="flex items-start bg-white/5 p-4 rounded-lg">
                    <i className="fas fa-check text-[#60a5fa] mt-1"></i>
                    <div className="ml-3">
                      <span className="font-bold block">ChatGPTで効率化</span>
                      <span className="text-sm text-white/80 block mt-1">制作コストを3-4,000円に抑制</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-[#1e2a5a] mb-12">5つのステップで確実な成果へ</h2>

            <div className="bg-[#f2f9ff] p-8 rounded-lg shadow-sm">
              <div className="relative">
                {/* 縦線 */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[#1e2a5a] transform -translate-x-1/2"></div>

                {/* Step 1 */}
                <div className="relative flex items-center mb-16">
                  <div className="hidden md:block w-1/2 pr-8">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 1: 無料相談・評価</h3>
                      <p className="text-gray-600 text-left">
                        まずは無料でお気軽にご相談いただけます。
                        <br />
                        ご相談の際に、売上、経費、利益の推移をお持ちいただければ、簡易的な売却額の評価も可能です。
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1e2a5a] rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>

                  <div className="md:hidden ml-12">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 1: 無料相談・評価</h3>
                      <p className="text-gray-600 text-left">
                        まずは無料でお気軽にご相談いただけます。
                        <br />
                        ご相談の際に、売上、経費、利益の推移をお持ちいただければ、簡易的な売却額の評価も可能です。
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2 pl-8">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="/youtube/start1.jpg"
                        alt="Step 1: 無料相談・評価"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center mb-16">
                  <div className="hidden md:block w-1/2 pr-8">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="/youtube/start2.jpg"
                        alt="Step 2: 買い手とのマッチング"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1e2a5a] rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>

                  <div className="md:w-1/2 ml-12 md:pl-8">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 2: 買い手とのマッチング</h3>
                      <p className="text-gray-600 text-left">
                        お伺いしたご条件に基づき買い手様との交渉を行います。
                        <br />
                        ご要望に応じて、直接買い手様とお会いしない状態でのお取引も可能ですのでお気軽にご相談下さい。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center mb-16">
                  <div className="hidden md:block w-1/2 pr-8">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 3: 交渉と契約サポート</h3>
                      <p className="text-gray-600 text-left">
                        買い手様とのお話し合いがまとまりましたら契約締結いたします。
                        <br />
                        私達がしっかりサポートいたしますので、専門知識は必要ございません。
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1e2a5a] rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>

                  <div className="md:hidden ml-12">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 3: 交渉と契約サポート</h3>
                      <p className="text-gray-600 text-left">
                        買い手様とのお話し合いがまとまりましたら契約締結いたします。
                        <br />
                        私達がしっかりサポートいたしますので、専門知識は必要ございません。
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2 pl-8">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="/youtube/start3.jpg"
                        alt="Step 3: 交渉と契約サポート"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center mb-16">
                  <div className="hidden md:block w-1/2 pr-8">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="/youtube/start4.jpg"
                        alt="Step 4: 安全な引き継ぎの実施"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1e2a5a] rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold z-10">
                    4
                  </div>

                  <div className="md:w-1/2 ml-12 md:pl-8">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 4: 安全な引き継ぎの実施</h3>
                      <p className="text-gray-600 text-left">
                        契約締結後、対象となるチャンネルの引き渡しや代金の支払いを行います。
                        <br />
                        トラブルになりやすいポイントですので慎重に執り行います。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-center mb-16">
                  <div className="hidden md:block w-1/2 pr-8">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 5: アフターフォロー</h3>
                      <p className="text-gray-600 text-left">
                        引き渡した後、苦情が発生しないようにしっかりと引き継ぎを行います。
                        <br />
                        売り手様、買い手様それぞれの疑問や思いに寄り添いながら取引を完了させます。
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1e2a5a] rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold z-10">
                    5
                  </div>

                  <div className="md:hidden ml-12">
                    <div className="bg-[#f0f0f0] p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#1e2a5a] mb-2 text-left">Step 5: アフターフォロー</h3>
                      <p className="text-gray-600 text-left">
                        引き渡した後、苦情が発生しないようにしっかりと引き継ぎを行います。
                        <br />
                        売り手様、買い手様それぞれの疑問や思いに寄り添いながら取引を完了させます。
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2 pl-8">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="/youtube/start5.jpg"
                        alt="Step 5: アフターフォロー"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10 px-6 bg-[#f0f0f0] text-[#1e2a5a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              ご検討の方は
              <br />
              まずは無料相談をご利用ください
            </h2>
            <form
              className="bg-white p-6 rounded shadow"
              onSubmit={async (e) => {
                e.preventDefault()
                setIsSubmitting(true)
                setStatus(null)

                const formData = new FormData(e.target)

                const data = {
                  firstName: formData.get('firstName'),
                  lastName: formData.get('lastName'),
                  phone: formData.get('phone'),
                  email: formData.get('email'),
                  content: formData.get('content')
                }

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  })

                  const result = await response.json()

                  if (response.ok) {
                    setStatus('success')
                    e.target.reset()
                  } else {
                    throw new Error(result.error || '送信に失敗しました')
                  }
                } catch (error) {
                  console.error('Error:', error)
                  setStatus('error')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2">お名前</label>
                  <input type="text" name="firstName" className="w-full border p-2" placeholder="姓" required />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2">&nbsp;</label>
                  <input type="text" name="lastName" className="w-full border p-2" placeholder="名" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">電話番号</label>
                <input type="tel" name="phone" className="w-full border p-2" placeholder="000-000-0000" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">メールアドレス</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border p-2"
                  placeholder="連絡用のメールアドレス"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">ご相談内容</label>
                <textarea
                  name="content"
                  rows="4"
                  className="w-full border p-2"
                  placeholder="弊社の事業内容や課題をお聞かせください。マッチする買手企業をご紹介いたします。"
                  required
                ></textarea>
              </div>
              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-2 px-4 rounded transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : status === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-[#1e2a5a] hover:bg-[#2a3a6a]'
                  } text-white`}
                >
                  {isSubmitting
                    ? '送信中...'
                    : status === 'success'
                    ? '送信完了'
                    : status === 'error'
                    ? '送信失敗'
                    : '入力内容を送信する'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-center">送信が完了しました。担当者より連絡させていただきます。</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">送信に失敗しました。時間をおいて再度お試しください。</p>
                )}
              </div>
            </form>
          </div>
        </section>

        <section className="bg-[#f2f9ff] py-10 px-4 md:px-8 shadow-lg">
          <h2 className="text-[#00529b] text-center text-3xl font-bold mb-12">よくある質問</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'M&Aって大企業だけのものでは？',
                answer: 'YouTubeチャンネルのM&Aは、個人クリエイターでも活用できる強力な戦略です。'
              },
              {
                question: '引き継ぎ後、視聴者が離れてしまわないか心配です。',
                answer: '私たちの専門家が、スムーズな移行と視聴者維持のための戦略を提案します。'
              },
              {
                question: '自分のチャンネルに価値があるかわかりません。',
                answer: '登録者数だけでなく、エンゲージメント率や成長性など、多角的な評価を行います。'
              }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="bg-[#00529b] text-white p-4 font-bold rounded-t-lg text-lg">Q. {item.question}</div>
                <div className="bg-white p-4 border border-[#ddd] rounded-b-lg text-black">A. {item.answer}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="strengths" className="py-10 px-6 bg-white text-[#1e2a5a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">顧問の玉手箱が選ばれる理由</h2>
            <h3 className="text-xl font-bold mb-6">なぜ、YouTubeチャンネルを伸ばせるのか？</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#f0f0f0] p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/youtube/reason.jpg"
                  alt="確実な売却先の確保を示す画像"
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-bold mb-2">自社グループの確かな制作力で、チャンネル成長を加速</h3>
                <p className="text-gray-700 leading-relaxed">
                  私たちは自社グループ内に、動画制作からチャンネル運用まで一貫して行える専門チームを持っています。サムネイル制作、企画立案、編集など、チャンネル成長に必要なノウハウをすべて社内に備えているからこそ、買収後のチャンネルでも確実な成長と収益アップをお約束できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e3a8a] text-white py-16 px-4 md:px-8 shadow-lg">
          <h2 className="text-center text-4xl font-bold mb-8">あなたのチャンネルの可能性を発見しましょう！</h2>
          <p className="text-center text-xl mb-8">
            あなたのYouTubeチャンネルの真の価値を知りたくありませんか？
            <br />
            今すぐ無料相談・評価をお申し込みください！
          </p>
          <div className="text-center">
            <a
              href="#contact"
              className="bg-[#fbbf24] text-black font-bold py-3 px-8 rounded-full text-xl hover:bg-[#f59e0b] transition duration-300 inline-flex items-center"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              無料で相談してみる
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 bg-[#1e2a5a] text-center">
        <p>&copy; 2024 顧問の玉手箱 All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MainComponent

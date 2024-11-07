'use client'
import React, { useState, createContext, useContext } from 'react'

// モーダルのコンテキスト
const ModalContext = createContext()

// モーダルのプロバイダーコンポーネント
export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ModalContext.Provider>
  )
}

// モーダルを開くためのカスタムフック
export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

// モーダルコンポーネント
const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    privacy: false
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = '名前は必須です'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }
    if (!formData.privacy) {
      newErrors.privacy = 'プライバシーポリシーへの同意は必須です'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('送信中...')

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          privacy: formData.privacy
        })
      })

      if (!response.ok) {
        throw new Error('送信に失敗しました')
      }

      setSubmitStatus('送信完了')

      window.open(process.env.DISCORD_URL, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error:', error)
      setErrors({ submit: '送信に失敗しました。もう一度お試しください。' })
      setSubmitStatus('')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-center mb-6">
          顧問の玉手箱
          <br />
          登録フォーム
        </h2>

        <p className="text-sm mb-6">
          下記フォームから、メールアドレスを入力して送信してください。
          <br />
          入力したメールアドレスにDiscordチャンネルへの招待リンクが送られます。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              placeholder="顧問 太郎"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              placeholder="komotarou@mail.com"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className={`mr-2 ${errors.privacy ? 'border-red-500' : ''}`}
              required
            />
            <label htmlFor="privacy" className="text-sm">
              <a
                href="/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 hover:underline"
              >
                プライバシーポリシー
              </a>
              に同意する <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy}</p>}

          {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 disabled:bg-gray-400"
          >
            {isSubmitting ? '送信中...' : submitStatus === '送信完了' ? '送信完了' : '送信'}
          </button>

          {submitStatus === '送信完了' && (
            <div className="text-green-600 text-sm text-center mt-2">
              <p>登録ありがとうございます。</p>
              <p>新規タブでDiscordのリンクを開きました。</p>
            </div>
          )}
        </form>

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>
    </div>
  )
}

function MainComponent() {
  const { setIsModalOpen } = useModal()

  return (
    <div className="font-sans bg-white text-gray-800">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.6.0/css/all.css"></link>

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/01.png"
          alt="コンサルタントの世界を表す背景画像"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10">
          <div className="h-full flex items-center justify-center px-10 sm:px-10 md:px-20">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
              <div className="text-white text-center md:text-left mb-8 md:mb-0 md:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  独立のためのスキルと仲間に出会える場所
                  <br className="hidden sm:inline" />
                  "顧問の玉手箱"
                </h1>
                <p className="text-sm sm:text-base md:text-lg mb-6">
                  顧問の玉手箱は、更に上を目指したいトップコンサルタントや、自分の強みを活かして独立したいチャレンジャーのためのコミュニティです。
                  <br className="hidden sm:inline" />
                  共に案件に取り組む仲間や、案件受注のノウハウを発見しましょう！
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-[#fb923c] text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full text-sm sm:text-base md:text-lg"
                >
                  今すぐ無料で参加する
                </button>
              </div>
              <div className="md:w-1/2 flex flex-col items-center px-8 md:px-10 md:self-end">
                <div className="relative w-full max-w-md">
                  <div className="bg-[#083686] rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white block">収入UP率</span>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-yellow-400">165</span>
                        <span className="text-4xl font-bold text-yellow-400">%</span>
                        <span className="text-3xl font-semibold text-white ml-2">～</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white mt-2">
                    ※顧問の玉手箱に掲載されている平均案件単価124万円/月×12ヶ月＝1,488万円とマネージャーレベルコンサルタントの平均年収900万円を比較
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mb-10 mt-10 px-12 md:px-24 lg:px-36">
        <h2 className="text-lg md:text-xl mb-6 font-bold">独立を目指すコンサルタントの方へ</h2>
        <h3 className="text-2xl md:text-3xl mb-8">
          <span className="text-[#2563eb] font-bold">こんなお悩みありませんか？</span>
        </h3>
        <div className="bg-[url('/04.png')] bg-cover bg-center p-2 sm:p-4 md:p-8 rounded-lg">
          <div className="p-2 sm:p-4 md:p-6 rounded-lg">
            <ul className="text-left w-full md:w-[80%] lg:w-[60%] mx-auto space-y-3">
              <li className="flex items-start sm:items-center mb-2 sm:mb-4 text-sm sm:text-base md:text-lg p-2 sm:p-3 rounded-md shadow bg-blue-50 font-bold">
                <i className="fas fa-check text-[#2563eb] mr-2 sm:mr-3 mt-1 sm:mt-0"></i>
                <span className="leading-tight sm:leading-normal">
                  会社での<span className="text-[#2563eb]">評価や報酬に不満</span>
                  を感じている
                </span>
              </li>
              <li className="flex items-start sm:items-center mb-2 sm:mb-4 text-sm sm:text-base md:text-lg p-2 sm:p-3 rounded-md shadow bg-blue-50 font-bold">
                <i className="fas fa-check text-[#2563eb] mr-2 sm:mr-3 mt-1 sm:mt-0"></i>
                <span className="leading-tight sm:leading-normal">
                  背中を預けたい<span className="text-[#2563eb]">仲間がいない</span>
                </span>
              </li>
              <li className="flex items-start sm:items-center mb-2 sm:mb-4 text-sm sm:text-base md:text-lg p-2 sm:p-3 rounded-md shadow bg-blue-50 font-bold">
                <i className="fas fa-check text-[#2563eb] mr-2 sm:mr-3 mt-1 sm:mt-0"></i>
                <span className="leading-tight sm:leading-normal">
                  独立に向けた<span className="text-[#2563eb]">案件獲得のノウハウ</span>
                  やスキルがわからない
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eff6ff] py-16 px-4 md:px-8 ">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
          私たちのコミュニティは、あなたの
          <br className="hidden md:inline" />
          <span className="text-[#f97316]">実力を正当に評価しそれに見合った報酬を得るチャンス</span>
          <br className="hidden md:inline" />
          を提供します。
        </h2>
        <p className="text-center text-lg md:text-xl font-bold">
          ここでは、あなたの功績が直接報酬に反映され、
          <br className="hidden md:inline" />
          好きな仲間と一緒にやりがいのある案件に挑戦できます。
        </p>
        <p className="text-center text-[#f97316] text-lg md:text-xl font-bold mb-8">
          1人でも仲間とでもOK、Sランクコンサル案件（M&A案件）の攻略コミュニティへようこそ！
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-0.5 bg-black"></div>
          <h3 className="text-center text-2xl md:text-3xl font-bold">案件事例</h3>
          <div className="w-16 h-0.5 bg-black"></div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-[1024px] mx-auto mb-12">
          <div className="relative w-full pb-[56.25%] overflow-hidden">
            {(() => {
              const [currentSlide, setCurrentSlide] = React.useState(0)
              const images = [
                {
                  src: '/slide1.jpg',
                  alt: 'Business meeting with team members collaborating',
                  line1: '開発・保守チーム増員',
                  line2: '60万円/月',
                  line3: '大手クライアントのバックオフィス支援で開発および保守を行うチームでメンバーの増員を募集'
                },
                {
                  src: '/slide2.jpg',
                  alt: 'Product showcase highlighting key features',
                  line1: 'モバイルアプリ開発支援',
                  line2: '90万円/月',
                  line3: 'モバイルアプリの作成を進めており、プロダクト企画およびアプリ開発で人員を募集'
                },
                {
                  src: '/slide3.jpg',
                  alt: 'Customer testimonial and success story',
                  line1: 'アジャイル開発におけるバイリンガルPM',
                  line2: '115万円/月',
                  line3: '管理システムのパッケージ開発において海外ベンダーとのブリッジPMOを募集'
                },
                {
                  src: '/slide4.jpg',
                  alt: 'Team of professionals working in modern office',
                  line1: '大規模システム更新PM',
                  line2: '170万円/月',
                  line3: '大手製造業の大規模なシステム更新があり、役員直下でPMとして推進していける人材を募集'
                },
                {
                  src: '/slide5.jpg',
                  alt: 'Project delivery and client satisfaction',
                  line1: 'AI投資事業におけるバイリンガルPM',
                  line2: '210万円/月',
                  line3: 'AI投資事業におけるデジタル部門責任者のサポートを行えるPMを募集'
                }
              ]

              React.useEffect(() => {
                const timer = setInterval(() => {
                  setCurrentSlide((prev) => (prev + 1) % images.length)
                }, 5000)
                return () => clearInterval(timer)
              }, [])

              return (
                <>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img src={image.src} alt={image.alt} className="absolute w-full h-full object-cover" />
                      <div className="absolute bottom-12 left-0 w-full text-center text-white bg-black/50 py-4">
                        <p className="text-xl font-bold mb-1">{image.line1}</p>
                        <p className="text-lg font-bold mb-1">{image.line2}</p>
                        <p className="text-base">{image.line3}</p>
                      </div>
                    </div>
                  ))}

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )
            })()}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-0.5 bg-black self-center"></div>
          <h3 className="text-center text-2xl md:text-3xl font-bold">
            私たちのコミュニティが提供する
            <br className="hidden md:inline" />
            <span className="text-orange-500">5つの価値</span>
          </h3>
          <div className="w-16 h-0.5 bg-black self-center"></div>
        </div>

        <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col md:flex-row items-center">
            <img
              src="/value-01.png"
              alt="Value 01 を表す画像"
              className="w-full md:w-72 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-4 text-center md:text-left">
                <span className="text-[#2563eb] block mb-2">Value 01</span>
                個人でもチームでも無料で案件に挑戦できる
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  例えば0.5人月、0.3人月同士で<span className="text-[#f97316] font-bold">空いたリソースを効率的</span>
                  に活用
                </li>
                <li>
                  チームで<span className="text-[#f97316] font-bold">協力し合い大きな案件に挑戦</span>できる環境
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col md:flex-row items-center">
            <img
              src="/value-02.png"
              alt="Value 02 を表す画像"
              className="w-full md:w-72 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-4 text-center md:text-left">
                <span className="text-[#2563eb] block mb-2">Value 02</span>
                独立に必要なスキルの習得と最新情報の収集が可能
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  業界の<span className="text-[#f97316] font-bold">最新トレンドや高単価案件情報を共有</span>
                  しキャリアアップを支援
                </li>
                <li>
                  <span className="text-[#f97316] font-bold">独立後のサポート体制</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col md:flex-row items-center">
            <img
              src="/value-03.png"
              alt="Value 03 を表す画像"
              className="w-full md:w-72 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-4 text-center md:text-left">
                <span className="text-[#2563eb] block mb-2">Value 03</span>
                信頼できる開発・デザイン案件の外注先が見つかる
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  既にコミュニティメンバーとの<span className="text-[#f97316] font-bold">協働実績のある外注先</span>
                  を利用可能
                </li>
                <li>
                  他のメンバーから<span className="text-[#f97316] font-bold">外注先のレビュー</span>を聞くことが可能
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col md:flex-row items-center">
            <img
              src="/value-04.png"
              alt="Value 04 を表す画像"
              className="w-full md:w-72 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-4 text-center md:text-left">
                <span className="text-[#2563eb] block mb-2">Value 04</span>
                自身に来たコンサル案件を登録できる
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  自身に依頼された<span className="text-[#f97316] font-bold">案件を登録し協業者や、委託先を探す</span>
                  ことが可能
                </li>
                <li>
                  自身の手に余りそうな案件でも<span className="text-[#f97316] font-bold">仲間と一緒に挑戦可能</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col md:flex-row items-center">
            <img
              src="/value-05.png"
              alt="Value 05 を表す画像"
              className="w-full md:w-72 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-4 text-center md:text-left">
                <span className="text-[#2563eb] block mb-2">Value 05</span>
                高単価・長期案件のバイアウト案件を獲得するチャンス
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  Sランク案件の受注により<span className="text-[#f97316] font-bold">これまで以上の報酬</span>
                  を手にするチャンスがある
                </li>
                <li>
                  <span className="text-[#f97316] font-bold">売先が確保されている</span>
                  ため、バイアウトの段階で行き詰まることがない
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white text-center py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-[url('/05.png')] bg-cover bg-center opacity-80"></div>
        <div className="relative z-10">
          <p className="text-lg md:text-xl font-bold mb-6">
            同じ志を持つ仲間たちと自由に交流し、情報交換や助け合いができる環境が整っています。
          </p>
          <p className="text-[#fb923c] font-semibold text-xl md:text-2xl mb-6">
            あなたの実力を存分に発揮し、正当な評価と報酬を手にするチャンスがここにあります。
          </p>
          <p className="text-[#fb923c] font-semibold text-xl md:text-2xl mb-6">
            私たちのコミュニティで、新たなキャリアの扉を開きませんか？
          </p>
          <p className="text-xl md:text-2xl font-bold mb-12">今すぐ参加して、あなたの可能性を解き放ちましょう！</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-[#fb923c] text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full text-sm sm:text-base md:text-lg"
          >
            今すぐ無料で参加する
          </button>
        </div>
      </section>

      <section className="bg-[#f5f5f5] font-noto-sans">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[#6b7280] text-lg mb-4">Career Image</p>
            <h2 className="text-center text-[#1d4ed8] text-3xl font-bold mb-12">キャリアイメージ</h2>
            <div className="bg-[#f0f7ff] p-8 rounded-xl">
              <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
                  <div className="text-2xl font-bold text-[#2563eb] mb-6 flex items-center">
                    <i className="fas fa-exclamation-circle mr-3"></i>
                    Before
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <i className="fas fa-times text-[#2563eb] mt-1 mr-3"></i>
                      <span>
                        一定の収入があるが
                        <span className="font-bold text-[#2563eb]">時間の融通が効かない</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times text-[#2563eb] mt-1 mr-3"></i>
                      <span>
                        <span className="font-bold text-[#2563eb]">自身が働き続けないと</span>
                        お金を稼ぐことができない
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-times text-[#2563eb] mt-1 mr-3"></i>
                      <span>
                        所属する組織の価値と
                        <span className="font-bold text-[#2563eb]">自身の価値が重なり</span>
                        わかりづらい
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <i className="fas fa-arrow-right text-4xl text-[#666] transform rotate-90 md:rotate-0"></i>
                </div>

                <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
                  <div className="text-2xl font-bold text-[#f97316] mb-6 flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    After
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#f97316] mt-1 mr-3"></i>
                      <span>
                        自身の裁量で
                        <span className="font-bold text-[#f97316]">自由に働く</span>
                        ことが出来る
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#f97316] mt-1 mr-3"></i>
                      <span>
                        独立し部下や組織を持つことで
                        <span className="font-bold text-[#f97316]">自身の労働比率を下げる</span>
                        事ができる
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-[#f97316] mt-1 mr-3"></i>
                      <span>
                        所属組織ではなく
                        <span className="font-bold text-[#f97316]">自身の価値がはっきりと認識</span>
                        できる
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white font-noto-sans">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-center text-[#6b7280] text-lg mb-4">why</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-12">なぜ顧問の玉手箱を選ぶか？</h1>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-gray-50 rounded-lg shadow-lg">
                <img
                  src="/why1.jpg"
                  alt="空いた椅子が並ぶオフィス環境"
                  className="w-full aspect-video object-cover rounded-t-lg"
                />
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-6 text-center">通常の案件共有サービス</h2>
                  <ul className="text-left space-y-4 list-disc pl-4">
                    <li>
                      フリーでも案件は手に入るが結局はその
                      <span className="text-blue-600 font-bold">プラットフォームに依存</span>
                      してしまう
                    </li>
                    <li>
                      個人戦であり
                      <span className="text-blue-600 font-bold">協働できる仲間がいない</span>
                    </li>
                    <li>
                      <span className="text-blue-600 font-bold">M&Aを見据えた案件は少ない</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg">
                <img
                  src="/why2.jpg"
                  alt="ビジネスチームの写真"
                  className="w-full aspect-video object-cover rounded-t-lg"
                />
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-6 text-center">顧問の玉手箱</h2>
                  <ul className="text-left space-y-4 list-disc pl-4">
                    <li>
                      案件を獲得しつつ、
                      <span className="text-orange-500 font-bold">独立のノウハウを学ぶ</span>
                      ことが出来る
                    </li>
                    <li>
                      コミュニティで
                      <span className="text-orange-500 font-bold">相談や協業できる仲間が働ける仲間</span>
                      が見つかる
                    </li>
                    <li>
                      Sランク案件では自分がサポートした企業の
                      <span className="text-orange-500 font-bold">売却益までも報酬</span>
                      として受け取れる
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f8ff] py-16 px-4 md:px-8  rounded-lg shadow-lg">
        <p className="text-[#999] text-center text-lg mb-4">FAQ</p>
        <h2 className="text-[#00529b] text-center text-3xl font-bold mb-12">よくある質問</h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: '本当に参加費は無料ですか？',
              answer: 'はい、参加費は一切いただきません。'
            },
            {
              question: '独立歴が不安です...',
              answer:
                'あなたの実力に応じた案件、及びスキル習得セットを用意しています。経験は現場から、勇気を出して挑戦してみてください！'
            },
            {
              question: '案件獲得確率は？',
              answer:
                '案件と経験値に基づいて決まるため大きな個人差がありますが、案件数が豊富なコンサルタントの数より多く存在していますのでご安心ください。'
            }
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="bg-[#00529b] text-white p-4 font-bold rounded-t-lg text-lg">Q. {item.question}</div>
              <div className="bg-white p-4 border border-[#ddd] rounded-b-lg text-base">A. {item.answer}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-[#0056b3] text-white text-center py-20 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/05.png')] bg-cover bg-center opacity-80"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-8">未知なる世界への挑戦</h1>
            <p className="text-2xl mb-12 leading-relaxed">
              これまでのキャリアを活かして、「顧問の玉手箱」と共に新たな挑戦の旅に出ましょう。
              <br />
              きっとそこには、想像を超えるようなキャリアの宝が眠っているはずです。
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#fb923c] text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full text-sm sm:text-base md:text-lg"
            >
              今すぐ無料で参加する
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#004080] text-white text-center py-3 px-4 md:px-8 shadow-lg">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <a href="/policy" target="_blank" className="text-white hover:underline whitespace-nowrap px-4 py-1">
              特定商取引法に基づく表記
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="/policy" target="_blank" className="text-white hover:underline whitespace-nowrap px-4 py-1">
              個人情報の取扱
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="/policy" target="_blank" className="text-white hover:underline whitespace-nowrap px-4 py-1">
              プライバシーポリシー
            </a>
          </div>
          <div className="text-sm text-gray-300">© 2024 顧問の玉手箱. All rights reserved.</div>
        </div>
      </section>
    </div>
  )
}

export default MainComponent

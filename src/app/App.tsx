import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#1a202c] text-gray-700 dark:text-gray-200 transition-colors duration-200 font-noto">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <span className="text-3xl">💊</span>
          <span className="font-bold text-2xl tracking-tighter text-gray-800 dark:text-white">セデス</span>
        </div>
        <button className="p-2 text-gray-600 dark:text-gray-300">
          <span className="material-icons text-3xl">menu</span>
        </button>
      </nav>

      {/* Header Section */}
      <header className="text-center pt-16 pb-32 px-4 relative bg-[#F2F2F2] super-rounded-bottom z-20">
        <div className="relative inline-block mb-12">
          <img
            src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/ogp.png"
            alt="頭痛のつらさは痛みだけじゃないんデス"
            className="mx-auto rounded-3xl w-full max-w-[360px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[640px] h-auto"
          />
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6 text-secondary dark:text-teal-300 font-medium leading-loose text-sm md:text-base">
          <p>ここ日本では、約5人に1人が、<br />日常的な頭痛に悩みながら生活しています。</p>
          <p>暮らしの中の頭痛のつらさは、痛みだけではありません。</p>
          <div className="h-8"></div>
          <p>いつも不機嫌な人だと勘違いされてしまったり。<br />
            頭痛のつらさが理解されないこともつらかったり。<br />
            これらのつらさは、残念ながら、薬では治りません。</p>
          <p>頭痛に寄り添ってくれる存在がいること。<br />
            まわりや社会がそのつらさを理解して思いやること。<br />
            それがとても大事だと、セデスは思います。</p>
          <p>誰もが無理をせず、自分らしい幸せを生きられるように、<br />
            セデスは頭痛のつらさに悩む人たちの声に耳を傾け、<br />
            共に声を上げていきます。</p>
          <p>セデスはあなたの味方です。</p>
        </div>
        
        <div className="absolute -bottom-8 left-[25%] md:left-[30%] w-16 h-16 bg-[#F2F2F2] z-30" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%)", transform: "rotate(-15deg) skewX(-10deg)", borderRadius: "0 0 20px 0"}}></div>
      </header>

      {/* Main Content */}
      <main className="relative -mt-40 z-10">
        <div className="bg-primary pb-24 pt-52 super-rounded-bottom relative">
          <div className="max-w-4xl mx-auto px-4">
            {/* Survey Introduction */}
            <div className="text-center text-white mb-16">
              <p className="text-sm opacity-90 mb-2">みんなの頭痛事情</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">もっと理解がいるんデス</h2>
              <p className="leading-relaxed text-sm md:text-base opacity-90">
                セデスが頭痛に関する調査を行ったところ、<br />
                頭痛に悩む人とそうでない人の間には、<br />
                意識に大きなギャップがあることが明らかに。<br />
                まずはその結果をご覧ください。
              </p>
              
              <div className="flex flex-col items-center justify-center gap-2 my-8 opacity-90">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              
              <div className="mt-8 text-xs opacity-75 space-y-1">
                <p>■「頭痛に関するWEB調査」概要</p>
                <p>・調査期間：2023年2月</p>
                <p>・調査方法：WEB調査</p>
                <p>・対象人数：2,000名（頭痛に悩む人：1,500名　頭痛がない人：500名）</p>
                <p>・調査対象：10代〜60代男女</p>
              </div>
            </div>

            {/* Question 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 mb-8 shadow-xl relative">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-primary text-5xl font-bold leading-none">Q.</span>
                <h3 className="text-lg md:text-xl font-bold pt-2 text-secondary dark:text-teal-300">
                  頭痛のつらさや悩みは<br />
                  友人や会社、学校などで理解されていると思いますか？
                </h3>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center w-full md:w-1/2">
                  <p className="text-secondary dark:text-teal-300 font-bold mb-4 text-sm">
                    頭痛に悩む人 <span className="text-xs font-normal block">(N=1500)</span>
                  </p>
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_graph01.png"
                alt="頭痛に悩む人 円グラフ"
                className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
              />
                </div>
                
                <div className="text-center w-full md:w-1/2">
                  <p className="text-secondary dark:text-teal-300 font-bold mb-4 text-sm">
                    頭痛がない人 <span className="text-xs font-normal block">(N=500)</span>
                  </p>
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_graph02.png"
                alt="頭痛がない人 円グラフ"
                className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
              />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary text-white p-4 rounded-xl text-center relative">
                  <p className="font-bold text-sm">
                    頭痛に悩む人のほうが、<br />頭痛のつらさや悩みが<br />理解されていないと感じている。
                  </p>
                  <div className="speech-pointer-top"></div>
                </div>
                <div className="bg-secondary text-white p-4 rounded-xl text-center relative">
                  <p className="font-bold text-sm">
                    頭痛がない人は<br />「どちらでもない」が多く、<br />そもそも頭痛に関心が低い可能性。
                  </p>
                  <div className="speech-pointer-top"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                <span className="material-icons text-primary text-3xl">spa</span>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 mb-8 shadow-xl">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-primary text-5xl font-bold leading-none">Q.</span>
                <h3 className="text-lg md:text-xl font-bold pt-2 text-secondary dark:text-teal-300">
                  頭痛のつらさや悩みが理解されていないと思う理由は？
                </h3>
              </div>
              
              <div className="mb-8">
                <img
                  src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_graph03.png"
                  alt="頭痛が理解されない理由のグラフ"
                  className="mx-auto w-full max-w-4xl h-auto"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary text-white p-4 rounded-xl text-center relative">
                  <p className="font-bold text-sm">
                    頭痛のつらさが理解されない<br />理由は症状の個人差であると<br />考えている人が最多。
                  </p>
                  <div className="speech-pointer-top"></div>
                </div>
                <div className="bg-secondary text-white p-4 rounded-xl text-center relative">
                  <p className="font-bold text-sm">
                    周囲に悩みを共有せず<br />自分で解決しようと<br />頑張っている傾向も。
                  </p>
                  <div className="speech-pointer-top"></div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 mb-8 shadow-xl">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-primary text-5xl font-bold leading-none">Q.</span>
                <h3 className="text-lg md:text-xl font-bold pt-2 text-secondary dark:text-teal-300">
                  頭痛に悩む人への配慮が必要だと思いますか？
                </h3>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center w-full md:w-1/2 relative">
                  <p className="text-secondary dark:text-teal-300 font-bold mb-4 text-sm">
                    頭痛に悩む人 <span className="text-xs font-normal block">(N=1500)</span>
                  </p>
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_graph04.png"
                alt="頭痛に悩む人 配慮が必要か 円グラフ"
                className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
              />
                </div>
                
                <div className="text-center w-full md:w-1/2 relative">
                  <p className="text-secondary dark:text-teal-300 font-bold mb-4 text-sm">
                    頭痛がない人 <span className="text-xs font-normal block">(N=500)</span>
                  </p>
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_graph05.png"
                alt="頭痛がない人 配慮が必要か 円グラフ"
                className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
              />
                </div>
              </div>
              
              <div className="bg-secondary text-white p-4 rounded-xl text-center w-full max-w-xl mx-auto relative">
                <p className="font-bold text-sm">
                  頭痛に悩む人は、<br />そうでない人が思う以上に配慮を必要としている。
                </p>
                <div className="speech-pointer-top"></div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 mb-8 shadow-xl">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-primary text-5xl font-bold leading-none">Q.</span>
                <h3 className="text-lg md:text-xl font-bold pt-2 text-secondary dark:text-teal-300">
                  頭痛に悩む人にはどんな配慮が必要だと思いますか？
                </h3>
              </div>
              
              <div className="mb-8">
                <img
                  src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_graph06.png"
                  alt="頭痛に悩む人への配慮 内容のグラフ"
                  className="mx-auto w-full max-w-5xl h-auto"
                />
              </div>
              
              <div className="bg-secondary text-white p-4 rounded-xl text-center w-full max-w-xl mx-auto relative">
                <p className="font-bold text-sm">
                  頭痛がない人は、配慮の必要性もしくは<br />配慮の仕方を十分に理解できていない可能性も。
                </p>
                <div className="speech-pointer-top"></div>
              </div>
            </div>

            {/* Survey Conclusion */}
            <div className="text-center text-white py-12 px-4 space-y-4 text-sm md:text-base leading-loose font-medium opacity-90">
              <p>
                調査結果から見えてきたのは、<br />
                頭痛に悩む人は、頭痛がない人が思う以上に<br />
                <span className="border-b border-white pb-1">頭痛への理解・配慮を必要としている一方で、</span><br />
                そのつらさや悩みは説明が難しいと感じていること。<br />
                そして、頭痛がない人は、頭痛に悩む人に<br />
                どう配慮すればよいかわかっていない、という実態でした。
              </p>
            </div>
          </div>
          
          <div className="sharp-speech-tail"></div>
        </div>
      </main>

      {/* Educational Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center bg-[#F2F2F2] dark:bg-[#1a202c]">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-teal-300 mb-6 flex items-center justify-center gap-2">
          頭痛を正しく知るんデス <span className="text-2xl text-gray-400 font-light">&gt; &lt;</span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-12 leading-loose">
          このギャップを埋めるためにまず必要なこと。<br />
          それは、頭痛について理解することだとセデスは考えました。<br />
          相手に正しく手を差し伸べるには、相手を正しく知らなければ。<br />
          ここでは、頭痛について気軽に学べるコンテンツを順次公開していきます。
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Card 1 */}
          <a
            className="group relative block rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            href="https://www.shionogi-hc.co.jp/sedes/numbers.html"
          >
            <div className="relative h-64">
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_link01.png"
                alt="数字で見る頭痛"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          
          {/* Card 2 */}
          <a
            className="group relative block rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            href="https://www.shionogi-hc.co.jp/sedes/episodes.html"
          >
            <div className="relative h-64">
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/img_link02.png"
                alt="頭痛のホンネ"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        </div>

        {/* Deep Understanding Section */}
        <div className="mt-20">
          <p className="text-secondary dark:text-teal-300 text-sm font-bold border-b-2 border-primary inline-block pb-1 mb-4">
            頭痛のある暮らしを知る
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-teal-300 mb-6 flex items-center justify-center gap-2">
            頭痛を深く理解するんデス <span className="text-2xl text-gray-400 font-light">&gt; &lt;</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8 leading-loose">
            実際に頭痛とうまく付き合いながら<br />
            生活している方にインタビューしました。<br />
            どのような対処の仕方をしながら向き合っているか<br />
            みなさまの暮らしに参考になる情報をお届けします。
          </p>
          
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 bg-secondary dark:bg-teal-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-secondary dark:bg-teal-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-secondary dark:bg-teal-300 rounded-full"></div>
          </div>
          
          <a
            className="block rounded-3xl shadow-lg hover:shadow-2xl transition-all mx-auto overflow-hidden w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3"
            href="https://www.shionogi-hc.co.jp/sedes/zutsuu-kurasu.html"
          >
            <div className="relative">
              <img
                src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/not-only-headache/images/bnr_zutsuu-kurasu.png"
                alt="頭痛と暮らす"
                className="w-full h-auto object-cover"
              />
            </div>
          </a>
        </div>
      </section>

      {/* Children's Headache Project */}
      <div className="bg-gray-100 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <a href="https://www.shionogi-hc.co.jp/kodomo-headache.html">
            <img
              src="https://www.shionogi-hc.co.jp/content/dam/shc/jp/sedes/jp/images/img_banner-kzp.jpg"
              alt="こども頭痛プロジェクト"
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-[8px]">
              SHIONOGI
            </div>
            <span className="font-bold">SHIONOGI</span>
            <span>シオノギヘルスケア</span>
          </div>
          
          <div className="flex justify-center gap-4 mb-4">
            <a className="hover:underline" href="#">お問い合わせ</a>
            <span className="text-gray-300">|</span>
            <a className="hover:underline" href="#">個人情報の取り扱いについて</a>
          </div>
          
          <p className="mb-6 opacity-60">Copyright © Shionogi Healthcare Co., Ltd. All Rights Reserved.</p>
          
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded text-left text-[10px] leading-relaxed">
            本サイトでは、アクセス解析およびサイトの利便性の向上のためにクッキー（Cookie）を使用しています。クッキーの設定変更および詳細についてはこちらをご覧ください。本サイトの閲覧を続けることで、クッキーの使用を同意したとみなされます。
            <button className="ml-2 border border-gray-400 px-2 py-0.5 rounded bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              OK
            </button>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a className="fixed bottom-6 right-6 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center text-gray-400 dark:text-gray-200 hover:shadow-lg transition" href="#">
        <span className="material-icons text-sm">arrow_upward</span>
      </a>
    </div>
  );
}

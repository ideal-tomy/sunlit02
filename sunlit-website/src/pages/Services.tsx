import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion'; // 現在使用していないためコメントアウト

const Services = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // スクロール時のアニメーション効果
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;
        
        if (sectionTop < window.innerHeight * 0.75 && !visibleSections.includes(sectionId)) {
          setVisibleSections(prev => [...prev, sectionId]);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示時にも実行
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  // アニメーションバリアント（必要に応じて使用）
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  // };

  return (
    <div className="services-page pt-20">
      {/* ページヘッダー */}
      <div className="bg-accent-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">施術メニュー</h1>
          <p className="text-xl max-w-3xl mx-auto">サンリットウエスト鍼灸整骨院の施術メニューをご紹介します</p>
        </div>
      </div>

      {/* 鍼灸治療セクション */}
      <section id="acupuncture" className={`section py-16 ${visibleSections.includes('acupuncture') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">鍼灸治療</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-200 h-96 w-full rounded-lg"></div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-accent-dark">伝統的な東洋医学に基づいた鍼灸治療</h3>
              <p className="text-gray-700 mb-6">
                鍼灸治療は、2000年以上の歴史を持つ東洋医学に基づいた治療法です。体内のエネルギーの流れ（気・血・水）を整え、
                身体の自然治癒力を高めることで、様々な症状の改善を促します。
                当院では、一人ひとりの体質や症状に合わせた最適な治療プランをご提案いたします。
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">こんな症状に効果的です</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    肩こり・首こり
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    腰痛・ぎっくり腰
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    頭痛・片頭痛
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    自律神経の乱れ
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    不眠・睡眠障害
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    冷え性・むくみ
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    疲労回復・免疫力向上
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ストレス・うつ症状
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">料金</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">初回カウンセリング・施術</td>
                      <td className="py-3 text-right">8,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">通常施術（60分）</td>
                      <td className="py-3 text-right">6,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">集中施術（90分）</td>
                      <td className="py-3 text-right">9,000円</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">回数券（5回分）</td>
                      <td className="py-3 text-right">27,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 自由診療セクション */}
      <section id="private" className={`section py-16 bg-gray-50 ${visibleSections.includes('private') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">自由診療</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-200 h-96 w-full rounded-lg"></div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-accent-dark">オーダーメイドの施術プラン</h3>
              <p className="text-gray-700 mb-6">
                自由診療では、保険診療の制限にとらわれず、お一人おひとりの症状や体質に合わせた最適な施術を提供いたします。
                鍼灸、マッサージ、整体などを組み合わせた総合的なアプローチで、根本的な改善を目指します。
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">施術内容</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">総合整体コース</span>
                      <p className="text-sm text-gray-600">全身の歪みを整え、筋肉の緊張をほぐす施術です。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">鍼灸マッサージ複合コース</span>
                      <p className="text-sm text-gray-600">東洋医学と西洋医学の両方のアプローチで症状改善を図ります。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">スポーツ障害改善コース</span>
                      <p className="text-sm text-gray-600">スポーツによる怪我や慢性的な痛みを専門的に改善します。</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">料金</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">初回カウンセリング・施術</td>
                      <td className="py-3 text-right">10,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">総合整体コース（60分）</td>
                      <td className="py-3 text-right">8,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">鍼灸マッサージ複合コース（90分）</td>
                      <td className="py-3 text-right">12,000円</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">スポーツ障害改善コース（60分）</td>
                      <td className="py-3 text-right">9,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 保険診療セクション */}
      <section id="insurance" className={`section py-16 ${visibleSections.includes('insurance') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">保険診療</h2>
          
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <div className="bg-gray-200 h-96 w-full rounded-lg"></div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-accent-dark">健康保険適用の施術</h3>
              <p className="text-gray-700 mb-6">
                当院では、医師の同意があれば健康保険を使った施術も可能です。
                国家資格を持つ専門家が、厚生労働省の基準に沿った適切な施術を提供いたします。
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">保険適用の条件</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    医師の同意書または診断書が必要です
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    神経痛、リウマチ、頚腕症候群、五十肩、腰痛症、頸椎捻挫後遺症などの症状
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    健康保険証をご持参ください
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">料金（保険適用時）</h4>
                <p className="text-gray-700 mb-4">保険適用の場合、自己負担額は保険の種類や負担割合によって異なります。</p>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">1割負担の方</td>
                      <td className="py-3 text-right">約400円〜600円/回</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">2割負担の方</td>
                      <td className="py-3 text-right">約800円〜1,200円/回</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">3割負担の方</td>
                      <td className="py-3 text-right">約1,200円〜1,800円/回</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-500 mt-2">※金額は目安です。実際の負担額は症状や施術内容によって変動します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 美容鍼灸セクション */}
      <section id="beauty" className={`section py-16 bg-gray-50 ${visibleSections.includes('beauty') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">美容鍼灸</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-200 h-96 w-full rounded-lg"></div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-accent-dark">内側から輝く美しさを引き出す美容鍼</h3>
              <p className="text-gray-700 mb-6">
                美容鍼灸は、東洋医学の考え方に基づき、お顔や身体のツボに細い鍼を打つことで、血行促進や代謝アップを促し、
                肌のハリや弾力を取り戻す施術です。メイクやスキンケアだけでは得られない、内側からの美しさを引き出します。
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">美容鍼の効果</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h5 className="font-bold">リフトアップ効果</h5>
                    </div>
                    <p className="text-sm text-gray-600">表情筋を刺激し、たるみを改善します</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h5 className="font-bold">肌質改善</h5>
                    </div>
                    <p className="text-sm text-gray-600">くすみの解消や毛穴の引き締め効果</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h5 className="font-bold">むくみ解消</h5>
                    </div>
                    <p className="text-sm text-gray-600">顔のむくみを取り、シャープな輪郭に</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h5 className="font-bold">小顔効果</h5>
                    </div>
                    <p className="text-sm text-gray-600">顔の歪みを整え、バランスの良い顔立ちに</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3">料金</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">美容鍼ベーシックコース（60分）</td>
                      <td className="py-3 text-right">8,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">美容鍼プレミアムコース（90分）</td>
                      <td className="py-3 text-right">12,000円</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">美容鍼集中コース（5回券）</td>
                      <td className="py-3 text-right">35,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section id="faq" className={`section py-16 ${visibleSections.includes('faq') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">よくある質問</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-accent-dark">初めての鍼灸は痛みがありますか？</h3>
                <p className="text-gray-700">
                  当院で使用する鍼は非常に細く、熟練した技術で施術しますので、ほとんどの方は「チクッ」とする軽い刺激を感じる程度です。
                  痛みに敏感な方には、より細い鍼を使用するなど配慮いたしますので、ご安心ください。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-accent-dark">どのくらいの頻度で通えばいいですか？</h3>
                <p className="text-gray-700">
                  症状や目的によって異なりますが、一般的には急性の症状では週2〜3回、慢性的な症状では週1回程度の通院をおすすめしています。
                  美容鍼の場合は、効果を実感するために初めは週1回、その後は2週間に1回程度の施術が理想的です。
                  もちろん、お一人おひとりの状態に合わせたプランをご提案いたします。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-accent-dark">服装や持ち物は何が必要ですか？</h3>
                <p className="text-gray-700">
                  動きやすく、リラックスできる服装でお越しください。スカートよりもパンツスタイルの方が施術を受けやすいです。
                  お持ちいただくものは、初診の方は保険証（保険診療の場合）と診察券（お持ちの方）のみで大丈夫です。
                  タオルや施術着は当院でご用意しております。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-accent-dark">施術後の注意点はありますか？</h3>
                <p className="text-gray-700">
                  施術後は、体が反応している状態ですので、激しい運動や飲酒、長時間の入浴はなるべく避けていただくことをおすすめします。
                  また、水分をしっかり摂ることで、体内の老廃物の排出を促進します。
                  まれに施術後に一時的な好転反応（だるさや眠気など）が出ることがありますが、これは治癒過程の一部ですのでご安心ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

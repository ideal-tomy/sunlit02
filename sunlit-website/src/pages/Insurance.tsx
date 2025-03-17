import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // スクロール検出用のuseEffect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'coverage', 'process', 'faq'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSections(prev => prev.includes(section) ? prev : [...prev, section]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // 初回実行
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // アニメーション設定
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-16">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            保険診療
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            健康保険が適用される施術で、お手頃な料金で質の高い治療を受けられます
          </motion.p>
        </div>
      </section>

      {/* 紹介セクション */}
      <section id="intro" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                <img src="/images/insurance.jpg" alt="保険診療" className="w-full h-auto object-cover" style={{ maxHeight: '400px' }} />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-accent-dark"
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                保険診療について
              </motion.h2>
              <motion.div
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 mb-4">
                  当院では、国民健康保険・社会保険・後期高齢者医療保険などの各種健康保険を使った施術を行っています。保険診療では、医師の同意書や指示のもと、特定の症状に対して保険適用の施術を提供しています。
                </p>
                <p className="text-gray-600 mb-4">
                  柔道整復師による施術（骨折・脱臼・打撲・捻挫・挫傷など）と、はり師・きゅう師による施術（神経痛・リウマチ・頚腕症候群・五十肩・腰痛症・頸椎捻挫後遺症など）が保険適用の対象となります。
                </p>
                <p className="text-gray-600">
                  保険診療は自由診療に比べて施術内容に制限がありますが、お手頃な料金で必要な治療を受けることができます。症状や目的に合わせて、保険診療と自由診療を組み合わせることも可能です。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 保険適用範囲セクション */}
      <section id="coverage" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('coverage') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            保険適用となる症状・施術
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              animate={visibleSections.includes('coverage') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-accent-dark mb-4 flex items-center">
                <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                柔道整復施術（整骨院）
              </h3>
              <p className="text-gray-600 mb-4">以下の外傷性の症状が保険適用の対象となります：</p>
              <ul className="space-y-2">
                {[
                  '骨折・不全骨折',
                  '脱臼（応急処置後の施術）',
                  '捻挫・挫傷',
                  '打撲',
                  'それらに伴う筋・関節の損傷'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">※ 日常生活での疲労や慢性的な症状、神経性の症状、内科的疾患は原則として保険適用外となります。</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              animate={visibleSections.includes('coverage') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-accent-dark mb-4 flex items-center">
                <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                鍼灸施術
              </h3>
              <p className="text-gray-600 mb-4">以下の症状が医師の同意書があれば保険適用の対象となります：</p>
              <ul className="space-y-2">
                {[
                  '神経痛',
                  'リウマチ',
                  '頚腕症候群',
                  '五十肩',
                  '腰痛症',
                  '頸椎捻挫後遺症'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">※ 鍼灸施術は医師の同意が必要です。同意書をお持ちでない場合は、当院で紹介状を作成することも可能です。</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              animate={visibleSections.includes('coverage') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-accent-dark mb-4">保険診療の料金</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 border-b">区分</th>
                      <th className="px-4 py-3 border-b">一部負担金</th>
                      <th className="px-4 py-3 border-b">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border-b">一般（3割負担）</td>
                      <td className="px-4 py-3 border-b">500円〜800円程度/回</td>
                      <td className="px-4 py-3 border-b">症状や施術内容により異なります</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b">高齢者（1〜2割負担）</td>
                      <td className="px-4 py-3 border-b">200円〜500円程度/回</td>
                      <td className="px-4 py-3 border-b">症状や施術内容により異なります</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b">労災保険</td>
                      <td className="px-4 py-3 border-b">0円</td>
                      <td className="px-4 py-3 border-b">仕事中や通勤途中の怪我が対象</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b">交通事故（自賠責保険）</td>
                      <td className="px-4 py-3 border-b">0円</td>
                      <td className="px-4 py-3 border-b">保険会社との連携が必要です</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">※ 上記は目安であり、実際の料金は症状や施術内容によって異なります。詳しくはスタッフにお尋ねください。</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 施術の流れセクション */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('process') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            保険診療の流れ
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: '受付・問診',
                description: '保険証をご提示いただき、問診票に症状や既往歴などをご記入いただきます。初めての方は、保険証と身分証明書（免許証など）をお持ちください。'
              },
              {
                step: 2,
                title: '検査・診察',
                description: '症状の原因を特定するために、視診・触診・動作検査などを行います。必要に応じて、医師の同意書の確認や紹介状の作成なども行います。'
              },
              {
                step: 3,
                title: '施術計画の説明',
                description: '検査結果に基づいて、適切な施術計画をご説明します。保険適用となる範囲と、必要に応じて自由診療を組み合わせた最適なプランをご提案します。'
              },
              {
                step: 4,
                title: '施術',
                description: '保険適用の範囲内で、症状に合わせた施術を行います。柔道整復施術では手技療法や物理療法、鍼灸施術では鍼やお灸による治療を行います。'
              },
              {
                step: 5,
                title: '経過観察・アドバイス',
                description: '施術後の変化を確認し、次回の予約や自宅でのケア方法についてアドバイスします。定期的な施術で症状の改善を図ります。'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex mb-8 last:mb-0"
                initial="hidden"
                animate={visibleSections.includes('process') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.2 * index }}
              >
                <div className="mr-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-gray-300 mx-auto mt-2"></div>}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2 text-accent-dark">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('faq') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            よくある質問
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: '保険証を忘れた場合はどうなりますか？',
                answer: '初回の場合は保険証が必要となりますが、2回目以降で保険証をお忘れの場合は、一旦自費でのお支払いとなり、後日保険証をお持ちいただければ差額を返金させていただきます。'
              },
              {
                question: '鍼灸治療で保険を使うには何が必要ですか？',
                answer: '鍼灸治療で保険を使用するには、医師の同意書が必要です。かかりつけ医がある場合はそちらで同意書を作成していただくか、当院で提携医療機関をご紹介することも可能です。'
              },
              {
                question: '保険診療と自由診療を併用できますか？',
                answer: 'はい、可能です。例えば、腰痛に対して保険診療の範囲内で基本的な施術を行い、さらに効果を高めるために自由診療のオプションを追加するといった併用が可能です。詳しくはスタッフにご相談ください。'
              },
              {
                question: '交通事故の治療も受けられますか？',
                answer: 'はい、交通事故による怪我の治療も行っています。自賠責保険を使用するため、基本的に自己負担はありません。事前に保険会社との連携が必要ですので、詳細はお電話でお問い合わせください。'
              },
              {
                question: '何回くらい通えば症状は改善しますか？',
                answer: '症状の程度や原因、個人の体質によって異なります。急性の症状であれば数回の施術で改善することもありますが、慢性的な症状の場合は継続的な施術が必要なことが多いです。施術計画は個別に立てさせていただきます。'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
                initial="hidden"
                animate={visibleSections.includes('faq') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-semibold text-accent-dark">{item.question}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お気軽にご相談ください</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            保険診療についてご不明な点やご質問がございましたら、お電話またはお問い合わせフォームからお気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 transition duration-300">
              お問い合わせ
            </Link>
            <a href="tel:0312345678" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary transition duration-300">
              電話で予約する
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;

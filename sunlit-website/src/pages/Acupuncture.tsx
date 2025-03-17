import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Acupuncture = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // スクロール検出用のuseEffect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'benefits', 'process', 'faq'];
      
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
            鍼灸治療
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            東洋医学の知恵を活かした、心と体のバランスを整える鍼灸治療
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
                <img src="/images/acupuncture-1.jpg" alt="鍼灸治療" className="w-full h-auto object-cover" style={{ maxHeight: '400px' }} />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-accent-dark"
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                鍼灸治療とは
              </motion.h2>
              <motion.div
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 mb-4">
                  鍼灸治療は、中国から伝わった東洋医学に基づく伝統的な治療法です。細い鍼を特定のツボに刺したり、お灸を据えたりすることで、体内のエネルギーの流れ（気・血・水）を整え、自然治癒力を高めます。
                </p>
                <p className="text-gray-600 mb-4">
                  当院では、国家資格を持つ熟練の鍼灸師が、一人ひとりの症状や体質に合わせた施術を行います。痛みの少ない優しい施術で、初めての方でも安心して受けていただけます。
                </p>
                <p className="text-gray-600">
                  現代医学では対応が難しい不定愁訴や慢性的な症状にも効果を発揮します。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 効果・メリットセクション */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('benefits') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            鍼灸治療の効果・メリット
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '痛みの緩和',
                description: '肩こり、腰痛、頭痛などの慢性的な痛みを緩和します。鍼による刺激は脳内の痛みを抑制する物質の分泌を促進します。',
                icon: '🌿'
              },
              {
                title: '自律神経の調整',
                description: '自律神経のバランスを整え、ストレスや不眠、疲労感の改善に効果的です。心身のリラックス効果も期待できます。',
                icon: '🧘'
              },
              {
                title: '血行促進',
                description: '血流が改善されることで、新陳代謝が活発になり、冷え性や肌トラブルの改善、免疫力の向上につながります。',
                icon: '💧'
              },
              {
                title: '内臓機能の調整',
                description: '消化器系や生殖器系などの内臓機能を調整し、胃腸の不調や生理痛、更年期障害などの改善に効果があります。',
                icon: '🔄'
              },
              {
                title: '筋肉の緊張緩和',
                description: '緊張した筋肉をほぐし、柔軟性を高めることで、姿勢の改善や運動機能の向上につながります。',
                icon: '💪'
              },
              {
                title: '予防医学としての効果',
                description: '定期的な施術により、症状が出る前に体のバランスを整え、病気の予防や健康維持に役立ちます。',
                icon: '🛡️'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                animate={visibleSections.includes('benefits') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-accent-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
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
            施術の流れ
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: '問診・カウンセリング',
                description: 'お体の状態や症状、生活習慣などを詳しくお伺いします。東洋医学の観点から体質や原因を分析します。'
              },
              {
                step: 2,
                title: '診察・触診',
                description: '脈診や腹診、背部診などの東洋医学独自の診察法と、必要に応じて西洋医学的な検査も行います。'
              },
              {
                step: 3,
                title: '施術プランの説明',
                description: '診察結果に基づいて、最適な施術プランをご提案します。疑問点やご不安な点がございましたら、お気軽にご質問ください。'
              },
              {
                step: 4,
                title: '鍼灸施術',
                description: '症状や体質に合わせて、適切なツボに鍼やお灸による施術を行います。痛みの少ない優しい施術を心がけています。'
              },
              {
                step: 5,
                title: 'アフターケア・アドバイス',
                description: '施術後のケア方法や、日常生活での注意点、セルフケアの方法などをアドバイスします。'
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
                question: '鍼灸治療は痛みますか？',
                answer: '当院では極細の鍼を使用し、熟練の技術で施術を行うため、ほとんど痛みを感じることはありません。「チクッ」とした軽い刺激を感じる程度です。痛みに敏感な方には、より細い鍼を使用するなど配慮いたします。'
              },
              {
                question: '初めての鍼灸でも大丈夫ですか？',
                answer: 'はい、初めての方でも安心して受けていただけます。施術前に丁寧な説明を行い、不安な点があればお気軽にご質問ください。また、施術中も常にコミュニケーションを取りながら進めていきます。'
              },
              {
                question: '服装はどうすればいいですか？',
                answer: '動きやすく、リラックスできる服装がおすすめです。施術部位によっては着替えをお願いすることもありますが、その場合は院内で用意しております。'
              },
              {
                question: '効果はどのくらいで実感できますか？',
                answer: '症状や体質によって個人差がありますが、多くの方は1回の施術でも変化を感じられます。慢性的な症状の場合は、定期的な施術を続けることで徐々に改善していきます。'
              },
              {
                question: '保険は適用されますか？',
                answer: '鍼灸治療は、特定の疾患（神経痛、リウマチ、頚腕症候群、五十肩、腰痛症、頸椎捻挫後遺症など）に対しては健康保険が適用されます。詳しくはお問い合わせください。'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">鍼灸治療を体験してみませんか？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            初回限定の特別価格でお試しいただけます。お気軽にご予約・お問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 transition duration-300">
              ご予約・お問い合わせ
            </a>
            <a href="tel:0312345678" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary transition duration-300">
              電話で予約する
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acupuncture;

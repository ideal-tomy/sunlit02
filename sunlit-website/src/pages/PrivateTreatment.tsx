import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivateTreatment = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // スクロール検出用のuseEffect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'menu', 'flow', 'testimonials'];
      
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
            自由診療
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            お一人おひとりに合わせたオーダーメイドの施術で、根本改善を目指します
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
                <img src="/images/private-treatment.jpg" alt="自由診療" className="w-full h-auto object-cover" style={{ maxHeight: '400px' }} />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-accent-dark"
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                自由診療について
              </motion.h2>
              <motion.div
                initial="hidden"
                animate={visibleSections.includes('intro') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 mb-4">
                  自由診療（保険適用外の施術）では、保険診療の制約にとらわれず、お一人おひとりの症状や体質に合わせた最適な施術を提供しています。
                </p>
                <p className="text-gray-600 mb-4">
                  当院では、東洋医学と西洋医学の両方の知識を活かし、鍼灸、手技療法、物理療法などを組み合わせた総合的なアプローチで、根本的な改善を目指します。
                </p>
                <p className="text-gray-600">
                  慢性的な痛みや不調、ストレス関連の症状、美容や健康増進など、幅広いお悩みに対応しています。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* メニューセクション */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('menu') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            自由診療メニュー
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '全身調整コース',
                time: '60分',
                price: '8,800円',
                description: '鍼灸と手技療法を組み合わせた全身のバランス調整コース。自律神経の乱れ、疲労回復、ストレス軽減に効果的です。',
                features: ['問診・カウンセリング', '全身の状態チェック', '鍼灸治療', '手技療法', 'アフターカウンセリング']
              },
              {
                title: '美容鍼コース',
                time: '70分',
                price: '12,000円',
                description: 'お顔と体の両方にアプローチする美容鍼コース。肌のハリや弾力の改善、小顔効果、むくみ解消などが期待できます。',
                features: ['問診・カウンセリング', 'お顔の状態チェック', '美容鍼施術', 'リフトアップマッサージ', '保湿ケア']
              },
              {
                title: '痛み集中ケアコース',
                time: '50分',
                price: '7,500円',
                description: '特定の痛みや不調に集中的にアプローチするコース。頑固な肩こり、腰痛、膝痛などの症状改善に特化しています。',
                features: ['問診・カウンセリング', '痛み部位の詳細評価', '鍼治療', '手技療法', '温熱療法']
              },
              {
                title: 'メンタルケアコース',
                time: '60分',
                price: '9,000円',
                description: '心身のリラックスと精神的な安定を促すコース。不眠、不安、ストレス、自律神経失調症などの改善に効果的です。',
                features: ['問診・カウンセリング', '自律神経チェック', '頭部・首肩の鍼治療', 'リラクゼーション手技', '呼吸法指導']
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial="hidden"
                animate={visibleSections.includes('menu') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-accent-dark mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">{item.time}</span>
                    <span className="text-xl font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold mb-3 text-accent-dark">施術内容</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">※ 上記以外にもお客様のお悩みに合わせたオーダーメイドのコースをご提案いたします。</p>
            <Link to="/contact" className="btn-primary inline-block">
              ご予約・お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>

      {/* 施術の流れセクション */}
      <section id="flow" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('flow') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            施術の流れ
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: 'ご予約',
                description: 'お電話またはWebフォームからご希望の日時をご予約ください。初めての方は、お悩みやご希望のコースなどをお伝えいただくとスムーズです。'
              },
              {
                step: 2,
                title: 'ご来院・カウンセリング',
                description: '問診票へのご記入後、お悩みや生活習慣、既往歴などを詳しくお伺いします。東洋医学的な診断と西洋医学的な視点から、お体の状態を総合的に評価します。'
              },
              {
                step: 3,
                title: '施術プランのご提案',
                description: 'カウンセリング結果に基づいて、最適な施術プランをご提案します。ご不明点やご要望があれば、お気軽にお申し付けください。'
              },
              {
                step: 4,
                title: '施術',
                description: '鍼灸、手技療法、物理療法など、お客様に最適な施術を行います。施術中も常にコミュニケーションを取りながら進めていきます。'
              },
              {
                step: 5,
                title: 'アフターカウンセリング',
                description: '施術後の変化や感想をお伺いし、今後のケアプランをご提案します。ホームケアのアドバイスや生活習慣の改善点などもお伝えします。'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex mb-8 last:mb-0"
                initial="hidden"
                animate={visibleSections.includes('flow') ? "visible" : "hidden"}
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

      {/* お客様の声セクション */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('testimonials') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            お客様の声
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: '田中さん（42歳・女性）',
                course: '美容鍼コース',
                comment: '美容鍼を始めて3ヶ月になりますが、肌のハリが明らかに違います。友人にも「最近肌がきれい」と言われるようになりました。施術中もリラックスできて、毎回の施術が楽しみです。'
              },
              {
                name: '佐藤さん（35歳・男性）',
                course: '全身調整コース',
                comment: 'デスクワークでの肩こりと腰痛に長年悩まされていましたが、定期的な施術を受けるようになってから症状が大幅に改善しました。仕事のパフォーマンスも上がり、生活の質が向上しています。'
              },
              {
                name: '鈴木さん（28歳・女性）',
                course: 'メンタルケアコース',
                comment: '仕事のストレスで不眠に悩んでいましたが、メンタルケアコースを受けるようになってから、睡眠の質が良くなりました。先生の丁寧なカウンセリングと施術で、心も体も軽くなります。'
              },
              {
                name: '山田さん（55歳・男性）',
                course: '痛み集中ケアコース',
                comment: '膝の痛みで趣味のゴルフができなくなっていましたが、集中ケアコースを受けて痛みが軽減し、再びプレーを楽しめるようになりました。先生の技術と知識に感謝しています。'
              },
              {
                name: '伊藤さん（45歳・女性）',
                course: '全身調整コース',
                comment: '更年期障害の症状で体調不良が続いていましたが、定期的な施術で自律神経のバランスが整い、ホットフラッシュや不安感が軽減しました。心身ともに安定した日々を過ごせています。'
              },
              {
                name: '高橋さん（32歳・男性）',
                course: '痛み集中ケアコース',
                comment: 'スポーツ障害で肩に痛みがあり、思うようにトレーニングができませんでしたが、施術を受けてから可動域が広がり、パフォーマンスが向上しました。アスリートにもおすすめです。'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative"
                initial="hidden"
                animate={visibleSections.includes('testimonials') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-4xl text-primary opacity-20 absolute top-4 right-4">
                  
                </div>
                <div className="flex items-center mb-4">
                  <img src="/images/user-icon.png" alt="ユーザーアイコン" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-lg font-bold text-accent-dark">{item.name}</h4>
                    <p className="text-gray-600">{item.course}</p>
                  </div>
                </div>
                <p className="text-gray-600">{item.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateTreatment;

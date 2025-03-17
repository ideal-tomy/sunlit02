// src/pages/Staff.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Staff = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // スクロール検出用のuseEffect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'director', 'staff', 'philosophy'];
      
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

  // スタッフデータ
  const staffMembers = [
    {
      id: 1,
      name: '鈴木 健太',
      position: '柔道整復師',
      specialties: ['スポーツ障害', '交通事故治療'],
      image: '/images/staff-2.jpg',
      description: '柔道整復師として10年の経験を持ち、特にスポーツ障害や交通事故後のリハビリに強みを持っています。患者様の痛みを理解し、最適な治療プランを提案します。'
    },
    {
      id: 2,
      name: '佐藤 美咲',
      position: '鍼灸師',
      specialties: ['美容鍼', '女性特有の症状'],
      image: '/images/staff-3.jpg',
      description: '美容鍼の専門家として、多くの女性患者様から支持されています。また、女性特有の症状に対する東洋医学的アプローチにも精通しています。'
    },
    {
      id: 3,
      name: '高橋 誠',
      position: '柔道整復師・鍼灸師',
      specialties: ['腰痛', '神経痛'],
      image: '/images/staff-4.jpg',
      description: '柔道整復師と鍼灸師の両方の資格を持ち、西洋医学と東洋医学の両面からアプローチする治療を得意としています。特に腰痛や神経痛の治療に力を入れています。'
    },
    {
      id: 4,
      name: '田中 優子',
      position: '受付・事務',
      specialties: [],
      image: '/images/staff-5.jpg',
      description: '患者様が快適に過ごせるよう、丁寧な対応を心がけています。予約管理から保険請求まで、院内の運営をサポートしています。'
    }
  ];

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
            スタッフ紹介
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            患者様の健康と笑顔のために、専門知識と技術を持ったスタッフが対応します
          </motion.p>
        </div>
      </section>

      {/* イントロセクション */}
      <section id="intro" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate={visibleSections.includes('intro') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6 text-accent-dark">チーム紹介</h2>
            <p className="text-gray-600 mb-4">
              サンリットウエスト鍼灸整骨院では、国家資格を持つ専門スタッフが、患者様一人ひとりに合わせた最適な治療を提供しています。東洋医学と西洋医学の知識を融合させ、根本的な改善を目指します。
            </p>
            <p className="text-gray-600">
              スタッフ全員が定期的な研修を受け、最新の治療技術と知識を習得しています。患者様の痛みや不安に寄り添い、心身ともに健康な状態へと導くことを使命としています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 院長紹介セクション */}
      <section id="director" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('director') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            院長紹介
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
            <motion.div 
              className="md:w-2/5 mb-8 md:mb-0 md:pr-8"
              initial="hidden"
              animate={visibleSections.includes('director') ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/images/staff-1.jpg" alt="院長 山田太郎" className="w-full h-auto object-cover" style={{ maxHeight: '500px' }} />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-3/5"
              initial="hidden"
              animate={visibleSections.includes('director') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-accent-dark">院長 山田 太郎</h3>
              <p className="text-gray-500 mb-4">柔道整復師・鍼灸師</p>
              <p className="text-gray-600 mb-4">
                東京医療専門学校卒業後、複数の整骨院での勤務を経て、2015年にサンリットウエスト鍼灸整骨院を開院。柔道整復師と鍼灸師の両方の国家資格を持ち、東洋医学と西洋医学の両方のアプローチで患者様の症状改善に取り組んでいます。
              </p>
              <p className="text-gray-600 mb-6">
                特にスポーツ障害と慢性的な痛みの治療を得意とし、プロスポーツ選手のケアも担当。患者様一人ひとりの生活習慣や体質を考慮した、オーダーメイドの治療を心がけています。
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-accent-dark">資格</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>柔道整復師（国家資格）</li>
                  <li>はり師・きゅう師（国家資格）</li>
                  <li>日本スポーツ協会公認アスレティックトレーナー</li>
                  <li>機能解剖学的アプローチ認定トレーナー</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent-dark">メッセージ</h4>
                <p className="text-gray-600 italic">
                  「痛みの緩和だけでなく、その原因を見つけ、根本から改善することが大切です。患者様が健康で活動的な生活を送れるよう、全力でサポートします。」
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* スタッフ紹介セクション */}
      <section id="staff" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('staff') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            スタッフ紹介
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {staffMembers.map((staff, index) => (
              <motion.div 
                key={staff.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                initial="hidden"
                animate={visibleSections.includes('staff') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-1 text-accent-dark">{staff.name}</h3>
                  <p className="text-gray-500 mb-2">{staff.position}</p>
                  {staff.specialties.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {staff.specialties.map((specialty, i) => (
                        <span key={i} className="text-xs bg-primary-light text-primary px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-600 text-sm">{staff.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 治療理念セクション */}
      <section id="philosophy" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('philosophy') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            治療理念
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial="hidden"
              animate={visibleSections.includes('philosophy') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-accent-dark">「心と体の調和を大切に、根本から健康を支える」</h3>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="space-y-6 text-gray-600">
                <p>
                  当院では、患者様の症状だけでなく、生活習慣や心の状態も含めた「全人的アプローチ」を大切にしています。東洋医学の「心身一如」の考え方に基づき、心と体のバランスを整えることで、真の健康を目指します。
                </p>
                <p>
                  また、「治療」だけでなく「予防」の観点も重視し、患者様自身が健康管理できるようなアドバイスや、セルフケアの方法もお伝えしています。一時的な症状の緩和ではなく、長期的な健康維持をサポートすることが私たちの使命です。
                </p>
                <p>
                  患者様との信頼関係を大切にし、一人ひとりに寄り添った丁寧な対応を心がけています。不安や疑問にしっかりと耳を傾け、納得いただける治療を提供します。
                </p>
                <p>
                  私たちは常に技術と知識の向上に努め、最新の医学的知見も取り入れながら、より効果的な治療法を追求しています。患者様の笑顔と健康な日常を取り戻すために、スタッフ一同、誠心誠意対応させていただきます。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">お気軽にご相談ください</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            当院のスタッフが、あなたの健康をサポートします。痛みや不調でお悩みの方は、ぜひ一度ご相談ください。
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

export default Staff;
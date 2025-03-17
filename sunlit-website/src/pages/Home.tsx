import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 画像のパス設定
const heroImage = '/images/01.png';
const acupunctureImage = '/images/02.png';
const privateTreatmentImage = '/images/03.png';
const insuranceTreatmentImage = '/images/04.png';
const staffImage = '/images/05.png';
const mapImage = '/images/図1.jpg';

const Home = () => {
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

  // アニメーションバリアント
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="home-page">
      {/* ヒーローセクション */}
      <section className="hero-section relative" style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="hero-overlay absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              サンリットウエスト鍼灸整骨院
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              心と体の健康をサポートする、あなたのための鍼灸整骨院
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact" className="btn-primary mr-4">ご予約はこちら</Link>
              <Link to="/services" className="btn-secondary">施術メニュー</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 治療メニューセクション */}
      <section id="treatment-menu" className={`section py-20 bg-gray-50 ${visibleSections.includes('treatment-menu') ? 'visible' : ''}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('treatment-menu') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            施術メニュー
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 鍼灸治療カード */}
            <motion.div 
              className="treatment-card bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              animate={visibleSections.includes('treatment-menu') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img src={acupunctureImage} alt="鍼灸治療" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-dark">鍼灸治療</h3>
                <p className="text-gray-600 mb-4">
                  伝統的な東洋医学に基づいた鍼灸治療で、体の不調を根本から改善します。痛みの少ない施術で初めての方も安心。
                </p>
                <Link to="/services#acupuncture" className="text-primary hover:underline font-medium">詳しく見る →</Link>
              </div>
            </motion.div>

            {/* 自由診療カード */}
            <motion.div 
              className="treatment-card bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              animate={visibleSections.includes('treatment-menu') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img src={privateTreatmentImage} alt="自由診療" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-dark">自由診療</h3>
                <p className="text-gray-600 mb-4">
                  保険適用外の特別なケアで、より効果的な治療を提供します。あなたの症状や目的に合わせたオーダーメイドの施術プランをご提案。
                </p>
                <Link to="/services#private" className="text-primary hover:underline font-medium">詳しく見る →</Link>
              </div>
            </motion.div>

            {/* 保険診療カード */}
            <motion.div 
              className="treatment-card bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              animate={visibleSections.includes('treatment-menu') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img src={insuranceTreatmentImage} alt="保険診療" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-dark">保険診療</h3>
                <p className="text-gray-600 mb-4">
                  健康保険を適用した施術で、手頃な価格で質の高い治療を受けられます。交通事故によるケガの施術も対応しています。
                </p>
                <Link to="/services#insurance" className="text-primary hover:underline font-medium">詳しく見る →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* スタッフ紹介セクション */}
      <section id="staff" className={`section py-20 ${visibleSections.includes('staff') ? 'visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg mb-6 md:mb-0"
                initial="hidden"
                animate={visibleSections.includes('staff') ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                <img src={staffImage} alt="院長写真" className="w-full h-auto object-cover" style={{ maxHeight: '400px' }} />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-accent-dark"
                initial="hidden"
                animate={visibleSections.includes('staff') ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                スタッフ紹介
              </motion.h2>
              <motion.div
                initial="hidden"
                animate={visibleSections.includes('staff') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-accent-dark">院長 山田太郎</h3>
                <p className="text-gray-600 mb-4">
                  国家資格保有の鍼灸師・柔道整復師。10年以上の臨床経験を持ち、東洋医学と西洋医学の両方の知識を活かした施術を提供しています。患者様一人ひとりに寄り添った丁寧な施術を心がけています。
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-accent-dark">資格</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>はり師・きゅう師（国家資格）</li>
                    <li>柔道整復師（国家資格）</li>
                    <li>日本伝統鍼灸学会認定鍼灸師</li>
                  </ul>
                </div>
                <Link to="/about#staff" className="btn-primary inline-block">スタッフについて詳しく</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 治療理念セクション */}
      <section id="philosophy" className={`section py-20 bg-accent-light ${visibleSections.includes('philosophy') ? 'visible' : ''}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('philosophy') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            治療理念
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={visibleSections.includes('philosophy') ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              サンリットウエスト鍼灸整骨院では、「心と体の調和」を大切にしています。東洋医学の知恵と現代医学の知識を融合させ、患者様一人ひとりの状態に合わせた最適な施術を提供します。
            </p>
            <p className="text-lg text-gray-700 mb-6">
              単に症状を和らげるだけでなく、根本的な原因にアプローチし、自然治癒力を高める施術を心がけています。患者様が健康で活力ある生活を送れるよう、全力でサポートいたします。
            </p>
            <Link to="/about#philosophy" className="btn-secondary inline-block">理念について詳しく</Link>
          </motion.div>
        </div>
      </section>

      {/* お子様連れセクション */}
      <section id="child-friendly" className={`section py-20 ${visibleSections.includes('child-friendly') ? 'visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-center text-accent-dark"
              initial="hidden"
              animate={visibleSections.includes('child-friendly') ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              お子様連れでも安心
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes('child-friendly') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <p className="text-gray-600 mb-4">
                    当院はお子様連れの患者様も歓迎しています。キッズスペースを完備し、お子様が退屈せずに過ごせる環境を整えています。
                  </p>
                  <p className="text-gray-600 mb-4">
                    また、小児はりなど、お子様向けの優しい施術メニューもご用意。お子様の健康もサポートいたします。
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>キッズスペース完備</li>
                    <li>おもちゃ・絵本あり</li>
                    <li>授乳スペースあり</li>
                    <li>おむつ交換台あり</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500 italic">キッズスペース画像</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className={`section py-20 bg-gray-50 ${visibleSections.includes('access') ? 'visible' : ''}`}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('access') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            アクセス
          </motion.h2>
          <div className="flex flex-col md:flex-row items-start">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial="hidden"
              animate={visibleSections.includes('access') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-accent-dark">サンリットウエスト鍼灸整骨院</h3>
                <p className="text-gray-600 mb-4">
                  〒123-4567<br />
                  東京都新宿区西新宿1-2-3 サンリットビル2F
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-accent-dark">診療時間</h4>
                  <table className="w-full text-gray-600">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">平日</td>
                        <td className="py-2">9:00 - 20:00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">土曜</td>
                        <td className="py-2">9:00 - 18:00</td>
                      </tr>
                      <tr>
                        <td className="py-2">日曜・祝日</td>
                        <td className="py-2">10:00 - 17:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-accent-dark">アクセス方法</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>JR新宿駅 西口から徒歩5分</li>
                    <li>地下鉄丸ノ内線 西新宿駅から徒歩3分</li>
                    <li>駐車場あり（2台）</li>
                  </ul>
                </div>
                <Link to="/contact#access" className="text-primary hover:underline font-medium">詳しいアクセス情報 →</Link>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate={visibleSections.includes('access') ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={mapImage} alt="アクセスマップ" className="w-full h-auto object-cover" style={{ maxHeight: '400px' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className={`section py-20 ${visibleSections.includes('contact') ? 'visible' : ''}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('contact') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            お問い合わせ・ご予約
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate={visibleSections.includes('contact') ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            ご質問やご予約は、お電話またはオンラインフォームからお気軽にお問い合わせください。
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            initial="hidden"
            animate={visibleSections.includes('contact') ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <a href="tel:03-1234-5678" className="btn-primary flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.21-.502l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              03-1234-5678
            </a>
            <Link to="/contact" className="btn-secondary flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              お問い合わせフォーム
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

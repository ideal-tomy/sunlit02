import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 仮の画像（後で適切な画像に置き換える）
import clinicImage from '../assets/images/clinic.jpg';

const About = () => {
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
    <div className="about-page pt-20">
      {/* ページヘッダー */}
      <div className="bg-accent-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">当院について</h1>
          <p className="text-xl max-w-3xl mx-auto">サンリットウエスト鍼灸整骨院の理念と特徴についてご紹介します</p>
        </div>
      </div>

      {/* 当院の特徴セクション */}
      <section id="features" className={`section py-16 ${visibleSections.includes('features') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">当院の特徴</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-200 h-96 w-full rounded-lg"></div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-accent-dark">心と身体の健康をトータルサポート</h3>
              <p className="text-gray-700 mb-6">
                サンリットウエスト鍼灸整骨院では、東洋医学と西洋医学の知見を融合させた独自のアプローチで、患者様の心と身体の健康を総合的にサポートします。
                単に症状を和らげるだけでなく、根本的な原因にアプローチし、再発しにくい健康な身体づくりをお手伝いします。
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span>1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">経験豊富な専門スタッフ</h4>
                    <p className="text-gray-700">国家資格を持つ鍼灸師・柔道整復師が、一人ひとりに合わせた最適な施術を提供します。</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span>2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">清潔で落ち着いた空間</h4>
                    <p className="text-gray-700">リラックスして施術を受けていただけるよう、清潔で落ち着いた院内環境を整えています。</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span>3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">アフターケアの充実</h4>
                    <p className="text-gray-700">施術後のセルフケア指導や生活習慣のアドバイスなど、日常生活でのケアもサポートします。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 治療理念セクション */}
      <section id="philosophy" className={`section py-16 bg-gray-50 ${visibleSections.includes('philosophy') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">治療理念</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-xl text-gray-700 italic mb-6">
                「100年使う大切な身体だからこそ、定期的なメンテナンスで痛みの少ない毎日を」
              </p>
              <p className="text-gray-700">
                これが私たちサンリットウエスト鍼灸整骨院の理念です。私たちは単に痛みを取り除くだけでなく、
                患者様が健康で活動的な生活を送れるよう、トータルでサポートすることを目指しています。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                initial="hidden"
                animate={visibleSections.includes('philosophy') ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-accent-dark">予防と健康維持</h3>
                <p className="text-gray-700">
                  症状が出てからの治療だけでなく、予防と健康維持のための定期的なケアを大切にしています。
                  日々のメンテナンスが、将来の健康な身体づくりの基盤となります。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                initial="hidden"
                animate={visibleSections.includes('philosophy') ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-accent-dark">東洋医学と西洋医学の融合</h3>
                <p className="text-gray-700">
                  伝統的な東洋医学の知恵と現代の西洋医学の知見を組み合わせ、最適な治療アプローチを提供します。
                  両方の良さを取り入れることで、より効果的な施術を実現しています。
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                initial="hidden"
                animate={visibleSections.includes('philosophy') ? 'visible' : 'hidden'}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-accent-dark">患者様中心のアプローチ</h3>
                <p className="text-gray-700">
                  一人ひとりの症状、生活習慣、目標に合わせたオーダーメイドの治療プランを提供します。
                  患者様との対話を大切にし、ともに健康を目指します。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* スタッフ紹介セクション */}
      <section id="staff" className={`section py-16 ${visibleSections.includes('staff') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">スタッフ紹介</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 院長 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              variants={fadeInUp}
              initial="hidden"
              animate={visibleSections.includes('staff') ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-dark">院長 山田 太郎</h3>
                <p className="text-gray-600 mb-4">
                  鍼灸師・柔道整復師<br />
                  鍼灸歴10年
                </p>
                <p className="text-gray-700 mb-4">
                  はじめまして、院長の山田太郎です。私は10年以上にわたり鍼灸師として多くの患者様の痛みや不調の改善をサポートしてきました。
                  東洋医学と西洋医学の両方の知識を活かし、一人ひとりに合わせた最適な治療プランをご提案いたします。
                </p>
                <ul className="mb-4">
                  <li className="mb-1">・国際鍼灸学会認定 鍼灸師</li>
                  <li className="mb-1">・日本スポーツ協会公認 アスレティックトレーナー</li>
                  <li className="mb-1">・東京医療専門学校 卒業</li>
                </ul>
              </div>
            </motion.div>
            
            {/* 副院長 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              variants={fadeInUp}
              initial="hidden"
              animate={visibleSections.includes('staff') ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-dark">副院長 佐藤 花子</h3>
                <p className="text-gray-600 mb-4">
                  鍼灸師・柔道整復師<br />
                  鍼灸歴8年
                </p>
                <p className="text-gray-700 mb-4">
                  副院長の佐藤花子です。女性特有の悩みや美容鍼灸を専門としています。
                  痛みの少ない施術を心がけていますので、鍼が初めての方や痛みに敏感な方も安心してお越しください。
                  患者様一人ひとりに寄り添った施術を提供いたします。
                </p>
                <ul className="mb-4">
                  <li className="mb-1">・日本美容鍼灸協会認定 美容鍼灸師</li>
                  <li className="mb-1">・女性健康推進機構認定 女性健康アドバイザー</li>
                  <li className="mb-1">・東京医療専門学校 卒業</li>
                </ul>
              </div>
            </motion.div>
            
            {/* スタッフ */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              variants={fadeInUp}
              initial="hidden"
              animate={visibleSections.includes('staff') ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-dark">鈴木 一郎</h3>
                <p className="text-gray-600 mb-4">
                  柔道整復師<br />
                  整体歴5年
                </p>
                <p className="text-gray-700 mb-4">
                  鈴木一郎です。スポーツ外傷や交通事故によるケガの施術を得意としています。
                  元プロスポーツトレーナーとしての経験を活かし、アスリートから一般の方まで、
                  身体の状態に合わせた最適な施術とリハビリテーションを提供します。
                </p>
                <ul className="mb-4">
                  <li className="mb-1">・日本柔道整復師会認定 柔道整復師</li>
                  <li className="mb-1">・元プロバスケットボールチームトレーナー</li>
                  <li className="mb-1">・スポーツリハビリテーション専門学校 卒業</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 院内紹介セクション */}
      <section id="clinic-tour" className={`section py-16 bg-gray-50 ${visibleSections.includes('clinic-tour') ? 'fade-in visible' : 'fade-in'}`}>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl mb-12">院内紹介</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-200 h-64 mb-4 rounded-lg"></div>
              <h3 className="text-xl font-bold mb-2 text-accent-dark">受付・待合室</h3>
              <p className="text-gray-700">
                明るく清潔な受付・待合室です。リラックスしてお待ちいただけるよう、
                快適な空間づくりを心がけています。雑誌や健康情報のパンフレットもご用意しています。
              </p>
            </div>
            
            <div>
              <div className="bg-gray-200 h-64 mb-4 rounded-lg"></div>
              <h3 className="text-xl font-bold mb-2 text-accent-dark">施術室</h3>
              <p className="text-gray-700">
                プライバシーに配慮した個室の施術室です。清潔で落ち着いた空間で、
                リラックスして施術を受けていただけます。
              </p>
            </div>
            
            <div>
              <div className="bg-gray-200 h-64 mb-4 rounded-lg"></div>
              <h3 className="text-xl font-bold mb-2 text-accent-dark">鍼灸専用ルーム</h3>
              <p className="text-gray-700">
                鍼灸施術専用の静かな空間です。心地よい音楽と適切な温度管理で、
                リラックスしながら施術を受けていただけます。
              </p>
            </div>
            
            <div>
              <div className="bg-gray-200 h-64 mb-4 rounded-lg"></div>
              <h3 className="text-xl font-bold mb-2 text-accent-dark">キッズスペース</h3>
              <p className="text-gray-700">
                お子様連れの方も安心して施術を受けていただけるよう、キッズスペースを完備しています。
                おもちゃや絵本を用意していますので、お子様が退屈することなく過ごせます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

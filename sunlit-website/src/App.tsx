import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

// レイアウトコンポーネントをインポート
import Navbar from './components/Navbar';
import Footer from './layouts/Footer';

// ページコンポーネントをインポート
import Home from './pages/Home';
import Acupuncture from './pages/Acupuncture';
import PrivateTreatment from './pages/PrivateTreatment';
import Insurance from './pages/Insurance';
import Staff from './pages/staff';
import Blog from './pages/blog';
import Contact from './pages/Contact';

function App() {
  // スクロール時のヘッダースタイル変更
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acupuncture" element={<Acupuncture />} />
            <Route path="/private-treatment" element={<PrivateTreatment />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

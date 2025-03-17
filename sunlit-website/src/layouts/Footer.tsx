import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* u30afu30eau30cbu30c3u30afu60c5u5831 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">u30b5u30f3u30eau30c3u30c8u30a6u30a8u30b9u30c8u937cu7078u6574u9aa8u9662</h3>
            <address className="not-italic mb-4">
              <p>u3012123-4567</p>
              <p>u6771u4eacu90fdu6e0bu8c37u533au6e0bu8c371-2-3</p>
              <p>u30b5u30f3u30eau30c3u30c8u30d3u30eb 2u968e</p>
              <p className="mt-2">u96fbu8a71: 03-1234-5678</p>
            </address>
            <div className="mt-4">
              <a href="https://goo.gl/maps/XXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition duration-300">
                Google Mapu3067u898bu308b
              </a>
            </div>
          </div>

          {/* u55b6u696du6642u9593 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">u55b6u696du6642u9593</h3>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-1">u6708u66dcu65e5uff5eu91d1u66dcu65e5</td>
                  <td className="py-1">9:00 - 20:00</td>
                </tr>
                <tr>
                  <td className="py-1">u571fu66dcu65e5</td>
                  <td className="py-1">9:00 - 18:00</td>
                </tr>
                <tr>
                  <td className="py-1">u65e5u66dcu30fbu7956u65e5</td>
                  <td className="py-1">u4f11u8a3a</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4">u203b u4e88u7d04u5236u3067u3059u3002u304au96fbu8a71u307eu305fu306fu30aau30f3u30e9u30a4u30f3u3067u3054u4e88u7d04u304fu3060u3055u3044u3002</p>
          </div>

          {/* u30cau30d3u30b2u30fcu30b7u30e7u30f3 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">u30eau30f3u30af</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white hover:text-primary transition duration-300">u30dbu30fcu30e0</Link>
              <Link to="/about" className="text-white hover:text-primary transition duration-300">u5f53u9662u306bu3064u3044u3066</Link>
              <Link to="/services" className="text-white hover:text-primary transition duration-300">u65bdu8853u30e1u30cbu30e5u30fc</Link>
              <Link to="/contact" className="text-white hover:text-primary transition duration-300">u304au554fu3044u5408u308fu305b</Link>
              <a href="https://blog.example.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition duration-300">u30d6u30edu30b0</a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition duration-300">Instagram</a>
            </nav>
          </div>
        </div>

        {/* u30b3u30d4u30fcu30e9u30a4u30c8 */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} u30b5u30f3u30eau30c3u30c8u30a6u30a8u30b9u30c8u937cu7078u6574u9aa8u9662. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link to="/privacy" className="text-white hover:text-primary transition duration-300">u30d7u30e9u30a4u30d0u30b7u30fcu30ddu30eau30b7u30fc</Link>
            <Link to="/terms" className="text-white hover:text-primary transition duration-300">u5229u7528u898fu7d04</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

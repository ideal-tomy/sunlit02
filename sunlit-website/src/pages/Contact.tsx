import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  agree: boolean;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // u3053u3053u3067u5b9fu969bu306eu9001u4fe1u51e6u7406u3092u884cu3046u3002u73feu5728u306fu30c0u30dfu30fcu51e6u7406u3002
    console.log('Form data:', data);
    
    // u9001u4fe1u6210u529fu3092u30b7u30dfu30e5u30ecu30fcu30c8
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset(); // u30d5u30a9u30fcu30e0u3092u30eau30bbu30c3u30c8
      
      // u6210u529fu30e1u30c3u30bbu30fcu30b8u3092u6570u79d2u5f8cu306bu975eu8868u793au306bu3059u308b
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page pt-20">
      {/* u30dau30fcu30b8u30d8u30c3u30c0u30fc */}
      <div className="bg-accent-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">u304au554fu3044u5408u308fu305b</h1>
          <p className="text-xl max-w-3xl mx-auto">u3054u4e88u7d04u3084u3054u8ceau554fu306fu304au6c17u8efdu306bu304au554fu3044u5408u308fu305bu304fu3060u3055u3044</p>
        </div>
      </div>

      {/* u304au554fu3044u5408u308fu305bu30bbu30afu30b7u30e7u30f3 */}
      <section className="section py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* u304au554fu3044u5408u308fu305bu30d5u30a9u30fcu30e0 */}
            <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
              <h2 className="section-title text-3xl mb-8">u304au554fu3044u5408u308fu305bu30d5u30a9u30fcu30e0</h2>
              
              {submitSuccess && (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>u304au554fu3044u5408u308fu305bu3042u308au304cu3068u3046u3054u3056u3044u307eu3059u3002u62c5u5f53u8005u304bu3089u6307u5b9au306eu9023u7d61u5148u306bu3054u9023u7d61u3055u305bu3066u3044u305fu3060u304du307eu3059u3002</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">u304au540du524d <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('name', { required: 'u304au540du524du3092u5165u529bu3057u3066u304fu3060u3055u3044' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">u30e1u30fcu30ebu30a2u30c9u30ecu30b9 <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      {...register('email', { 
                        required: 'u30e1u30fcu30ebu30a2u30c9u30ecu30b9u3092u5165u529bu3057u3066u304fu3060u3055u3044', 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'u6709u52b9u306au30e1u30fcu30ebu30a2u30c9u30ecu30b9u3092u5165u529bu3057u3066u304fu3060u3055u3044'
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">u96fbu8a71u756au53f7</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      {...register('phone')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">u3054u5e0cu671bu306eu65bdu8853</label>
                  <select 
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    {...register('service')}
                  >
                    <option value="">u9078u629eu3057u3066u304fu3060u3055u3044</option>
                    <option value="acupuncture">u937cu7078u6cbbu7642</option>
                    <option value="private">u81eau7531u8a3au7642</option>
                    <option value="insurance">u4fddu967au8a3au7642</option>
                    <option value="beauty">u7f8eu5bb9u937cu7078</option>
                    <option value="other">u305du306eu4ed6</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">u304au554fu3044u5408u308fu305bu5185u5bb9 <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('message', { required: 'u304au554fu3044u5408u308fu305bu5185u5bb9u3092u5165u529bu3057u3066u304fu3060u3055u3044' })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      type="checkbox"
                      className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                      {...register('agree', { required: 'u30d7u30e9u30a4u30d0u30b7u30fcu30ddu30eau30b7u30fcu306bu540cu610fu3057u3066u304fu3060u3055u3044' })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agree" className="text-gray-700">
                      <a href="/privacy" className="text-primary hover:underline">u30d7u30e9u30a4u30d0u30b7u30fcu30ddu30eau30b7u30fc</a> u306bu540cu610fu3057u307eu3059 <span className="text-red-500">*</span>
                    </label>
                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree.message}</p>}
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full md:w-auto px-8 py-3 text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        u9001u4fe1u4e2d...
                      </span>
                    ) : 'u9001u4fe1u3059u308b'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* u304au554fu3044u5408u308fu305bu60c5u5831 */}
            <div className="lg:w-1/3 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-accent-dark">u304au554fu3044u5408u308fu305bu60c5u5831</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">u96fbu8a71u3067u306eu304au554fu3044u5408u308fu305b</h4>
                  <p className="text-gray-700 mb-2">u304au96fbu8a71u3067u306eu3054u4e88u7d04u30fbu304au554fu3044u5408u308fu305bu3082u627fu3063u3066u304au308au307eu3059u3002</p>
                  <a href="tel:0312345678" className="text-primary font-bold text-xl hover:underline">03-1234-5678</a>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">u55b6u696du6642u9593</h4>
                  <table className="w-full text-gray-700">
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
                        <td className="py-1">u65e5u66dcu30fbu795du65e5</td>
                        <td className="py-1">u4f11u8a3a</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">u4f4fu6240</h4>
                  <address className="not-italic text-gray-700">
                    <p>u3012123-4567</p>
                    <p>u6771u4eacu90fdu6e0bu8c37u533au6e0bu8c371-2-3</p>
                    <p>u30b5u30f3u30eau30c3u30c8u30d3u30eb 2u968e</p>
                  </address>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">u30a2u30afu30bbu30b9</h4>
                  <ul className="text-gray-700">
                    <li className="mb-1">u30fbu6e0bu8c37u99c5u304bu3089u5f92u6b695u5206</li>
                    <li className="mb-1">u30fbu30d0u30b9u505cu300cu6e0bu8c37u99c5u524du300du304bu3089u5f92u6b692u5206</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* u5730u56f3u30bbu30afu30b7u30e7u30f3 */}
      <section className="section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl mb-12">u30a2u30afu30bbu30b9u30deu30c3u30d7</h2>
          
          <div className="bg-gray-300 h-96 w-full rounded-lg flex items-center justify-center">
            <p className="text-gray-600">u3053u3053u306bu5730u56f3u304cu8868u793au3055u308cu307eu3059</p>
            {/* u5b9fu969bu306eu5b9fu88c5u6642u306bu306fu3001Google Mapsu306aAPIu3092u4f7fu7528u3057u3066u5730u56f3u3092u8868u793au3059u308b */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

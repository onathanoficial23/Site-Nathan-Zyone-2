import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningsEstimator from './components/EarningsEstimator';
import ProductShowcase from './components/ProductShowcase';
import KitSection from './components/KitSection';
import SupportMaterials from './components/SupportMaterials';
import Footer from './components/Footer';
import { Smartphone, Layout, Users, Star, BarChart3, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-zyone-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why choose Zyone - Quick Feature Section */}
        <section className="py-12 bg-white border-y border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">100% ESSÊNCIA</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">ALTA FIXAÇÃO</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">SISTEMA ÚNICO</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">TREINAMENTOS</div>
            </div>
          </div>
        </section>

        <ProductShowcase />
        
        {/* Income Opportunity Banner */}
        <section className="py-20 bg-zyone-red relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
              TORNE-SE UM <span className="text-zyone-dark">REVENDEDOR ZYONE</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
              A ZYONE Perfumes e Cosméticos oferece uma oportunidade única para quem deseja empreender com liberdade, autonomia e alto potencial de ganhos.
            </p>
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-zyone-red rounded-2xl font-black text-lg shadow-2xl transition-all hover:scale-105"
            >
              CADASTRAR-SE AGORA
            </a>
          </div>
        </section>

        <EarningsEstimator />
        <SupportMaterials />

        {/* App Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest rounded-full mb-6">
                  <Smartphone size={14} /> EXCLUSIVIDADE
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase leading-none mb-6">
                  TUDO O QUE VOCÊ PRECISA <br /> <span className="text-zyone-red">NA PALMA DA MÃO</span>
                </h2>
                <p className="text-gray-600 font-medium mb-10 leading-relaxed">
                  Com o Aplicativo Zyone, você gerencia suas vendas, faz pedidos rápidos, acessa materiais de apoio e acompanha seu crescimento em tempo real.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  {[
                    { icon: <Layout size={20} />, label: 'Catálogo Digital' },
                    { icon: <Users size={20} />, label: 'Gestão de Rede' },
                    { icon: <BarChart3 size={20} />, label: 'Relatórios de Ganhos' },
                    { icon: <Globe size={20} />, label: 'Treinamentos Online' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-zyone-red border border-gray-100">
                        {item.icon}
                      </div>
                      <span className="font-bold text-zyone-dark text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    className="h-12 w-36 bg-zyone-dark rounded-lg flex items-center justify-center text-white gap-2 cursor-pointer hover:bg-black transition-colors"
                  >
                    <span className="text-[10px] font-bold text-left leading-none uppercase">Get it on <br /><span className="text-sm font-black">Google Play</span></span>
                  </a>
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    className="h-12 w-36 bg-zyone-dark rounded-lg flex items-center justify-center text-white gap-2 cursor-pointer hover:bg-black transition-colors"
                  >
                    <span className="text-[10px] font-bold text-left leading-none uppercase">Download on <br /><span className="text-sm font-black">App Store</span></span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-zyone-gold/10 rounded-full blur-3xl opacity-50" />
                <motion.div 
                  initial={{ opacity: 0, rotate: 5 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative bg-gray-100 rounded-[3rem] aspect-[9/16] max-w-[320px] mx-auto border-8 border-zyone-dark shadow-2xl overflow-hidden"
                >
                  {/* Mock App UI */}
                  <div className="h-full w-full bg-white flex flex-col">
                    <div className="h-20 bg-zyone-red p-6 flex items-end">
                      <div className="w-24 h-4 bg-white/20 rounded-full" />
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-square bg-gray-50 rounded-xl border border-gray-100" />
                        <div className="aspect-square bg-gray-50 rounded-xl border border-gray-100" />
                      </div>
                      <div className="h-20 bg-gray-50 rounded-xl border border-gray-100" />
                      <div className="h-40 bg-gray-50 rounded-xl border border-gray-100" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <KitSection />
      </main>

      <Footer />
    </div>
  );
}


import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ShoppingBag, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function EarningsEstimator() {
  const [dailySales, setDailySales] = useState(3);
  
  const PERFUME_PRICE = 36; // Updated profit per unit for 28ml
  const monthlyProfit = dailySales * PERFUME_PRICE * 30;

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-zyone-dark tracking-tighter uppercase">
            SIMULAÇÃO DE <span className="text-zyone-red">VENDAS EM 30 DIAS</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Veja quanto você pode ganhar revendendo os perfumes Zyone dependendo do seu esforço diário.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-zyone-red/10 rounded-lg">
                  <Calculator className="text-zyone-red" size={24} />
                </div>
                <h3 className="text-xl font-bold">Configure sua Meta</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">
                    Perfumes vendidos por dia: <span className="text-zyone-red text-lg ml-2">{dailySales}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={dailySales}
                    onChange={(e) => setDailySales(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-zyone-red"
                  />
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase">
                    <span>Iniciante (1)</span>
                    <span>Expert (20+)</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    "Simulação baseada no lucro médio de R$ 36,00 por perfume de 28ml vendido ao preço de catálogo."
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="mt-8 w-full py-4 bg-zyone-red text-white rounded-xl font-black text-sm tracking-widest uppercase hover:bg-zyone-red-dark transition-colors shadow-lg shadow-zyone-red/20 flex items-center justify-center"
            >
              CADASTRE-SE E COMECE AGORA
            </a>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            <div className="bg-zyone-dark rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <ShoppingBag className="text-zyone-gold mb-4" size={32} />
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Vendas Mensais</p>
                <h4 className="text-4xl font-black mt-1 leading-none">{dailySales * 30}</h4>
                <p className="text-zyone-gold text-sm font-medium mt-2">Unidades vendidas</p>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <ShoppingBag size={200} />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between">
              <div>
                <TrendingUp className="text-green-500 mb-4" size={32} />
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Lucro Estimado</p>
                <h4 className="text-4xl font-black mt-1 leading-none text-zyone-dark">
                  R$ {monthlyProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </h4>
                <p className="text-green-600 text-sm font-medium mt-2">Dinheiro no seu bolso</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>100% de lucro real</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>Produtos de alta demanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Baixo Investimento', bold: 'ALTO RETORNO' },
            { label: 'Suporte Completo', bold: 'PARA REVENDEDORES' },
            { label: 'Produtos de', bold: 'ALTA ACEITAÇÃO' },
            { label: 'Comunidade Exclusiva', bold: 'DE REVENDEDORES' }
          ].map((item, i) => (
            <div key={i} className="text-center p-4">
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter mb-1 leading-none">{item.label}</p>
              <p className="text-xs font-black text-zyone-dark tracking-tighter leading-none">{item.bold}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

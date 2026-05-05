import { motion } from 'motion/react';

const products = [
  {
    category: 'Perfumes Masculinos',
    image: 'https://placehold.co/800x1200/1A1A1A/FFFFFF?text=Perfume+Masculino+(Foto+2)',
    description: 'Zayan, Strong, Lord, Champion e muito mais.',
    brand: 'PREMIUM LINE'
  },
  {
    category: 'Perfumes Femininos',
    image: 'https://placehold.co/800x1200/C4272D/FFFFFF?text=Perfume+Feminino+(Foto+1)',
    description: 'Malirah, Noble, Magic, Love It e outras fragrâncias.',
    brand: 'PREMIUM LINE'
  },
  {
    category: 'Linha Árabe - Rubi/Dunes',
    image: 'https://placehold.co/800x1200/D4B475/1A1A1A?text=Linha+Arabe+Rubi+(Foto+4)',
    description: 'Luxo e exclusividade com a tradição cultural árabe.',
    brand: 'ORIENTAL LINE'
  },
  {
    category: 'Linha Árabe - Golden',
    image: 'https://placehold.co/800x1200/D4B475/1A1A1A?text=Linha+Arabe+Golden+(Foto+5)',
    description: 'Fragrâncias intensas com aura de mistério e charme.',
    brand: 'ORIENTAL LINE'
  },
  {
    category: 'Body Splash',
    image: 'https://placehold.co/800x1200/C4272D/FFFFFF?text=Body+Splash+(Foto+3)',
    description: 'Refrescância e fragrância para o dia a dia.',
    brand: 'SOFT TOUCH'
  },
  {
    category: 'Hidratantes',
    image: 'https://placehold.co/800x1200/A51D22/FFFFFF?text=Hidratantes+(Foto+6)',
    description: 'Toque sedoso e pele perfumada por mais tempo.',
    brand: 'NUTRITION'
  }
];

export default function ProductShowcase() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase leading-none">
              NOSSOS <span className="text-zyone-red">PRODUTOS</span>
            </h2>
            <p className="mt-4 text-gray-600 font-medium">
              Confira nossa linha completa de perfumaria fina e cuidados pessoais inspirada nas tendências internacionais.
            </p>
          </div>
          <a 
            href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
            className="px-8 py-3 border-2 border-zyone-dark text-zyone-dark font-black text-xs tracking-widest uppercase hover:bg-zyone-dark hover:text-white transition-all text-center"
          >
            VER CATÁLOGO COMPLETO
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a 
              key={product.category}
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.category}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zyone-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase rounded">
                      {product.brand}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{product.category}</h3>
                    <p className="text-sm opacity-80 leading-snug line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Feature bar */}
        <div className="mt-20 bg-zyone-dark rounded-3xl p-1 px-1 flex flex-col md:flex-row items-stretch gap-1">
          {[
            { label: 'MAIS DE 100 MIL', sub: 'CONSULTORES CADASTRADOS' },
            { label: '+ DE 700', sub: 'PONTOS DE APOIO NO BRASIL' },
            { label: 'LUCRO DE ATÉ', sub: '200% EM CADA PRODUTO' }
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/5">
              <p className="text-2xl font-black mb-1">{stat.label}</p>
              <p className="text-[10px] font-bold text-zyone-gold uppercase tracking-[0.2em]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

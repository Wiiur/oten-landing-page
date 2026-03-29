import React, { useState } from 'react';
import imgOperacional from '../assets/operacional.png';
import imgComercial from '../assets/repositor.png';
import imgCorporativo from '../assets/executivo.png';
import imgRecepcao from '../assets/atentente.png';

// Array atualizado com os dados do pop-up
const solutions = [
  {
    id: 1,
    title: "Atendimento e Recepção",
    image: imgRecepcao, 
    description: "Para quem é o cartão de visitas da empresa, a apresentação impecável e o conforto térmico são essenciais para um longo dia de atendimento.",
    recommendations: [
      "Polo em piquet anti-pilling",
      "Malha premium em poliamida"
    ]
  },
  {
    id: 2,
    title: "Manutenção e Operacional",
    image: imgOperacional, 
    description: "Foco total em resistência e segurança. Precisamos de tecidos que aguentem a rotina pesada, lavagens frequentes e não restrinjam o movimento.",
    recommendations: [
      "PV (Poliéster + Viscose) alta durabilidade",
      "Algodão premium respirável"
    ]
  },
  {
    id: 3,
    title: "Comércio e Varejo",
    image: imgComercial, 
    description: "Equipes em constante movimento precisam de uniformes práticos, que não amassem fácil e mantenham a identidade visual da loja sempre em destaque.",
    recommendations: [
      "Polo em piquet anti-pilling",
      "Algodão premium respirável",
      "Aventais personalizados"
    ]
  },
  {
    id: 4,
    title: "Corporativo e Executivo",
    image: imgCorporativo, 
    description: "Elegância e sobriedade. Peças com caimento perfeito que transmitem autoridade e confiança para reuniões e ambiente de escritório.",
    recommendations: [
      "Malha premium em poliamida",
      "Algodão premium respirável"
    ]
  }
];

export default function Solutions() {
  // Estado para controlar qual modal está aberto
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="py-20 px-6 md:px-16 max-w-[1400px] mx-auto w-full relative overflow-hidden">
      
      {/* Título e Linha Divisória - Entra deslizando */}
      <div className="mb-12 border-b border-gray-300 pb-8 opacity-0 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-telegraf text-gray-900 leading-tight">
          Soluções para <br /> cada setor
        </h2>
      </div>

      {/* Grid de 4 Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((item, index) => (
          <div 
            key={item.id} 
            className="group flex flex-col opacity-0 animate-fade-in-up"
            // Delay em escadinha: a foto 1 entra rápido, a 2 demora um pouquinho mais, etc.
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            
            {/* Container da Imagem com as suas configurações */}
            <div 
              className="relative w-full rounded-lg aspect-[3/5] overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => setActiveModal(item)} // Clicar na imagem também abre o pop-up
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Botão Saiba Mais Flutuante */}
              <div className="absolute bottom-5 right-5">
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Evita dar duplo clique junto com a imagem
                    setActiveModal(item);
                  }}
                  className="bg-white/95 text-gray-900 text-sm font-bold py-2 px-5 rounded-full shadow-lg hover:bg-white transition-colors hover:scale-105"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* Legenda abaixo da foto */}
            <p className="mt-4 text-sm text-gray-500 font-medium tracking-wide">
              {item.title} - 2026
            </p>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* CÓDIGO DO POP-UP (MODAL)                   */}
      {/* ========================================== */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setActiveModal(null)} // Clicar fora fecha
        >
          {/* Caixa branca */}
          <div 
            className="bg-[#F8F7F2] w-full max-w-lg rounded-2xl p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Clicar dentro não fecha
          >
            {/* Botão X */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-3xl font-bold p-2 leading-none transition-transform hover:scale-110"
            >
              &times;
            </button>

            {/* Conteúdo */}
            <h3 className="font-telegraf font-bold text-2xl text-gray-900 mb-4 pr-6">
              {activeModal.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {activeModal.description}
            </p>

            {/* Lista de Materiais da Oten */}
            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <h4 className="font-michroma text-xs tracking-wider text-gray-900 uppercase mb-3">
                Materiais Recomendados:
              </h4>
              <ul className="space-y-3">
                {activeModal.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm font-medium">
                    <span className="text-blue-600 mr-3 text-lg">✔</span> 
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão Orçar */}
            <a 
              href="https://wa.me/5519996124197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center bg-[#1A1A1A] hover:bg-black text-white py-3 rounded-full font-medium transition-colors"
            >
              Orçar esta solução
            </a>
          </div>
        </div>
      )}

    </section>
  );
}
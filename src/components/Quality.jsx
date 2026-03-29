import React, { useState } from 'react';

import imgAlfaiataria from '../assets/alfaiataria.png'; 
import imgDurabilidade from '../assets/durabilidade.png'; 
import imgConforto from '../assets/conforto.png'; 

// Array com os dados enriquecidos para o pop-up
const qualityImages = [
  {
    id: 1,
    title: "Alfaiataria Premium",
    image: imgAlfaiataria,
    description: "As nossas peças de alfaiataria são desenvolvidas com cortes precisos e modelagens modernas, garantindo um caimento impecável que valoriza a imagem corporativa com extrema elegância.",
    features: [
      "Corte ergonómico e ajustado",
      "Acabamento interno reforçado",
      "Colarinhos e punhos estruturados"
    ]
  },
  {
    id: 2,
    title: "Durabilidade Garantida",
    image: imgDurabilidade, 
    description: "Uniformes que resistem à rotina. Trabalhamos com tecidos e costuras projetados para suportar o uso diário e lavagens frequentes, sem perder a cor ou a forma original.",
    features: [
      "Costuras duplas de alta resistência",
      "Tecidos com tecnologia anti-desbotamento",
      "Fechos e botões de padrão industrial"
    ]
  },
  {
    id: 3,
    title: "Conforto para o Dia a Dia",
    image: imgConforto, 
    description: "Acreditamos que quem veste o uniforme precisa de se sentir bem o dia todo. Os nossos tecidos oferecem flexibilidade, toque suave e excelente respirabilidade térmica.",
    features: [
      "Tecidos com toque macio na pele",
      "Respirabilidade e controlo térmico",
      "Modelagem que permite livre movimento"
    ]
  }
];

export default function Quality() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="py-20 px-6 md:px-16 max-w-[1400px] mx-auto w-full relative overflow-hidden">
      
      {/* Título e Linha */}
      <div className="mb-12 border-b border-gray-300 pb-8 opacity-0 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-telegraf text-gray-900 leading-tight">
          Qualidade em <br /> cada detalhe
        </h2>
      </div>

      {/* Grid de 4 Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Coluna 1: Espaço vazio + Botão no fundo */}
        <div className="flex flex-col justify-end pb-8 md:col-span-1 hidden md:flex opacity-0 animate-fade-in-delayed">
          <a 
            href="https://wa.me/5519996124197" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#1A1A1A] hover:bg-black text-white text-sm px-6 py-3 rounded-full font-medium transition-colors w-max shadow-md hover:scale-105"
          >
            Solicite um orçamento
          </a>
        </div>

        {/* Colunas 2, 3 e 4: Imagens */}
        {qualityImages.map((item, index) => (
          <div 
            key={item.id} 
            className="group relative flex flex-col opacity-0 animate-fade-in-up"
            // Adicionando um pequeno atraso (delay) baseado no index para as imagens entrarem em "escadinha"
            style={{ animationDelay: `${(index + 1) * 200}ms` }} 
          >
            {/* Caixa da Imagem e Botão */}
            <div 
              className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200 cursor-pointer rounded-xl"
              onClick={() => setActiveModal(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Botão Saiba Mais Flutuante dentro da div da imagem */}
              <div className="absolute bottom-4 right-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(item);
                  }}
                  className="bg-white/95 text-gray-900 text-xs font-bold py-2 px-4 rounded-full shadow-md hover:bg-white transition-colors flex items-center gap-1"
                >
                  Saiba Mais <span className="text-[10px]">✦</span>
                </button>
              </div>
            </div>

            {/* Título da Imagem */}
            <p className="mt-4 text-sm text-gray-500 font-medium">{item.title}</p>
          </div>
        ))}
        
        {/* Botão visível apenas no formato Mobile */}
        <div className="flex justify-center mt-6 md:hidden opacity-0 animate-fade-in-delayed">
           <a 
            href="https://wa.me/5519996124197" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-medium shadow-md hover:scale-105"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>

      {/* ========================================== */}
      {/* CÓDIGO DO POP-UP (MODAL)                   */}
      {/* ========================================== */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setActiveModal(null)} 
        >
          {/* Caixa branca do Modal */}
          <div 
            className="bg-[#F8F7F2] w-full max-w-lg rounded-2xl p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-3xl font-bold p-2 leading-none"
            >
              &times;
            </button>

            <h3 className="font-telegraf font-bold text-2xl text-gray-900 mb-4 pr-6">
              {activeModal.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {activeModal.description}
            </p>

            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <h4 className="font-michroma text-xs tracking-wider text-gray-900 uppercase mb-3">
                Os nossos diferenciais:
              </h4>
              <ul className="space-y-3">
                {activeModal.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm font-medium">
                    <span className="text-blue-600 mr-3 text-lg">✦</span> 
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://wa.me/5519996124197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center bg-[#1A1A1A] hover:bg-black text-white py-3 rounded-full font-medium transition-colors"
            >
              Desejo este padrão
            </a>
          </div>
        </div>
      )}

    </section>
  );
}
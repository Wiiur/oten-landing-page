import React from 'react';

export default function HowItWorks() {
  const steps = [
    "Entendimento da Demanda",
    "Apresentação e Mockups",
    "Aprovação e Produção",
    "Entrega Rápida"
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto w-full border-t border-gray-200 mt-10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Lado Esquerdo - Textos e Botão */}
        <div className="flex flex-col justify-start">
          
          {/* Título - Entra deslizando para cima */}
          <h2 className="text-4xl md:text-5xl font-telegraf text-gray-900 mb-8 leading-tight opacity-0 animate-fade-in-up">
            Como funciona <br /> nosso atendimento
          </h2>
          
          {/* Textos - Acompanham o título */}
          <div className="text-gray-500 text-lg space-y-6 max-w-md opacity-0 animate-fade-in-up">
            <p>
              Para criar um projeto de uniformização perfeito, é necessário entender a essência e os objetivos da sua empresa.
            </p>
            <p>
              Depois da nossa primeira conversa, apresentamos um projeto visual alinhado à sua marca e só então afinamos as modelagens e tecidos de acordo com a sua necessidade.
            </p>
          </div>
          
          {/* Botão - Entra com atraso */}
          <div className="mt-10 opacity-0 animate-fade-in-delayed">
            <a 
              href="https://wa.me/5519996124197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1A1A1A] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
            >
              Marque uma reunião
            </a>
          </div>
        </div>

        {/* Lado Direito - Linha do Tempo - Entra com atraso */}
        <div className="relative border-l border-gray-300 pl-8 md:pl-16 py-4 flex flex-col justify-between space-y-12 opacity-0 animate-fade-in-delayed">
          {steps.map((step, index) => (
            <div key={index} className="relative group cursor-default">
              
              {/* Bolinha na linha (ganha destaque ao passar o mouse) */}
              <div className="absolute -left-[37px] md:-left-[69px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full transition-colors group-hover:bg-blue-600 group-hover:scale-125 duration-300"></div>
              
              <h3 className="text-2xl md:text-3xl text-gray-900 font-telegraf tracking-wide transition-colors group-hover:text-blue-600">
                {step}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
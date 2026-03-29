import React from 'react';
import imgCallToAction from '../assets/footer-background.png';

export default function CallToAction() {
  return (
    <section 
      className="relative w-full h-[110vh] min-h-[500px] flex items-center px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${imgCallToAction})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay escuro bem leve para garantir leitura */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Título Principal - Entra deslizando para cima */}
      <div className="relative z-10 max-w-3xl opacity-0 animate-fade-in-up">
        <h2 className="font-telegraf text-5xl md:text-7xl text-white leading-tight drop-shadow-lg">
          Vamos padronizar <br />
          a sua equipe com <br />
          sucesso?
        </h2>
      </div>

      {/* Detalhe Arquitetônico: Barra preta no rodapé - Entra com fade atrasado */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-[#1A1A1A] z-10 opacity-0 animate-fade-in-delayed">
        
        {/* Linha horizontal fina cruzando a barra */}
        <div className="absolute bottom-4 left-0 w-full h-[1px] bg-white/30 z-20"></div>

        {/* Linhas verticais agrupadas à direita (simulando o grid) */}
        <div className="absolute inset-0 w-full h-full flex justify-end">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index} 
              className="w-[1px] h-full bg-white/30 ml-6 md:ml-12"
            ></div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
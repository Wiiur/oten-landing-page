import React from 'react';
import heroBg from '../assets/hero-background.png';
import logo_oten from '../assets/logo-oten.png';

export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Camada escura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Topo / Logo */}
      {/* No celular: 100% de largura e centralizado. No PC: alinhado à esquerda */}
      <div className="absolute top-10 md:top-8 w-full md:w-auto left-0 md:left-16 flex flex-col items-center md:items-start z-10 opacity-0 animate-fade-in">
        <img 
          src={logo_oten} 
          alt="Logo Oten" 
          className="h-14 md:h-20 w-auto" 
        />
        <p className="font-michroma text-white text-xs md:text-sm tracking-[0.4em] md:tracking-[0.6em] -mt-4 md:-mt-6">
          Confecções
        </p>
        {/* Este texto pequeno eu ESCONDI no celular (hidden) e deixei só no PC (md:block) para não repetir com o título principal! */}
        <p className="font-michroma text-white text-[0.6rem] tracking-widest mt-1 hidden md:block md:text-left text-center">
          Vestindo a excelência <br/>da sua empresa.
        </p>
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center max-w-4xl mt-16 md:mt-24 px-2 opacity-0 animate-fade-in-up">
        <h1 className="font-telegraf font-medium text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 drop-shadow-lg tracking-tight leading-tight">
          Vestindo a excelência <br className="hidden md:block" /> da sua empresa.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-telegraf max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Uniformes corporativos com design, conforto e alta durabilidade. Valorize a imagem da sua marca e a autoestima da sua equipe.
        </p>
      </div>

      {/* Área Inferior (Botão e Texto Menor) */}
      {/* No celular: totalmente centralizado no fundo. No PC: alinhado à direita */}
      <div className="absolute bottom-10 md:bottom-10 w-full px-6 md:px-0 md:right-16 md:w-auto z-10 flex flex-col items-center md:items-end gap-3 md:gap-4 text-center md:text-right opacity-0 animate-fade-in-delayed">
        <a 
          href="https://wa.me/5519996124197" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-3 w-full max-w-[300px] md:w-auto md:max-w-none rounded-full font-bold transition-all shadow-xl hover:scale-105"
        >
          Falar com um Consultor
        </a>
        <p className="max-w-[250px] md:max-w-[180px] text-xs md:text-sm text-gray-300 font-medium leading-relaxed md:leading-tight drop-shadow-md">
          Especialistas em padronização corporativa e industrial.
        </p>
      </div>
    </section>
  );
}
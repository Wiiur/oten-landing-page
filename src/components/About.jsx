import React from 'react';
import imgAbout from '../assets/about.png'; 

export default function About() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto w-full overflow-hidden">
      
      {/* Título Principal - Entra deslizando para cima */}
      <h2 className="text-3xl md:text-5xl font-telegraf text-gray-900 mb-16 leading-tight max-w-2xl opacity-0 animate-fade-in-up">
        Muito mais que tecido, <br /> entregamos identidade.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Lado Esquerdo - Imagem com entrada suave */}
        <div className="w-full aspect-square md:aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-xl opacity-0 animate-fade-in">
          <img 
            src={imgAbout}
            alt="Profissionais com uniforme premium" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Lado Direito - Textos e Botão com entrada atrasada para criar sequência */}
        <div className="flex flex-col justify-center opacity-0 animate-fade-in-delayed">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              O uniforme da sua equipe é a primeira impressão que o seu cliente tem do seu negócio. 
              Mais do que apenas vestuário, ele é uma ferramenta estratégica de branding, organização e pertencimento.
            </p>
            <p>
              Entendemos que quem veste o uniforme precisa se sentir bem o dia todo. Por isso, 
              desenvolvemos peças com modelagens ergonômicas, cortes modernos e tecidos tecnológicos de alta durabilidade.
            </p>
            <p>
              Seja para a linha de frente do atendimento, área da saúde, gastronomia ou setor operacional, 
              unimos estética impecável com o conforto necessário para a rotina da sua equipe. 
              Fazemos com que seus colaboradores vistam a camisa da empresa com orgulho e elegância.
            </p>
          </div>

          {/* Tópicos com Check */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold text-xl">✔</span> Tecidos que não desbotam fácil
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold text-xl">✔</span> Modelagem que valoriza o profissional
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold text-xl">✔</span> Projetos exclusivos para o seu nicho
            </div>
          </div>

          {/* Botão Escuro */}
          <div className="mt-10">
            <a 
              href="https://wa.me/5519996124197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1A1A1A] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
import React from 'react';

export default function Testimonials() {
  const depoimentos = [
    {
      texto: "Os uniformes mudaram a postura da nossa equipe de vendas. Material excelente e entrega no prazo!",
      autor: "João, Gerente Comercial"
    },
    {
      texto: "Trabalhamos na indústria pesada e precisávamos de durabilidade. As peças superaram as expectativas.",
      autor: "Carlos, Setor Operacional"
    },
    {
      texto: "Contratei para a recepção da minha clínica e a experiência foi incrível. Caimento perfeito.",
      autor: "Luan Pacheco, Diretor Médico"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto w-full border-t border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Lado Esquerdo - Título - Entra deslizando */}
        <div className="opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-telegraf text-gray-900 leading-tight">
            O que dizem <br /> nossos <br /> parceiros
          </h2>
        </div>

        {/* Lado Direito - Textos */}
        <div className="space-y-16 border-l border-gray-300 pl-8 md:pl-16">
          {depoimentos.map((item, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in-up transition-transform duration-300 hover:-translate-y-1 cursor-default"
              // Delay em cascata: cada depoimento entra um pouquinho depois do outro
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <p className="text-gray-500 text-lg leading-relaxed mb-4 italic">
                "{item.texto}"
              </p>
              <p className="text-gray-900 font-bold text-sm tracking-wide">
                - {item.autor}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
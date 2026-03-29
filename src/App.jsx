import React, { useEffect } from 'react';
// 1. Importações da biblioteca de animação AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importação dos seus componentes
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Quality from './components/Quality';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  
  // 2. Iniciando o AOS assim que o site carrega
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação (0.8 segundos)
      once: true, // A animação acontece só uma vez (quando rola pra baixo)
      offset: 100, // Começa a animar 100px antes do elemento aparecer na tela
    });
  }, []);

  return (
    <main className="w-full min-h-screen relative">
      
      {/* Aqui entrará o seu futuro <Header /> (Menu fixo) */}
      <Hero />
      <Solutions />
      <About />
      <Quality />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* 3. O Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/5519996124197" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.031 2.008C6.526 2.008 2.05 6.488 2.05 11.99c0 1.76.46 3.473 1.332 4.98L2 22l5.168-1.354c1.46.81 3.125 1.24 4.863 1.24 5.503 0 9.98-4.48 9.98-9.981 0-5.503-4.477-9.897-9.98-9.897zm5.558 14.197c-.233.655-1.35 1.21-1.856 1.278-.426.056-.993.11-2.831-.655-2.222-.924-3.664-3.194-3.774-3.34-.111-.148-.902-1.2-1.03-2.285-.127-1.085.412-1.616.634-1.854.221-.238.482-.298.643-.298.16 0 .321.004.46.012.149.008.349-.06.536.388.192.46.657 1.604.714 1.723.058.119.096.257.019.412-.077.155-.115.254-.23.388-.115.135-.245.289-.345.388-.111.112-.229.234-.103.452.126.218.563.931 1.205 1.503.83.738 1.527.967 1.75.109.222-.047.349-.138.483-.297.134-.159.268-.535.345-.733.076-.198.153-.166.333-.099.18.067 1.141.535 1.337.635.195.099.325.148.375.23.05.083.05.476-.184 1.13z"/>
        </svg>
      </a>

    </main>
  );
}

export default App;
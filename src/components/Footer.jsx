import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20 px-6 md:px-16 relative overflow-hidden">
      
      {/* Detalhe de linhas no canto superior direito - Entra com fade suave */}
      <div className="absolute top-0 right-0 opacity-0 animate-fade-in pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0V100H400" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
          <path d="M150 0V150H400" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
          <path d="M200 0V200H400" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
          <path d="M250 0V250H400" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
          <path d="M300 0V300H400" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Bloco Esquerdo - Título e Contato - Desliza para cima */}
        <div className="flex flex-col h-full opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-telegraf mb-12 max-w-sm leading-tight">
            Vamos criar um projeto único?
          </h2>
          <div className="space-y-2 font-medium">
            <p>Tel: (19) 99612-4197</p>
            <p>otenoficial@hotmail.com</p>
          </div>

          {/* Destaque para a Linha Esportiva */}
          <div className="mt-16 bg-white/5 p-6 rounded-xl border border-white/10 max-w-md">
            <h3 className="text-xl font-michroma text-white mb-3 flex items-center gap-2">
              Linha Esportiva
            </h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Também somos especialistas em materiais de alta performance. Desenvolvemos <strong>camisetas esportivas Dry Fit</strong> (poliéster e poliamida com elastano) e <strong>coletes esportivos personalizados</strong>.
            </p>
            
            {/* Botão Instagram Esportivo */}
            <a 
              href="https://instagram.com/otensport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors bg-white/10 px-4 py-2 rounded-full"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Conheça nosso perfil
            </a>
          </div>
        </div>

        {/* Bloco Direito - Informações - Entra com atraso */}
        <div className="space-y-10 flex flex-col justify-between opacity-0 animate-fade-in-delayed">
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-3">Horário de funcionamento</h3>
              <p className="text-gray-400 text-sm">Segunda a sexta</p>
              <p className="text-gray-400 text-sm">Das 08h às 18h</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Endereço</h3>
              <p className="text-gray-400 text-sm">R. São Gonçalo, 40 - Jardim Nossa Sra. do Carmo - Americana - SP, 13472-280</p>
            </div>
          </div>

          {/* Redes Sociais Principais */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
            
            <a 
              href="https://instagram.com/Otenuniformes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>

            <a 
              href="https://wa.me/5519996124197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all group"
              aria-label="WhatsApp"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110">
                <path d="M12.031 2.008C6.526 2.008 2.05 6.488 2.05 11.99c0 1.76.46 3.473 1.332 4.98L2 22l5.168-1.354c1.46.81 3.125 1.24 4.863 1.24 5.503 0 9.98-4.48 9.98-9.981 0-5.503-4.477-9.897-9.98-9.897zm5.558 14.197c-.233.655-1.35 1.21-1.856 1.278-.426.056-.993.11-2.831-.655-2.222-.924-3.664-3.194-3.774-3.34-.111-.148-.902-1.2-1.03-2.285-.127-1.085.412-1.616.634-1.854.221-.238.482-.298.643-.298.16 0 .321.004.46.012.149.008.349-.06.536.388.192.46.657 1.604.714 1.723.058.119.096.257.019.412-.077.155-.115.254-.23.388-.115.135-.245.289-.345.388-.111.112-.229.234-.103.452.126.218.563.931 1.205 1.503.83.738 1.527.967 1.75.109.222-.047.349-.138.483-.297.134-.159.268-.535.345-.733.076-.198.153-.166.333-.099.18.067 1.141.535 1.337.635.195.099.325.148.375.23.05.083.05.476-.184 1.13z"/>
              </svg>
            </a>

            <p className="text-xs text-gray-500 ml-auto text-right">
              Oten Confecções © 2026.<br />Todos os direitos reservados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
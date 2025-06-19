import React, { useState } from 'react';

const faqsData = [
  {
    id: 1,
    question: "¿Qué es un avance de efectivo con EfectiGo?",
    answer: "Es un adelanto de dinero rápido y sin complicaciones, pensado para trabajadores independientes o contratistas. Lo recibes en minutos y lo devuelves en pagos semanales."
  },
  {
    id: 2,
    question: "¿Necesito tener buen crédito?",
    answer: "No. En EfectiGo no revisamos tu historial de crédito. Evaluamos tu solicitud con base en tu actividad laboral reciente."
  },
  {
    id: 3,
    question: "¿Cuánto dinero puedo recibir?",
    answer: "Puedes solicitar entre $200 y $1,000, dependiendo de tu perfil y necesidades."
  },
  {
    id: 4,
    question: "¿En cuánto tiempo recibo el dinero?",
    answer: "¡Rápido! Si cumples los requisitos, puedes tener el dinero el mismo día, incluso en menos de una hora."
  },
  {
    id: 5,
    question: "¿Qué necesito para aplicar?",
    answer: "Solo necesitas: ✔️ Ser mayor de 21 años ✔️ Tener identificación válida (de cualquier país) ✔️ Contar con cuenta bancaria activa en EE.UU. ✔️ Tener ingresos demostrables recientes"
  },
  {
    id: 6,
    question: "¿Cómo se hacen los pagos?",
    answer: "Puedes elegir entre pagos semanales durante 2 semanas, 6 u 8 semanas. Los pagos se descuentan automáticamente desde tu cuenta bancaria. "
  }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full ">
      <img
        src="/public/images/red-line.svg"
        alt="red line"
        className="absolute top-0 right-0 w-70 z-0 pointer-events-none"
        style={{ userSelect: "none" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto py-30 lg:py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Preguntas <span className="text-[#E62828]">Frecuentes</span>
        </h2>
        <div>
          {faqsData.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 overflow-hidden"
            >
              <button
                type="button"
                className="w-full p-6 text-left flex justify-between items-center hover:text-[#E62828] transition-colors cursor-pointer group"
                onClick={() => handleClick(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span 
                  className={`w-4 h-4 border-r-2 border-b-2 border-gray-600 transform transition-transform duration-200 group-hover:border-[#E62828] ${
                    activeIndex === index ? 'rotate-45 translate-y-1' : '-rotate-45'
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

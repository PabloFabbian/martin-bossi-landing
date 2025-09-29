import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "No soy importador registrado. ¿Puedo traer mercadería?",
        answer:
            "¡Sí! En Martin Bossi SRL nos encargamos de todo el proceso de importación. Adquirimos la mercadería en el exterior y la traemos a Argentina, para luego transferírtela, incluso si no tenés experiencia o registro como importador.",
    },
    {
        question: "Quiero importar un producto, pero no estoy seguro de su calidad. ¿Qué puedo hacer?",
        answer:
            "Podemos ayudarte a encontrar el producto que buscás, ofreciéndote distintas opciones de calidad y precios directos de fábrica. Además, coordinamos el muestreo de piezas con el proveedor para que tengas seguridad antes de realizar la compra.",
    },
    {
        question: "Ya tengo mi proveedor, despachante y forwarder. ¿Puedo trabajar con ustedes?",
        answer:
            "¡Claro! No es necesario cambiar tu equipo actual. Podemos integrarnos a tu estructura y asistirte en cualquier etapa del proceso de importación que necesites.",
    },
    {
        question: "¿Existe un volumen mínimo de mercadería para importar?",
        answer:
            "No existe un mínimo obligatorio. Sin embargo, cuando se trata de unidades únicas o escasas, los costos de transporte e impuestos pueden hacer que la operación no sea rentable. En estos casos, la consolidación de carga LCL es la opción más económica y eficiente. Consultanos y te asesoramos.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(() => {
        return window.innerWidth >= 768 ? 0 : null;
    });
    const [showContactForm, setShowContactForm] = useState(false);
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const openContactFormWithFAQ = () => {
        setShowContactForm(true);
    };

    const closeContactForm = () => {
        setShowContactForm(false);
    };

    useEffect(() => {
        const el = sectionRef.current;
        const items = itemRefs.current;
        const title = el.querySelector('.faq-title');
        const subtitle = el.querySelector('.faq-subtitle');
        const description = el.querySelector('.faq-description');
        const cta = el.querySelector('.faq-cta');

        gsap.fromTo(
            [title, subtitle, description],
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            }
        );

        if (cta) {
            gsap.fromTo(
                cta,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cta,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <section
                id="faq"
                ref={sectionRef}
                className="bg-gradient-to-b from-[#050f24] via-[#001d3d] to-[#001d3d] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 scroll-mt-0 md:scroll-mt-12 2xl:scroll-mt-10"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <p className="faq-title text-white text-xs uppercase tracking-wide mb-4 sm:mb-6">
                            FAQ
                        </p>
                        <h2 className="faq-subtitle text-white text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold leading-tight mb-4 sm:mb-6 px-2">
                            Preguntas <span className="text-[#0466C8]">Frecuentes</span>
                        </h2>
                        <p className="faq-description text-white/80 text-base sm:text-lg px-2 max-w-2xl mx-auto">
                            Todo lo que necesitas saber sobre nuestros servicios
                        </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={el => itemRefs.current[index] = el}
                                className={`bg-gradient-to-br from-[#001d3d]/40 to-[#001645]/20 border rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-[#0466C8]/60 transition-all duration-300 backdrop-blur-sm ${openIndex === index
                                    ? 'border-[#0466C8]/60 shadow-xl'
                                    : 'border-[#0353A4]/30'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-start sm:items-center p-4 sm:p-6 text-left text-white font-medium hover:bg-white/5 transition-colors duration-200 gap-3 sm:gap-4"
                                >
                                    <span className="text-sm sm:text-base md:text-lg leading-relaxed flex-1 pr-2">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`text-xl font-bold transform transition-all duration-300 flex-shrink-0 ${openIndex === index
                                            ? "rotate-45 text-[#0466C8] scale-110"
                                            : "text-white/60 hover:text-white/80"
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`px-4 sm:px-6 text-white/80 leading-relaxed transition-all duration-300 ease-in-out text-sm sm:text-base ${openIndex === index
                                        ? "max-h-96 sm:max-h-48 opacity-100 pb-4 sm:pb-6"
                                        : "max-h-0 opacity-0 overflow-hidden pb-0"
                                        }`}
                                >
                                    <div className="border-t border-[#0353A4]/20 pt-3 sm:pt-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-cta text-center mt-8 sm:mt-10 md:mt-12">
                        <p className="text-white/60 mb-3 sm:mb-4 text-sm sm:text-base px-2">
                            ¿No encontraste la respuesta que buscabas?
                        </p>
                        <button
                            onClick={openContactFormWithFAQ}
                            className="text-[#0466C8] hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#0353A4] hover:border-[#0466C8] hover:bg-[#0466C8]/10 text-sm font-medium transition-all duration-300 mx-2"
                        >
                            Contactanos directamente
                        </button>
                    </div>
                </div>
            </section>

            <ContactForm
                isOpen={showContactForm}
                onClose={closeContactForm}
                prefilledTema="Pregunta sobre FAQ"
            />
        </>
    );
};

export default FAQ;
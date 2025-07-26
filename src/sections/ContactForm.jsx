import React, { useRef, useEffect, forwardRef } from 'react';
import { gsap } from 'gsap';
import { useClickOutside } from '../hooks/useClickOutside';
import { useFormData } from '../hooks/useFormData';
import { useDropdownState } from '../hooks/useDropdownState';
import ContactInfo from '../components/ContactInfo';
import InputField from '../components/ui/InputField';
import CustomDropdown from '../components/ui/CustomDropdown';
import { FORM_OPTIONS, INITIAL_FORM_DATA } from '../data/formOptions';

const ContactForm = forwardRef(({ isOpen, onClose }, ref) => {
  const containerRef = ref || useRef(null);
  const innerRef = useRef(null);
  const { formData, handleInputChange, updateField } = useFormData(INITIAL_FORM_DATA);
  const { dropdownStates, toggleDropdown, closeAllDropdowns } = useDropdownState([
    'tipoProyecto',
    'presupuesto',
    'tema',
  ]);
  const dropdownRefs = useRef({});

  useClickOutside(dropdownRefs, closeAllDropdowns);

  const handleDropdownSelect = (dropdownName, value) => {
    updateField(dropdownName, value);
    closeAllDropdowns();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, pointerEvents: 'none' },
        {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => {
            gsap.fromTo(
              innerRef.current.children,
              { opacity: 0, y: -20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
              }
            );
          },
        }
      );
    } else {
      gsap.to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isOpen, containerRef]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      style={{ opacity: 0, pointerEvents: 'none' }}
      aria-hidden={!isOpen}
    >
      <div
        ref={innerRef}
        className="bg-[#030B1A] text-white rounded-3xl p-12 max-w-7xl w-full mx-4 grid grid-cols-1 lg:grid-cols-2 gap-12 shadow-[0_0_75px_30px_rgba(255,217,113,0.1)] scale-90 relative"
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 text-3xl font-bold z-10"
            aria-label="Cerrar formulario"
          >
            ×
          </button>
        )}

        <ContactInfo />

        <div>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />

              <InputField
                label="Correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomDropdown
                name="tipoProyecto"
                label="Tipo de proyecto"
                placeholder="Selecciona uno..."
                options={FORM_OPTIONS.tipoProyecto}
                value={formData.tipoProyecto}
                isOpen={dropdownStates.tipoProyecto}
                onToggle={() => toggleDropdown('tipoProyecto')}
                onSelect={(value) => handleDropdownSelect('tipoProyecto', value)}
                setRef={(el) => (dropdownRefs.current.tipoProyecto = el)}
              />

              <CustomDropdown
                name="presupuesto"
                label="Presupuesto"
                placeholder="Selecciona uno..."
                options={FORM_OPTIONS.presupuesto}
                value={formData.presupuesto}
                isOpen={dropdownStates.presupuesto}
                onToggle={() => toggleDropdown('presupuesto')}
                onSelect={(value) => handleDropdownSelect('presupuesto', value)}
                setRef={(el) => (dropdownRefs.current.presupuesto = el)}
              />
            </div>

            <CustomDropdown
              name="tema"
              label="Selecciona un tema"
              placeholder="Selecciona uno..."
              options={FORM_OPTIONS.tema}
              value={formData.tema}
              isOpen={dropdownStates.tema}
              onToggle={() => toggleDropdown('tema')}
              onSelect={(value) => handleDropdownSelect('tema', value)}
              setRef={(el) => (dropdownRefs.current.tema = el)}
            />

            <InputField
              label="Detalles Adicionales"
              name="detalles"
              type="textarea"
              rows={5}
              value={formData.detalles}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
            />

            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;
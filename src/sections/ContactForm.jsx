import React, { useRef, useEffect, forwardRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { useClickOutside } from '../hooks/useClickOutside';
import { useFormData } from '../hooks/useFormData';
import { useDropdownState } from '../hooks/useDropdownState';
import ContactInfo from '../components/ContactInfo';
import InputField from '../components/ui/InputField';
import CustomDropdown from '../components/ui/CustomDropdown';
import { FORM_OPTIONS, INITIAL_FORM_DATA } from '../data/formOptions';

const ContactForm = forwardRef(({ isOpen, onClose }, ref) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const { formData, handleInputChange, updateField } = useFormData(INITIAL_FORM_DATA);
  const { dropdownStates, toggleDropdown, closeAllDropdowns } = useDropdownState([
    'tipoProyecto',
    'presupuesto',
    'tema',
  ]);
  const dropdownRefs = useRef({});
  const firstFocusableElement = useRef(null);
  const lastFocusableElement = useRef(null);

  const combinedRef = ref || containerRef;

  useClickOutside(dropdownRefs, closeAllDropdowns);

  const handleDropdownSelect = useCallback((dropdownName, value) => {
    updateField(dropdownName, value);
    closeAllDropdowns();
  }, [updateField, closeAllDropdowns]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }, [formData]);

  useEffect(() => {
    if (isOpen) {
      const focusableElements = combinedRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements?.length) {
        firstFocusableElement.current = focusableElements[0];
        lastFocusableElement.current = focusableElements[focusableElements.length - 1];
        firstFocusableElement.current.focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose?.();
        }
        
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstFocusableElement.current) {
            e.preventDefault();
            lastFocusableElement.current.focus();
          } else if (!e.shiftKey && document.activeElement === lastFocusableElement.current) {
            e.preventDefault();
            firstFocusableElement.current.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose, combinedRef]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.set(combinedRef.current, { opacity: 0 });
        gsap.set(innerRef.current, { y: 20, opacity: 0 });
        gsap.set(innerRef.current.children, { y: 10, opacity: 0 });

        gsap.timeline({
          defaults: { ease: 'power3.out' }
        })
        .to(combinedRef.current, {
          opacity: 1,
          duration: 0.35
        })
        .to(innerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.45
        }, '-=0.15')
        .to(innerRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.07
        }, '-=0.2');
      } else {
        gsap.timeline()
        .to(innerRef.current.children, {
          y: -10,
          opacity: 0,
          duration: 0.2,
          stagger: 0.03
        })
        .to(innerRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.25
        }, '-=0.1')
        .to(combinedRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.set(combinedRef.current, { pointerEvents: 'none' });
          }
        }, '-=0.1');
      }
    }, combinedRef);

    if (isOpen) {
      gsap.set(combinedRef.current, { pointerEvents: 'auto' });
    }

    return () => ctx.revert();
  }, [isOpen, combinedRef]);

  return (
    <div
      ref={combinedRef}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      style={{ 
        opacity: 0, 
        pointerEvents: isOpen ? 'auto' : 'none' 
      }}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
      id="contact-form-modal"
    >
      <div
        ref={innerRef}
        className="bg-[#030B1A] text-white rounded-3xl p-8 md:p-12 max-w-4xl lg:max-w-7xl w-full mx-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 shadow-[0_0_75px_30px_rgba(255,217,113,0.1)] transform translate-y-5 opacity-0 md:scale-75 2xl:scale-100"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white transition-colors duration-200 text-3xl font-bold z-10 focus:outline-none focus:ring-none focus:ring-offset-2 focus:ring-offset-[#030B1A] rounded-full"
          aria-label="Cerrar formulario"
          ref={el => firstFocusableElement.current = el}
        >
          &times;
        </button>

        <ContactInfo />

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-2">Envíanos tu consulta</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                autoComplete="name"
              />

              <InputField
                label="Correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChange}
                required
                autoComplete="email"
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
                required
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
                required
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
              required
            />

            <InputField
              label="Detalles Adicionales"
              name="detalles"
              type="textarea"
              rows={5}
              value={formData.detalles}
              onChange={handleInputChange}
              placeholder="Describe tu proyecto o consulta..."
            />

            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030B1A] shadow-lg hover:shadow-blue-500/20"
                ref={el => lastFocusableElement.current = el}
              >
                Enviar Consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;
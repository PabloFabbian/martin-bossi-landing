import React, { useRef, useEffect, forwardRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'sonner';

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
  const submitButtonRef = useRef(null);
  const combinedRef = ref || containerRef;

  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  useClickOutside(dropdownRefs, closeAllDropdowns);

  const handleDropdownSelect = useCallback((dropdownName, value) => {
    updateField(dropdownName, value);
    closeAllDropdowns();
    // Limpiar error del campo cuando se selecciona un valor
    if (fieldErrors[dropdownName]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[dropdownName];
        return newErrors;
      });
    }
  }, [updateField, closeAllDropdowns, fieldErrors]);

  // Función para limpiar errores cuando el usuario empieza a escribir
  const handleInputChangeWithErrorClear = useCallback((e) => {
    const { name } = e.target;
    handleInputChange(e);
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [handleInputChange, fieldErrors]);

  // ✅ Validación de email
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // ✅ Validación general del formulario
  const validateForm = () => {
    const { nombre, correo, tipoProyecto, presupuesto, tema, detalles } = formData;
    const errors = {};

    // Validar campos obligatorios
    if (!nombre.trim()) {
      errors.nombre = true;
    }
    if (!correo.trim()) {
      errors.correo = true;
    }
    if (!tipoProyecto) {
      errors.tipoProyecto = true;
    }
    if (!presupuesto) {
      errors.presupuesto = true;
    }
    if (!tema) {
      errors.tema = true;
    }
    if (!detalles.trim()) {
      errors.detalles = true;
    }

    if (correo.trim() && !isValidEmail(correo)) {
      errors.correo = true;
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      if (correo.trim() && !isValidEmail(correo)) {
        toast.error('Por favor, ingresá un correo válido.', {
          position: 'bottom-right',
        });
      } else {
        toast.error('Por favor, completá todos los campos obligatorios.', {
          position: 'bottom-right',
        });
      }
      return false;
    }

    return true;
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    const templateParams = {
      nombre: formData.nombre,
      correo: formData.correo,
      tipoProyecto: formData.tipoProyecto,
      presupuesto: formData.presupuesto,
      tema: formData.tema,
      detalles: formData.detalles,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success('Tu consulta fue enviada con éxito. ¡Gracias por contactarnos!', {
        position: 'bottom-right',
      });

      Object.keys(formData).forEach((key) => updateField(key, ''));
      setFieldErrors({});
      onClose?.();

    } catch (error) {
      console.error('Error al enviar email:', error);
      toast.error('Ocurrió un error al enviar tu mensaje. Intentalo más tarde.', {
        position: 'bottom-right',
      });
    } finally {
      setIsLoading(false);
    }
  }, [formData, updateField, onClose]);

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

        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .to(combinedRef.current, { opacity: 1, duration: 0.35 })
          .to(innerRef.current, { y: 0, opacity: 1, duration: 0.45 }, '-=0.15')
          .to(innerRef.current.children, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.07,
          }, '-=0.2');
      } else {
        gsap.timeline()
          .to(innerRef.current.children, { y: -10, opacity: 0, duration: 0.2, stagger: 0.03 })
          .to(innerRef.current, { y: -20, opacity: 0, duration: 0.25 }, '-=0.1')
          .to(combinedRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => gsap.set(combinedRef.current, { pointerEvents: 'none' })
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
      style={{ opacity: 0, pointerEvents: isOpen ? 'auto' : 'none' }}
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
          ref={(el) => firstFocusableElement.current = el}
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
                onChange={handleInputChangeWithErrorClear}
                required
                autoComplete="name"
                hasError={fieldErrors.nombre}
              />
              <InputField
                label="Correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChangeWithErrorClear}
                required
                autoComplete="email"
                hasError={fieldErrors.correo}
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
                hasError={fieldErrors.tipoProyecto}
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
                hasError={fieldErrors.presupuesto}
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
              hasError={fieldErrors.tema}
            />

            <InputField
              label="Detalles Adicionales"
              name="detalles"
              type="textarea"
              rows={5}
              value={formData.detalles}
              onChange={handleInputChangeWithErrorClear}
              placeholder="Describe tu proyecto o consulta..."
              hasError={fieldErrors.detalles}
            />

            <div>
              <button
                type="submit"
                className={`bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030B1A] shadow-lg hover:shadow-blue-500/20 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                ref={submitButtonRef}
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;
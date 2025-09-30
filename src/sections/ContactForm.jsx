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

const ContactForm = forwardRef(({ isOpen, onClose, prefilledTema }, ref) => {
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
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useClickOutside(dropdownRefs, closeAllDropdowns);

  useEffect(() => {
    const updateViewportHeight = () => {
      if (window.visualViewport) {
        setViewportHeight(`${window.visualViewport.height}px`);
      } else {
        setViewportHeight(`${window.innerHeight}px`);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportHeight);
    } else {
      window.addEventListener('resize', updateViewportHeight);
    }

    updateViewportHeight();

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewportHeight);
      } else {
        window.removeEventListener('resize', updateViewportHeight);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (prefilledTema && isOpen) {
      updateField('tema', prefilledTema);
    }
  }, [prefilledTema, isOpen, updateField]);

  const handleClose = useCallback(() => {
    gsap.timeline({
      defaults: { ease: 'power2.in' },
      onComplete: () => onClose?.()
    })
      .to(innerRef.current.children, {
        y: -15,
        opacity: 0,
        duration: 0.25,
        stagger: 0.03
      }, 0)
      .to(innerRef.current, {
        y: -25,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        filter: 'blur(5px)'
      }, 0.1)
      .to(combinedRef.current, {
        opacity: 0,
        duration: 0.45,
        backdropFilter: 'blur(0px)'
      }, 0.1);
  }, [onClose, combinedRef]);

  const handleDropdownSelect = useCallback((dropdownName, value) => {
    updateField(dropdownName, value);
    closeAllDropdowns();
    if (fieldErrors[dropdownName]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[dropdownName];
        return newErrors;
      });
    }
  }, [updateField, closeAllDropdowns, fieldErrors]);

  const handleInputChangeWithErrorClear = useCallback((e) => {
    const { name } = e.target;
    handleInputChange(e);

    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [handleInputChange, fieldErrors]);

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const { nombre, correo, tipoProyecto, presupuesto, tema, detalles } = formData;
    const errors = {};

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
      handleClose();

    } catch (error) {
      console.error('Error al enviar email:', error);
      toast.error('Ocurrió un error al enviar tu mensaje. Intentalo más tarde.', {
        position: 'bottom-right',
      });
    } finally {
      setIsLoading(false);
    }
  }, [formData, updateField, handleClose]);

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
          handleClose();
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
  }, [isOpen, handleClose, combinedRef]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.set(combinedRef.current, { opacity: 0 });
        gsap.set(innerRef.current, {
          y: 20,
          opacity: 0,
          scale: 1,
          filter: 'blur(0px)'
        });
        gsap.set(innerRef.current.children, { y: 10, opacity: 0 });

        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .to(combinedRef.current, { opacity: 1, duration: 0.35 })
          .to(innerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.45,
            filter: 'blur(0px)'
          }, '-=0.15')
          .to(innerRef.current.children, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.07,
          }, '-=0.2');
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
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-6"
      style={{
        opacity: 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        height: viewportHeight
      }}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
      id="contact-form-modal"
    >
      <div
        ref={innerRef}
        className="bg-gradient-to-br from-[#001d3d]/90 to-[#000a1a]/95 backdrop-blur-md text-white rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-[95vw] sm:max-w-2xl md:max-w-4xl lg:max-w-7xl w-full overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 shadow-[0_0_50px_20px_rgba(4,102,200,0.1)] border border-[#0353A4]/30 transform translate-y-5 opacity-0"
        style={{
          maxHeight: `calc(${viewportHeight} - 1rem)`,
          minHeight: 'auto'
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 sm:top-4 sm:right-5 text-white/60 hover:text-white transition-colors duration-200 text-xl sm:text-2xl leading-none font-bold z-10 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white/10"
          aria-label="Cerrar formulario"
          ref={(el) => firstFocusableElement.current = el}
        >
          ×
        </button>

        <div className="hidden lg:block">
          <ContactInfo />
        </div>

        <div className="space-y-4 sm:space-y-6 lg:col-span-1">
          <div className="mb-4 sm:mb-6 md:mb-8 pt-6 sm:pt-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-2">
              Envíanos tu consulta
            </h2>
            <p className="text-white/70 text-xs sm:text-sm">
              Completá el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
              rows={4}
              value={formData.detalles}
              onChange={handleInputChangeWithErrorClear}
              placeholder="Describe tu proyecto o consulta..."
              hasError={fieldErrors.detalles}
            />

            <div className="block lg:hidden bg-white/5 rounded-lg p-4 mt-4 border border-white/10">
              <h3 className="text-sm font-semibold text-white mb-2">Información de contacto</h3>
              <div className="space-y-1 text-xs text-white/70">
                <p>📧 contacto@tuempresa.com</p>
                <p>📱 +54 11 1234-5678</p>
                <p>📍 Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 pb-4">
              <button
                type="submit"
                className={`w-full sm:w-auto bg-gradient-to-r from-[#0466C8] to-[#0353A4] hover:from-[#0466C8]/90 hover:to-[#0353A4]/90 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0466C8]/50 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-[0_10px_30px_rgba(4,102,200,0.3)] hover:scale-105 text-sm sm:text-base ${isLoading ? 'opacity-70 cursor-not-allowed transform-none' : ''}`}
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
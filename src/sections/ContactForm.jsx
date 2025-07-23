import React, { useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useFormData } from '../hooks/useFormData';
import { useDropdownState } from '../hooks/useDropdownState';
import ContactInfo from '../components/ContactInfo';
import InputField from '../components/ui/InputField';
import CustomDropdown from '../components/ui/CustomDropdown';
import { FORM_OPTIONS, INITIAL_FORM_DATA } from '../data/formOptions';

const ContactForm = ({ onClose }) => {
  const { formData, handleInputChange, updateField } = useFormData(INITIAL_FORM_DATA);
  const { dropdownStates, toggleDropdown, closeAllDropdowns } = useDropdownState([
    'tipoProyecto', 'presupuesto', 'tema'
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
    // Opcional: cerrar el formulario después de enviar
    // if (onClose) onClose();
  };

  return (
    <div className="min-h-screen bg-[#040e24] p-4 flex items-center justify-center">
      <div className="bg-[#030B1A] text-white rounded-3xl p-16 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 shadow-[0_0_150px_30px_rgba(255,217,113,0.12)] relative">
        {/* Botón de cerrar - solo se muestra si hay función onClose */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 text-2xl font-bold z-10"
          >
            ×
          </button>
        )}

        <ContactInfo />

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                setRef={(el) => dropdownRefs.current.tipoProyecto = el}
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
                setRef={(el) => dropdownRefs.current.presupuesto = el}
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
              setRef={(el) => dropdownRefs.current.tema = el}
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
};

export default ContactForm;
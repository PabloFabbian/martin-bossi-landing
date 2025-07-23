import { useState } from 'react';

export const useFormData = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  const updateField = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  return {
    formData,
    updateField,
    handleInputChange,
    resetForm
  };
};
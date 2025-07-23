import { useState } from 'react';

export const useDropdownState = (dropdownNames) => {
  const initialState = dropdownNames.reduce((acc, name) => {
    acc[name] = false;
    return acc;
  }, {});

  const [dropdownStates, setDropdownStates] = useState(initialState);

  const toggleDropdown = (dropdownName) => {
    setDropdownStates(prev => ({
      ...initialState,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownStates(initialState);
  };

  return {
    dropdownStates,
    toggleDropdown,
    closeAllDropdowns
  };
};
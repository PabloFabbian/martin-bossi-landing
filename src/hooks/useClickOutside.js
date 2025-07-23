import { useEffect } from 'react';

export const useClickOutside = (refs, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideAnyRef = Object.values(refs.current).some(ref => 
        ref && ref.contains(event.target)
      );
      
      if (!isClickInsideAnyRef) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [refs, callback]);
};
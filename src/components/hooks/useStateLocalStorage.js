import { useState, useEffect } from 'react';

/**
 * Reusable useState hook that reads/persists value via localStorage.
 * @param {string} localStorageKey - The key by which to store the value.
 * @returns {array} The state value and update function.
 */

const useStateLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) === 'true' || false
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};

export default useStateLocalStorage;
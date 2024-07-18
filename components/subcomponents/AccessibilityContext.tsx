import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);

  useEffect(() => {
    (async () => {
      const savedFontSize = await AsyncStorage.getItem('fontSize');
      const savedContrast = await AsyncStorage.getItem('isHighContrast');
      const savedScreenReader = await AsyncStorage.getItem('isScreenReaderEnabled');
      if (savedFontSize) setFontSize(parseInt(savedFontSize));
      if (savedContrast) setIsHighContrast(savedContrast === 'true');
      if (savedScreenReader) setIsScreenReaderEnabled(savedScreenReader === 'true');
    })();
  }, []);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        isHighContrast,
        setIsHighContrast,
        isScreenReaderEnabled,
        setIsScreenReaderEnabled
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

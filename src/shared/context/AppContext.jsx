import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const value = useMemo(() => ({ isMenuOpen, setIsMenuOpen }), [isMenuOpen]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext harus digunakan di dalam AppProvider');
  return context;
}

import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('fitverse_user')) || null);
  const [xp, setXp] = useState(parseInt(localStorage.getItem('fitverse_xp')) || 2850);
  const [streak, setStreak] = useState(12);
  
  useEffect(() => {
    if (user) localStorage.setItem('fitverse_user', JSON.stringify(user));
    localStorage.setItem('fitverse_xp', xp);
  }, [user, xp]);

  const login = (userData) => setUser(userData);
  const logout = () => { setUser(null); localStorage.clear(); };
  const addXp = (amount) => setXp(prev => prev + amount);

  return (
    <AppContext.Provider value={{ user, login, logout, xp, addXp, streak, level: Math.floor(xp / 1000) + 1 }}>
      {children}
    </AppContext.Provider>
  );
};
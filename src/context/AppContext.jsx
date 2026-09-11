import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [user, setUser] = useState(null);

  const [xp, setXp] = useState(4850);

  const [streak, setStreak] = useState(7);

  const [level, setLevel] = useState(12);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addXp = (amount) => {
    setXp((prevXp) => prevXp + amount);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        xp,
        streak,
        level,
        login,
        logout,
        addXp
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [recentUsers, setRecentUsers] = useState(() => {
    const saved = localStorage.getItem('recentUsers');
    return saved ? JSON.parse(saved) : [];
  });

  const addUser = (name) => {
    const updatedUsers = [
      name,
      ...recentUsers.filter(user => user !== name)
    ].slice(0, 5); // Keep only last 5 users
    setRecentUsers(updatedUsers);
    localStorage.setItem('recentUsers', JSON.stringify(updatedUsers));
  };

  return (
    <UserContext.Provider value={{ recentUsers, addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
} 
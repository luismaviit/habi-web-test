import React, { createContext, useState, useEffect } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [saludo, setSaludo] = useState('holamundo');

  return (
    <AuthContext.Provider
      value={{
        saludo, setSaludo

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
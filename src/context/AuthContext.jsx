import React, { createContext, useState, useEffect } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
    const [saludo, setSaludo] = useState('holamundo');
    const [progress,setProgress] = useState(10);
    useEffect(() => {
    
      if (localStorage.getItem("progress") === null) {
          localStorage.setItem("progress", progress);
      }
      
      else {
          localStorage.setItem("progress", progress);
      }
  }, [progress]);
  
  return (
    <AuthContext.Provider
      value={{
        saludo, setSaludo,
        progress,setProgress

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
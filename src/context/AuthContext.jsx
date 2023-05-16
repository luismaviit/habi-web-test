import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [saludo, setSaludo] = useState("holamundo");
  const [progress, setProgress] = useState(0);
  const [name, setName] = React.useState("");
  
  useEffect(() => {
    const localStorageProgress = Number(localStorage.getItem("progress"));
    if (localStorageProgress === null) {
      localStorage.setItem("progress", progress);
    } else {
      if (localStorageProgress > progress) {
        setProgress(localStorageProgress);
      } else {
        localStorage.setItem("progress", progress);
      }
    }
  }, [progress]);
 
  return (
    <AuthContext.Provider
      value={{
        saludo,
        setSaludo,
        progress,
        setProgress,
        name, setName
       
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

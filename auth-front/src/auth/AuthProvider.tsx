import { useContext, createContext, useState, useEffect } from "react";

interface AuthPrividerProps {
  children: React.ReactNode
}

const AuthContext = createContext({
  isAuthenticated: false,
})

export function AuthProvider({ children }: AuthPrividerProps) {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return <AuthContext.Provider value={{ isAuthenticated }}>{children} </AuthContext.Provider>
}

//hook 
export const useAuth = () => useContext(AuthContext)

/* 
Este es un componente que vá a estar validando constantemente que exista autenticacion o no para dejar pasar a las rutas que estan protegidas
*/
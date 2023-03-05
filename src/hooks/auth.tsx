import React, { createContext, ReactNode, useState, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

// {} as IAuthContextProps -> iniciando um estado obrigatório.

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@my-wallet-app:logged");
    return !!isLogged;
  });

  // permite ao usuário logar
  const signIn = (email: string, password: string) => {
    if (email === "wesleyjava88@gmail.com" && password === "123") {
      localStorage.setItem("@my-wallet-app:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválidos!");
    }
  };

  // remove tudo referente ao login
  const signOut = () => {
    localStorage.removeItem("@my-wallet-app: logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

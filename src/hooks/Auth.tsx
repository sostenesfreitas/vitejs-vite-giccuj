import React, { useState, useEffect, createContext, useContext } from "react";

type User = {
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
}

type Auth = {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  login: string;
  password: string;
  getToken: () => string;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
};

const AuthContext = createContext<Auth>({
  setPassword: () => {},
  setLogin: () => {},
  login: "",
  password: "",
  getToken: () => "",
  user: {
    name: "",
    bio: "",
    login: "",
    avatar_url: "",
  },
  setUser: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    bio: "",
    login: "",
    avatar_url: "",
  });

  const getToken = (): string => {
    const toke = window.localStorage.getItem("login");
    if (toke) return toke as string;
    return "";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setPassword,
        setLogin,
        login,
        password,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

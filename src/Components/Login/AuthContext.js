import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoaggedIn: false,
  userEmail: "",
  logIn: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
    
  let initialToken = localStorage.getItem("token");
  let initialEmail = localStorage.getItem("email");

  const [token, setToken] = useState(initialToken);
  const [userEmail, setUserEmail] = useState(initialEmail);

  const userLoggedIn = new Boolean(token);
  const logInHandler = (tokenId, email) => {
    setToken(tokenId);
    setUserEmail(email);
    localStorage.setItem("token", tokenId);
    localStorage.setItem("email", email);
  };

  const logOutHandler = () => {
    setToken(null);
    setUserEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token: token,
    isLoaggedIn: userLoggedIn,
    userEmail: userEmail,
    logIn: logInHandler,
    logOut: logOutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
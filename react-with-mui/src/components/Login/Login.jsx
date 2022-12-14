import "./styles.login.css";
import { useState, useEffect, Fragment } from "react";
import { loginAPI } from "./api";
import { Home } from "../";


const Login = () => {
  const [user, setUser] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const cambioEnUsuario = (event) => {
    setUser(event.target.value);
  };

  const cambioEnContrasena = (event) => {
    setPassword(event.target.value);
  };

  const mostrarContrasena = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    localStorage.getItem("token") !== null && setIsAuthenticate(true);
  }, []);

  return (
    <Fragment>
      <div className="container">
        {isAuthenticate ? (
          <Home user={user} signOut={setIsAuthenticate}/>
        ) : (
          <div>
            <div>
              <input
                placeholder="email"
                type="email"
                onChange={cambioEnUsuario}
                value={user}
              ></input>
            </div>
            <div>
              <input
                placeholder="password"
                type={showPassword ? "text" : "password"}
                onChange={cambioEnContrasena}
                value={password}
              ></input>
              <button onClick={mostrarContrasena}>👀</button>
            </div>
            <div className="button-signin">
              <button
                onClick={() =>
                  loginAPI({ email: user, password }, setIsAuthenticate)
                }
              >
                Sign In
              </button>
            </div>
          </div>
        )}
        <div className="icon">{!isAuthenticate ? "🔐" : "🔓"}</div>
      </div>
    </Fragment>
  );
};

export { Login };

/* Tipos de datos que podemos declarar
  '', 
  true, false, 
  {}, 
  [], 
  0,1,2,...,
  "texto"
  */

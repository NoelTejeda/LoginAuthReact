
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"
import "/img/login.gif"
import '../login.css'


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()

  if (auth.isAuthenticated) {
    return <Navigate to="/Dashboard" />
  }
  return (


    <div className="contenedores">
      <div className="contenedor1">
        <img className="login_image"
          src="/img/login.gif"
          alt="login_image"
          height="300px"
          width="300px" />
        <p>Inicie sesión para acceder a todas las <br />funcionalidades de nuestra pagina!</p>
      </div>
      <form className="form" method="post" action="#">

        <div className="contenedor2">
          <p className="txtlogin">Iniciar Sesión</p>
          <br />
          <label htmlFor="email">Username</label>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="email"
            name="email"
            placeholder="Username"
            required />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Ingrese su contraseña"
            required />
          <button type="submit">Entrar</button>
          <a href="#">Olvidó las credenciales? Click aquí</a>
          <br />
          <p>No tiene cuenta? Simple!</p>
          <a href="signup.html">Crear cuenta ahora</a>
        </div>
      </form>
    </div>
  )
}
//import { useState } from "react"
//import DefaultLayout from "../layout/DefaultLayout"
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"
import { API_URL } from "../auth/constants"
import "../signup.css"

export default function Signup() {

  /*   const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('') */


  const auth = useAuth()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          username,
          password
        })
      })
      if (response.ok) {
        console.log("User created Succesfully")
      } else {
        console.log("Someting went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/Dashboard" />
  }

  return (


    <div className="contenedores">
      <div className="rcontenedor1">
        <img className="signup_image" src="img/signup.gif" alt="signup_image" height="300px" width="300px" />
        <p>Crea tu cuenta para acceder a todas las <br />funcionalidades de nuestra pagina!</p>
      </div>
      <form method="post" action="#">
        <div className="rcontenedor2">
          <p className="txtregist">Registro</p>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="example@domain.com" required>
            <br>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>
                <br />
                <label htmlFor="confirmpassword">Confirmar contraseña</label>
                <input type="password" id="confirmpassword" name="password" placeholder="Confirme su contraseña" required>
                  <button type="submit">Crear cuenta</button>
                  <br />
                  <p>Tiene cuenta? Simple!</p>
                  <a href="index.html">Inicie sesión</a>
                </div>
              </form>
            </div>

            )
}



            {/*       <form className="form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>Name</label>
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <label>Username</label>
        <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Crear Usuario</button>

      </form> */}
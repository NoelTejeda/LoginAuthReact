import { useState } from "react"
import DefaultLayout from "../layout/DefaultLayout"
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

export default function Signup() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const auth = useAuth()

  if (auth.isAuthenticated) {
    return <Navigate to="/Dashboard" />
  }

  return (
    <DefaultLayout>
      <form className="form">
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

      </form>
    </DefaultLayout>
  )
}
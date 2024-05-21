
import DefaultLayout from "../layout/DefaultLayout"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()

  if (auth.isAuthenticated) {
    return <Navigate to="/Dashboard" />
  }
  return (
    <DefaultLayout>

      <form className="form">
        <h2>Login</h2>
        <label>Username</label>
        <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>

      </form>
    </DefaultLayout>
  )
}
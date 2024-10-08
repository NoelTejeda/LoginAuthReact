# React + TypeScript + Vite
### CURSO DE LOGIN y REGISTRO COMPLETO CON REACT


Recursos Instalados::

- npm i react-router-dom (manejo de rutas)
<!-- - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

## Configuración de rutas con React Router DOM

Buscar el archivo main.tsx (para configurar todas las rutas):

- importar {createBrowserRouter, RouterProvider} from "react-router-dom":
- Crear una carpeta(routes) en src
- en el main establecer las rutas =>

```tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  },

])
```
- ahora se debe configurar la manera de poder proteger la ruta deseada, en este caso Dashboard. y se crea otra ruta llamada ProtectedRoute en la misma carpeta (routes)

- en ProtectedRoute estamos indicando que si está autenticado muestre Outlet y si no, vaya al Navigate y muestre el home ejm:

 ```tsx
import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
  const [isAuth] = useState(false);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
```
- Outlet: Este componente actúa como un marcador de posición para los componentes secundarios en las rutas anidadas. Cuando defines rutas anidadas en tu aplicación, Outlet se utiliza para renderizar el componente correspondiente a la ruta secundaria actual. Es esencialmente un punto de inserción donde se mostrarán los componentes hijos según la ruta que coincida.
  
- ahora cambiariamos el main de la siguiente manera:
  
```tsx
 {
    /* a partir de aqui las rutas deben ser protegidas 
    path: '/Dashboard',
    element: <Dashboard />*/
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Dashboard",
        element: <h1>Dashboard</h1>,
      }
    ],

  }
```
- con esto indicamos lo siguiente: 
  - cuando busque por dashboard, la ruta principal será "/" y para entrar a dashboard, primero revisará si necesito renderizar ProtectedRoute y cuando en ProtectedRoute el estado de isAuth sea verdadero dejará pasar a la ruta, y si no lo llevará a home.
  
## Crear el estado glogal

- utilizamos useContext para mantener el estado de toda la aplicación.
- creamos una nueva carpeta llamada auth en src
- AuthProvider: será un componente que vá a utilizar useContext para guardar todo el estado y las funciones que se van a necesitar

- luego de crear AuthProvider vamos a cambiar el main de la siguiente manera: 
```tsx
  ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
```

- ahora hay que crear un hook (useAuth) en AuthProvider para que nos permitea acceder a las funciones del useContext
  
```tsx
export const useAuth = () => useContext(AuthContext)
```
- con esto se puede tener acceso a modo de hook en cualquier componente que queramos utilizar: "isAuthenticated". podemos hacerlo a través de useAuth

- ahora si vamos a la ruta protegida ( ProtectedRoute ) en vez de validar por "isAuth" usamos el custom hook (useAuth)
 
```tsx
export default function ProtectedRoute() {
  const [isAuth] = useState(false);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
```
cambiaria así:

```tsx
import { useAuth } from '../auth/AuthProvider';

export default function ProtectedRoute() {
  const auth = useAuth()
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
```

##
##

## Redirigir después de logueado


```tsx
const auth = useAuth()

if (auth.isAuthenticated){
  return <Navigate to="/Dashboard" />
}

```
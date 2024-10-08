import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute() {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}


//NOTE: En el archivo importa dos componentes, `Outlet` y `Navigate`, desde la biblioteca `react-router-dom`. Esta biblioteca es una herramienta popular en aplicaciones React para manejar la navegación y el enrutamiento. 1. **`Outlet`**: Este componente actúa como un marcador de posición para los componentes secundarios en las rutas anidadas. Cuando defines rutas anidadas en tu aplicación, `Outlet` se utiliza para renderizar el componente correspondiente a la ruta secundaria actual. Es esencialmente un punto de inserción donde se mostrarán los componentes hijos según la ruta que coincida. 2. **`Navigate`**: Este componente se utiliza para redirigir al usuario a una ruta diferente. Es útil cuando necesitas cambiar la ruta programáticamente, por ejemplo, después de una acción específica como el inicio de sesión o el cierre de sesión. `Navigate` permite redirigir al usuario sin necesidad de recargar la página, manteniendo la experiencia de una aplicación de una sola página (SPA). En resumen, estos componentes son fundamentales para manejar la navegación y las rutas en una aplicación React, permitiendo tanto la renderización de componentes anidados como la redirección de usuarios según sea necesario.
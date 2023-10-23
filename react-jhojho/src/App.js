import { LoginButton } from "./login"; // Importa el componente LoginButton desde el archivo "login.js"//
import logo from "./Logo (1).png"; // Importa la imagen del logo. Asegúrate de que la ruta sea correcta y el archivo exista.
import "./App.css"; // Importa los estilos CSS para la aplicación.
import { LogoutButton } from "./logout"; // Importa el componente LogoutButton desde el archivo "logout.js".
import { Profile } from "./profile"; // Importa el componente Profile desde el archivo "profile.js".
import { useAuth0 } from "@auth0/auth0-react"; // Importa el hook useAuth0 de la librería de autenticación Auth0.

const App = () => {
  const { isAuthenticated } = useAuth0(); // Utiliza el hook useAuth0 para obtener el estado de autenticación.

  return (
    <>
      <header className="App-header">
        <img src={logo} alt="logo" /> {/* Muestra la imagen del logo y proporciona un atributo 'alt' para accesibilidad. */}
        {isAuthenticated ? (
          <>
            <Profile /> {/* Muestra el componente Profile si el usuario está autenticado. */}
            <LogoutButton /> {/* Muestra el componente LogoutButton si el usuario está autenticado. */}
          </>
        ) : (
          <LoginButton /> 
        )}
      </header>
    </>
  );
};

export default App; // Exporta el componente App como componente principal de la aplicación.

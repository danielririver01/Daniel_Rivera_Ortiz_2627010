import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0(); // Utiliza el hook `useAuth0` para obtener información sobre el usuario y su estado de autenticación

    if (isLoading) {
        return <div>Loading...</div>; // Muestra un mensaje de carga si la autenticación está en proceso
    }

    return (
        isAuthenticated && ( // Muestra el perfil solo si el usuario está autenticado
            <div>
                <img src={user.picture} alt={user.name} /> {/* Muestra la imagen de perfil del usuario */}
                <h2>{user.name}</h2> {/* Muestra el nombre del usuario */}
                <p>Email: {user.email}</p> {/* Muestra la dirección de correo electrónico del usuario */}
            </div>
        )
    );
};

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0(); // Utiliza el hook `useAuth0` para obtener la función `logout`
    const [showConfirmation, setShowConfirmation] = useState(false); // Un estado para controlar si se muestra la confirmación

    const handleLogout = () => {
        if (showConfirmation) {
            // Confirmación activada, realizar cierre de sesión
            logout({ returnTo: window.location.origin }); // Realiza el cierre de sesión con una redirección al origen de la ventana actual
        } else {
            // Mostrar cuadro de diálogo de confirmación
            setShowConfirmation(true); // Activa la confirmación
        }
    };

    return (
        <div>
            {showConfirmation ? ( // Muestra la confirmación si `showConfirmation` es verdadero
                <div>
                    <p>¿Estás seguro de que deseas cerrar sesión?</p>
                    <button onClick={() => setShowConfirmation(false)}>Cancelar</button> {/* Cancela la confirmación y vuelve al botón de cierre de sesión */}
                    <button onClick={handleLogout}>Confirmar cierre de sesión</button> {/* Confirma y realiza el cierre de sesión */}
                </div>
            ) : (
                <button onClick={handleLogout}>Cerrar sesión</button> // Muestra el botón de cierre de sesión, que activa la confirmación cuando se hace clic
            )}
        </div>
    );
}

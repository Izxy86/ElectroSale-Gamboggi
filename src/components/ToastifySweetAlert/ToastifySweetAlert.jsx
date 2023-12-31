import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastifySweetAlert.css';
import Swal from 'sweetalert2';


export const notificacionToastify = (text, type) => {
    toast[type](text, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: true,
        className: "toast-message",
        closeOnClick: false,
        pauseOnHover: false,
        closeButton: false,
    });
}

export const alertaSweet = (mensaje, tipo, orden) => {
    Swal.fire({
        icon: tipo,
        title: '¡Completado!',
        html: `
        <div>
            <p>${mensaje}</p>
            <p>Tu número de orden es: ${orden}</p>
        </div>
        `,
        showConfirmButton: true,
    });
};

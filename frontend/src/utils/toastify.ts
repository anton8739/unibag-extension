import { toast } from 'react-toastify';

const initStyle = { fontSize: '16px', fontWeight: 'bold' }

export const errorNotification = (message = 'Что-то пошло не так', autoClose = 1500) => {
  toast.error(message, { position: 'top-center', autoClose, style: initStyle });
}

export const successNotification = (message = 'Успешно', autoClose = 1500) => {
  toast.success(message, { position: 'top-center', autoClose, style: initStyle });
}



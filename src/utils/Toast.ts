import { toast } from 'react-toastify'
import './Toast.css'

export function ToastSucess(message: string) {
	return toast.success(`${message}`, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined
	})
}
export function ToastError(message: string) {
	return toast.error(`${message}`, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined
	})
}

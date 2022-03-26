import Swal from 'sweetalert2'

export const swallErr = (title: string, text: string) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'error'
	})
}

export const swallSuccess = (title: string, text: string) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'success'
	})
}

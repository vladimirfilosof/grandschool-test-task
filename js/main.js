document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('burger').addEventListener('click', () => {
		document.querySelector('body').classList.toggle('menu-open')
	})
})

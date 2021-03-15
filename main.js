const formulario = document.getElementById('formu')
const respuesta = document.getElementById('respuesta')

formulario.addEventListener('submit', e => {
	const data = new FormData(formulario)
	
	e.preventDefault()

	formulario.reset()

	fetch('validador.php', {
		method: 'POST',
		body: data
	})
	.then(resp => resp.json())
	.then(resp => respuesta.innerHTML = `Bienvenido ${resp}`)

})
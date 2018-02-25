'use strict'

function uve() {
	let imogen = document.getElementById('imogen')
	let photito = document.getElementById('fl').files[0]
	let reader = new FileReader()

	reader.onloadend = () => {
		imogen.src = reader.result
	}

	if(photito) {
		reader.readAsDataURL(photito)
	} else {
		imogen.src= ''
	}
}
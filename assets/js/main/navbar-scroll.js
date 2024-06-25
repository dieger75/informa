// Obtén una referencia a tu barra de // Obtén una referencia a tu barra de navegación por su ID
//const navbar_Informa = document.getElementById('navbar');

if(!!document.querySelector('#navbar.navbar-reverse')){
	var navbar_Informa = document.querySelector('#navbar.navbar-reverse');
} else {
    var navbar_Informa = document.querySelector('#navbar');
}

if (navbar_Informa){
    
	// Función para agregar la clase "navbar--charcoal" al hacer scroll
	function addCharcoalClass() {
		navbar_Informa.classList.add('navbar--charcoal');
		window.removeEventListener('scroll', addCharcoalClass); // Evita que se siga llamando esta función
		window.addEventListener('scroll', removeCharcoalClass); // Escucha el scroll para eliminar la clase
	}

	// Función para eliminar la clase "navbar--charcoal" al volver arriba
	function removeCharcoalClass() {
		if (window.scrollY === 0) {
			navbar_Informa.classList.remove('navbar--charcoal');
			window.removeEventListener('scroll', removeCharcoalClass); // Evita que se siga llamando esta función
			window.addEventListener('scroll', addCharcoalClass); // Vuelve a escuchar el scroll para agregar la clase
		}
	}

	// Escucha el evento de scroll y agrega la clase cuando se hace scroll
	window.addEventListener('scroll', addCharcoalClass);
}

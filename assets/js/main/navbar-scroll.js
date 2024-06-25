// Obtén una referencia a tu barra de // Obtén una referencia a tu barra de navegación por su ID
//const headerCcg = document.getElementById('header-ccg');
if(!!document.getElementById('header-ccg')){
	var headerCcg = document.getElementById('header-ccg');
}
if(!!document.getElementById('header-ccg-black')){
	var headerCcg = document.getElementById('header-ccg-black');
}
if (headerCcg){
	console.log('aqui')
	const navCcg = document.getElementById('nav-ccg'); /**contenedor menu */
	const contentMenu = document.getElementById('content-menu'); /** contenedor menu - logo */
	const contentMenuLogin = document.getElementById('content-menu-login'); /** contenedor botones login */
	const contentLogo = document.getElementById('logo'); /** contenedor logo */

	// Función para agregar la clase "header-ccg--charcoal" al hacer scroll
	function addCharcoalClass() {
		headerCcg.classList.add('header-ccg--charcoal');
		navCcg.classList.add('nav-ccg--charcoal');
		contentMenu.classList.add('border--charcoal');
		contentMenuLogin.classList.add('border--charcoal');
		contentLogo.classList.add('logo--charcoal');
		window.removeEventListener('scroll', addCharcoalClass); // Evita que se siga llamando esta función
		window.addEventListener('scroll', removeCharcoalClass); // Escucha el scroll para eliminar la clase
	}

	// Función para eliminar la clase "header-ccg--charcoal" al volver arriba
	function removeCharcoalClass() {
		if (window.scrollY === 0) {
			headerCcg.classList.remove('header-ccg--charcoal');
			navCcg.classList.remove('nav-ccg--charcoal');
			contentMenu.classList.remove('border--charcoal');
			contentMenuLogin.classList.remove('border--charcoal');
			contentLogo.classList.remove('logo--charcoal');
			window.removeEventListener('scroll', removeCharcoalClass); // Evita que se siga llamando esta función
			window.addEventListener('scroll', addCharcoalClass); // Vuelve a escuchar el scroll para agregar la clase
		}
	}


	// Escucha el evento de scroll y agrega la clase cuando se hace scroll
	window.addEventListener('scroll', addCharcoalClass);
}

if(!!document.getElementById('navbar')){
	var navbar_Informa = document.getElementById('navbar');
}
// if(!!document.getElementById('header-ccg-black')){
// 	var headerCcg = document.getElementById('header-ccg-black');
// }

if (navbar_Informa){
	const navCcg = document.getElementById('nav-ccg'); /**contenedor menu */
	const contentMenu = document.getElementById('content-menu'); /** contenedor menu - logo */
	const contentMenuLogin = document.getElementById('content-menu-login'); /** contenedor botones login */
	const contentLogo = document.getElementById('logo'); /** contenedor logo */

	// Función para agregar la clase "navbar--charcoal" al hacer scroll
	function addCharcoalClass() {
		navbar_Informa.classList.add('navbar--charcoal');

		//navCcg.classList.add('nav-ccg--charcoal');
		// contentMenu.classList.add('border--charcoal');
		// contentMenuLogin.classList.add('border--charcoal');
		// contentLogo.classList.add('logo--charcoal');
		window.removeEventListener('scroll', addCharcoalClass); // Evita que se siga llamando esta función
		window.addEventListener('scroll', removeCharcoalClass); // Escucha el scroll para eliminar la clase
	}

	// Función para eliminar la clase "navbar--charcoal" al volver arriba
	function removeCharcoalClass() {
		if (window.scrollY === 0) {
			navbar_Informa.classList.remove('navbar--charcoal');

			//navCcg.classList.remove('nav-ccg--charcoal');
			// contentMenu.classList.remove('border--charcoal');
			// contentMenuLogin.classList.remove('border--charcoal');
			// contentLogo.classList.remove('logo--charcoal');
			window.removeEventListener('scroll', removeCharcoalClass); // Evita que se siga llamando esta función
			window.addEventListener('scroll', addCharcoalClass); // Vuelve a escuchar el scroll para agregar la clase
		}
	}


	// Escucha el evento de scroll y agrega la clase cuando se hace scroll
	window.addEventListener('scroll', addCharcoalClass);
}

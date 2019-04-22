const mainContent = document.querySelector('main');
const navItems = document.querySelectorAll('.navigation ul li a');
let path = 'http://localhost:8888/hot-topic/partials/home.html'

function handleClick(ev){
	ev.preventDefault();
	path = ev.target.href;
	handleAjax(path);
}


function handleAjax(fetchUrl){
	fetch(fetchUrl)
	.then(function(rp){
		return rp.text();
	})
	.then(function(dt){
		mainContent.innerHTML = dt;
	})
}

handleAjax(path);


navItems[0].addEventListener('click', handleClick);
navItems[1].addEventListener('click', handleClick);
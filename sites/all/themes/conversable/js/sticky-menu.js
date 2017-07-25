var stickyMenu = document.getElementById('stickyMenu');
var scrollSpace = stickyMenu.offsetTop;

window.addEventListener('scroll', function () {
	if (window.pageYOffset > scrollSpace) {
		stickyMenu.classList.add('sticky-menu-fixed');
	} else {
		stickyMenu.classList.remove('sticky-menu-fixed');
	}
} );
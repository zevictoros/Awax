// animation of scrool
$("nav a").click(function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		menuHeight = $('nav').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 1000);
});

// opener menu
window.onload = function () {
    document.querySelector(".menu-opener").addEventListener("click", function () {
        if (document.querySelector(".menu nav").style.display == "flex") {
            document.querySelector(".menu nav").style.display = "none"
        } else {
            document.querySelector(".menu nav").style.display = "flex"
        }
    });
};

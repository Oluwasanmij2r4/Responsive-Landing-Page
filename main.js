
document.getElementById("openup").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav_links").classList.toggle("active");
});

document.getElementById("menu-bar").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav_links").classList.add("active");
});

document.getElementById("close-menu").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav_links").classList.remove("active");
});

// smooth scrolling
$('.nav_links a').on('click', function(event){
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function(){
                window.location.hash = hash;
            }
        );
    }
});
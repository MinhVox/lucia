window.onscroll = function() { scrollFunction(); }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.backgroundColor = "white";
    } else {
        document.getElementById("header").style.backgroundColor = "unset";
    }
}
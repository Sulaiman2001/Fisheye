
var newsletter = document.getElementById("Newsletter");

var btn = document.getElementById("show-newsletter");

var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
  newsletter.style.display = "block";
}

span.onclick = function() {
  newsletter.style.display = "none";
}

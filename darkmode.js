if (document.cookie.includes("darkmode=true")) {
window.onload = function() {
document.body.style.backgroundColor = "#171717";
document.body.style.color = "white";
document.getElementsByClassName("dropdown_dropdown_2cQyf")[0].style.borderColor = "#404040";
};

setTimeout(function(){
var els = document.getElementsByTagName("img");
for(var i = 0; i < els.length; i++)
{
  els[i].style.filter = "brightness(5)";
}
}, 500)
}
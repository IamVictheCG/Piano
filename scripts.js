var key = document.getElementsByClassName("key")
let color = "#18c5f5"
key.addEventListener("click", changecolor)

var changecolor = function () {
 var newColor = document.getElementsByClassName("key").style.background = color
}
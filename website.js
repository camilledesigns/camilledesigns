function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


function changeImage() {
  document.getElementById("afterButton").style.backgroundColor = "#C7FAD2";
  document.getElementById("beforeButton").style.backgroundColor = "transparent";
  document.getElementById("afterButton").style.fontWeight = 600;
  document.getElementById("beforeButton").style.fontWeight = 400;
  var image = document.getElementById('beforeAfter');
    if (image.src.match("Page Not Found.png")) {}
    else {
      image.src = "anfa/Page Not Found.png";
      "document.getElementById('id1').style.color = 'red'";
    }
}
function changeImage2() {
  document.getElementById("afterButton").style.backgroundColor = "transparent";
  document.getElementById("beforeButton").style.backgroundColor = "#C7FAD2";
  document.getElementById("afterButton").style.fontWeight = 400;
  document.getElementById("beforeButton").style.fontWeight = 600;
  var image = document.getElementById('beforeAfter');
    if (image.src.match("404 Page Not Found.png")) {}
    else {
      image.src = "anfa/404 Page Not Found.png";
    }
}
var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/firefox-icon.png")
  {
    myImage.setAttribute("src", "images/skyrim.jpg");
  }
  else
  {
    myImage.setAttribute("src", "./images/firefox-icon.png");
  }
}


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName()
{
  var myName = prompt("Enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Welcom to mozilla, " + myName;
}

if (!localStorage.getItem("name"))
{
  setUserName();
}
else
{
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcom to mozilla, " + storedName;
}

myButton.onclick = function ()
{
  setUserName();
}
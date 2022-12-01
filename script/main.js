var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/i.webp') {
      myImage.setAttribute ('src','https://i.pinimg.com/736x/11/13/f6/1113f62b818e33f88264df5494694b1a.jpg');
    } else {
      myImage.setAttribute ('src','image/i.webp');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt ('Введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = ' Добро пожаловать ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
 } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'привет' + storedName;
 }
 myButton.onclick = function() {
    setUserName();
  }
























var elements = document.querySelectorAll(".drum");

for (var i = 0; i < elements.length; ++i) {

  elements[i].addEventListener("click", function (){

    var button = this.innerHTML
    makeSound(button);
  })
}

document.addEventListener("keypress", function (e) { 
    makeSound(e.key)
  });


function makeSound (key){

switch (key) {
  case "w" :
  var tom1 = new Audio ("sounds/tom-1.mp3");
  tom1.play();
    break;
  case "a":
    var tom2 = new Audio ("sounds/tom-2.mp3");
    tom2.play();
    case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      case "d":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play();
        case "j":
          var snare = new Audio ("sounds/snare.mp3");
          snare.play();
            case "l":
              var bass = new Audio ("sounds/kick-bass.mp3");
              bass.play();
              case "k":
                 var crash = new Audio (" sounds/crash.mp3");
                 crash.play ();
  default:
    break;
} 
}




// var numOfButtons = document.querySelectorAll(".drum").length;

// for (i = 0; i < numOfButtons; i++){

//   document.querySelectorAll(" .drum ")[i].addEventListener("click", function (){

//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
   
//   });

// }
 
// document.addEventListener("keypress", function(event){

//   makeSound (event.key);
// });

// function makeSound (key){

//   switch (key) {
//     case "w":
//       var tom1 = new Audio (" sounds/tom-1.mp3");
//       tom1.play ();
//       break;

//     case "a":
//       var tom2 = new Audio (" sounds/tom-2.mp3");
//       tom2.play ();
//       break;

//     case "s":
//       var tom3 = new Audio (" sounds/tom-3.mp3");
//       tom3.play ();
//       break;

//     case "d":
//       var tom4 = new Audio (" sounds/tom-4.mp3");
//       tom4.play ();
//       break;

//     case "j":
//       var snare = new Audio (" sounds/snare.mp3");
//      snare.play ();
//       break;

//     case "k":
//       var crash = new Audio (" sounds/crash.mp3");
//       crash.play ();
//       break;

//     case "l":
//       var kick = new Audio (" sounds/kick-bass.mp3");
//      kick.play ();
//       break;

//     default: console.log(buttonInnerHTML);
//   }
// }







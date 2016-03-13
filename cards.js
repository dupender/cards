// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

// When you type characters into the input field, the output element should mirror the text in the input field.

var dlt = document.getElementById("del")
document.getElementById("create").addEventListener("click", createCard);
function createCard() {
  document.getElementById("cardOutput").innerHTML += "<section class = 'card' id = 'newCard'>" + document.getElementById("cardInput").value + "<button id = 'del'>Delete</button>" + "</section>";
  };
  
// var dlt = document.getElementsByClassName("del")
// for (var i = 0; i < dlt.length ; i++) {
//   dlt[i].addEventListener("click", function(event){
//     console.log(event);
        // this.parentNode.removeChild(this);
//     })
//   }
// };


// 
cardOutput.addEventListener("click", function(event){
  if (event.target.id === "del"){
     console.log(event);
     //tgt is the del button's access to "newcard", which is the id for each new card.
     tgt = event.target.parentNode;
     //remove the child of the big container, cardOutput & removeChild needs an argument, so tgt was created.
     cardOutput.removeChild(tgt);
    };
    })



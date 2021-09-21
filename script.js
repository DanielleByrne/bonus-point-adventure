// choose your own adventure type text game as a surprise for brandon
// option 1 : really hungry  -> esthers kitchen for brunch OR not too hungry ->  chikfila breakfast
// option 2 : play something new -> a way out on xbox OR something known and loved -> unmatched
// option 3 : do something fun -> axe throwing OR look at something cool -> neon museum
// option 4 : eat out -> skinny fats OR eat in -> bibim kitchen OR wild card -> the hawaiian trifecta
// option 5 : dessert> if yes, something classic -> boba OR something customizeable -> froyo

//grabbing the html elements that we are going to be changing throughout the game
const textElement = document.getElementById("text");
const choiceButtonsElement = document.getElementById("choice-buttons");

let state = {};

// the funciton that starts the game at the beginning
function startGame() {
    state = {}
    showTextNode(1)
}

//funciton for showing the right text of whatever question we moved onto
function showTextNode(textNodeIndex) {

    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
// loop to remove all the options so that we only fill the space with the ones we need for that choice
    while(choiceButtonsElement.firstChild) {
        choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
    }
// adding a button for each choice we have
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("button")
            button.addEventListener("click" , () => selectOption(option))
            choiceButtonsElement.appendChild(button)
        }
    })
}


function showOption(option){
 return true
}


//function for when we select an option
function selectChoice(choice) {}





// the array of objects of what is going to fill the text box and option buttons, the id is what the next text will lead to and the number of options is how many buttons there will be
const textNodes = [
  {
    id: 1,
    text: "Welcome to Choose Your Own Adventure: Bonus Point Edition  :)",
    options: [
      {
        text: "start game!",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "On a scale of the button to the left to the button to the right, how hungry are you?",
    options: [
      {
        text: "I'm starving",
        nextText: 3,
      },
      {
        text: "I could eat but not a whole lot",
        nextText: 3,
      },
    ],
  },
];

//calls the game as soon  as the game loads
startGame();

$(document).ready(function(){
  var words = [
    ["P", "O", "T", "A", "T","O"],
    ["J","A","V","A","S","C","R","I","P","T"],
    ["W","E","B","D","E","S","I","G","N"],
    ["T","I","R","E","D"],
    ["G","I","A","N","T","S"]
  ]

  // the word to guess us chosen from the array above
  var random = Math.floor((Math.random()*(words.length-1)));
  var randomWord = words[random];
  var selectedWord = document.getElementById("selectedWord");
  var wordLength = randomWord.length;
  var lives = 6
  // every letter in the word is converted to an underscore
  var guess = randomWord.map(function(elem){
    return elem = '_ '
  });

  // prints guess in selectedWord
  function printWord(){
   for(var i = 0 ; i < wordLength; i++){
  	    var letter = document.createTextNode(guess[i]);
  	     selectedWord.appendChild(letter);
    }
  };
  $(printWord())
//Adds letter or removes lives based on .key clicks.
  $('.key').click(function(){
    var choice = $(this).text();
    if(randomWord.indexOf(choice) > -1){
      guess = guess.map(function(elem, i, arr){
          if(randomWord[i] === choice){
            return choice + ' ';
          }
          else{
            return elem;
          }
      });
    selectedWord.innerHTML = '';
    $(printWord());
    }
    else{
      lives = lives -1
      console.log(lives)
    }
    //Designates the win state
    if(guess.indexOf('_ ')=== -1){
      console.log('YOU WIN!')
    }
    //Designates the lose state
    if(lives < 1){
      $('.key').off('click');
      console.log('YOU LOSE!');
    }
  });
});

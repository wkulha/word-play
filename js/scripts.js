$(document).ready(function(){
  $('#userInput').submit(function(event) {
    event.preventDefault();
    //Take the user's input and save it as a variable.
    var addWords = $('#userSentence').val();
    //remove punctuation from the end of the string.
    var noPunctuation = addWords.replace(/[!.,?]/g, "");
    //split the original string into array indices
    var initialSentence = noPunctuation.split(" ");
    var greaterThanThree = []
    //search for words that are three characters or longer
    initialSentence.forEach(function(word) {
      if (word.length >= 3) {
        greaterThanThree.push(word);
      }
    });
    //reverse the array and then split it back into a string
    wordPlay = greaterThanThree.reverse().join(" ");
    $('#wordPlay').text(wordPlay);

    console.log(initialSentence);
  })
})

$(document).ready(function(){
  $('#userInput').submit(function(event) {
    event.preventDefault();
    //Take the user's input and save it as a variable.
    var addWords = $('#userSentence').val();
    //remove punctuation from the end of the string.
    var noPunctuation = addWords.replace(/[!.,?]/g, "");
    //split the original string into array indices
    var initialSentence = noPunctuation.split(" ");
    //search for words that are three or more characters.
    var greaterThanThree = initialSentence.filter(word => word.length >= 3);
    //reverse the array and then split it back into a string
    wordPlay = greaterThanThree.reverse().join(" ");
    $('#wordPlay').text(wordPlay);
  });
});

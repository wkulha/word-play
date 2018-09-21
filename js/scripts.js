$(document).ready(function(){
  $('#userInput').submit(function(event) {
    event.preventDefault();
    var addWord = $('#userSentence').val();
    console.log(addWord);
  })
})

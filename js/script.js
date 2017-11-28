var Input = document.querySelector( '#user-gif-search' );
var searchBtn = document.querySelector( '#submit-gif-search');
var gifContainer = document.querySelector( '#gif-result-container');

function findGifs(userInput) {
fetch()

.then(function(response)  {
  return response.json();
})
.then(function(response) {
  shoGifs(response.data)
});
}  //closes findGifs function

function showGifs(data) {
  for (var x = 0; x < data.length; x++) {
    var img = document.createElement('img');
    img.src = data[x].images.original.url;
    document.body.appendChild(img);
  }
}

if (input && searchBtn && gifContainer) {
    searchBtn.addEventListener('click', function() {
      var userInput = input.value;
      if (userInput !== '') {
        findGifs(userInput);
      }

    })
}

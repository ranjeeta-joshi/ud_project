
// Select color input


// Select size input


// When size is submitted by the user, call makeGrid()

const pixelsCanvas = $('#pixelCanvas');

function makeGrid() {

  // Your code goes here!
  var width = $('#inputWeight').val();
  var height = $('#inputHeight').val();
  pixelsCanvas.find('tr').remove();
  for (let row = 0; row < width; row++) {

    pixelsCanvas.append('<tr></tr>');

    for (let column = 0; column < height; column++) {
      pixelsCanvas.children().last().append('<td></td>');
    }

  }

}

//Setting cell background color
pixelsCanvas.on('click', 'td', function() {
  var colour = $('#colorPicker').val();
  $(this).css('background', colour);
});


//Settings cell background to white by default
pixelsCanvas.on('dblclick', 'td', function() {
  $(this).css('background', 'white');
});


//Event triggers when submit button click and calls makeGrid() function
$('#sizePicker').on('submit', function(evt) {
  evt.preventDefault();
  makeGrid();
});


//Resetting size of the grid
$('#sizePicker').on('reset', function() {
  pixelsCanvas.find('tr').remove();
});


//Event on reset button clicked
$('.resetGrid').click(function() {
  $('td').each(function() {
    var pixelColour = $('td').val();
    if (pixelColour != 'white') {
      $('td').css('background', 'white');
    }
  });
});
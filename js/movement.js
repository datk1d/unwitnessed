console.log('movement.js has been chained');

let $iD = '';
$els.playBtn.on('click', function(event) {

  let $inpBox = $('<input>');
  $inpBox.attr('type', 'text').attr('id', 'name').attr('placeholder', 'Player Name').attr('value', ' ');
  $els.formField.find('form').prepend($inpBox);

  let $link = $('<a>').attr('href', 'game.html');
  $els.playBtn.wrap($link);
$els.playBtn.attr('type', 'submit');


  $els.playBtn.off(event);

  $els.playBtn.on('click', (event2) => {
    console.log('submit');

      $iD = $('form:first').val();


    console.log('store check');
  debugger;
  });
});

let $pulled;
$els.playerCards.on('drag', (event) => {

}, false);
$els.playerCards.on('dragstart', (event) => {
  $pulled = event.target;

  event.target.css('opacity', '.5');
}, false);
$els.playerCards.on('dragend', (event) => {
  event.target.css('opacity', '1');
}, false);
$els.dropArea.on('dragover', (event) => {
      event.preventDefault();
}, false);
$els.dropArea.on('dragenter', (event) => {
      // highlight potential drop target when the draggable element enters it
      if (event.target == $els.dropArea) {
          event.target.css('border', '#071715 solid 3px;');
      }
  }, false);
  $els.dropArea.on('dragleave', (event) => {
      // reset background of potential drop target when the draggable element leaves it
      if (event.target == $els.dropArea) {
          event.target.css('border', 'black solid 2px');
      }
  }, false);

  $els.dropArea.on('drop', (event) => {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target == $els.dropArea) {
          event.target. = "";
          $pulled.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);

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



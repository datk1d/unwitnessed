console.log('movement.js has been chained');

let $iD;
$els.playBtn.on('click', function(event) {

  let $inpBox = $('<input>');
  $inpBox.attr('type', 'text').attr('id', 'name').attr('placeholder', 'Player Name').attr('value', "");
  $els.formField.find('form').prepend($inpBox);

  let $link = $('<a>').attr('href', 'game.html');
  $els.playBtn.wrap($link);
  $els.playBtn.attr('type', 'submit');

  $els.playBtn.off(event);

  $els.playBtn.on('click', (event2) => {

/* passing variables to different webPages found on stack overflow */
  let $iD = $('#name').val();
  localStorage.setItem("name", $iD);
//
    console.log('submited name');
  });
});

/* Help was gotten for the following drag n drop functionality from MDN. It is a new HTML5 feature that is easier to use than just pure JS drag n drop implementation. I made changes to get what i want from it. */
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  /* sets the id of the dragged option */
  event.dataTransfer.setData('text', event.target.id);
}
function drop(event) {
  event.preventDefault();

  const pulledId = '#' + event.dataTransfer.getData('text');
  board.pulledBGI = $(pulledId).css('background-image');

  const dropTargetId = '#' + event.target.id;
  $(dropTargetId).css('background-image', board.pulledBGI);

  $(pulledId).attr('draggable', 'false');

  nuGame.playerDrop();
}
function playerFadeOut(fade) {
  fade.css('animation', 'playerFadeOut 2.5s ease-out 1s 1');
}
function removeFadeOut(fade) {
  fade.css('animation', 'adeout 2.5s ease-out 1s 1');
}
function twoFadeOut(fadeA, fadeB) {
  fadeA.css('animation', 'twoFadeOut 2.5s ease-out 1s 1');
  fadeB.css('animation', 'twoFadeOut 2.5s ease-out 1s 1');
}
function remTwoFade(fadeA, fadeB) {
  fadeA.css('animation', 'wofadeout 2.5s ease-out 1s 1');
  fadeB.css('animation', 'wofadeout 2.5s ease-out 1s 1')
}


console.log('helper.js has been chained');

/* RNG  n = the range you want from the RNG. ie- If you want a random number between 0-60, n would be 60*/
function rngZeroUp(n) {
  let num = Math.floor(Math.random() * n)

  return num;
}
/* rng returns an rng from within a range of numbers. min = the minimum. max = the max num. i.e__- want a random number between 60 & 120 */
function rngRange(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min)

  return num;
}
/* randomizes an array. creates a new one without changing the original. */
function rngRay(ray) {
  let rand, index = -1;
  let length = ray.length;
  let result = Array(length);

  while (++index < length) {
    rand = rng(index + 1);
    result[index] = result[rand];
    result[rand] = ray[index];
  }
    return result;
}
/* randomizes an array. does NOT create a new array. changes the existing */
function rayRNG(ray) {
  var rand, index = -1;
    length = ray.length;
    result = Array(length);
  while (++index < length) {
    rand = rng(index + 1);
    result[index] = result[rand];
    result[rand] = ray[index];
    ray = result;
  }
  return ray;
}
/* Capitalizes the first letter of a string */
function capFirst(str) {
  str.charAt(0).toUpperCase() + str(1);
  return str;
}

function getScrollOffsets() {
    var x = window.pageXOffset || document.documentElement.scrollLeft ||
     document.body.scrollLeft;
    var y = window.pageYOffset || document.documentElement.scrollTop ||
     document.body.scrollTop;

    return new Element.Offset(x, y);
  }

function drag(elementToDrag, event) {
    // The initial mouse position, converted to document coordinates
    var scroll = getScrollOffsets();  // A utility function from elsewhere
    var startX = event.clientX + scroll.x;
    var startY = event.clientY + scroll.y;

    // The original position (in document coordinates) of the element
    // that is going to be dragged.  Since elementToDrag is absolutely
    // positioned, we assume that its offsetParent is the document body.
    var origX = elementToDrag.offsetLeft;
    var origY = elementToDrag.offsetTop;

    // Compute the distance between the mouse down event and the upper-left
    // corner of the element. We'll maintain this distance as the mouse moves.
    var deltaX = startX - origX;
    var deltaY = startY - origY;

    // Register the event handlers that will respond to the mousemove events
    // and the mouseup event that follow this mousedown event.

        // Register capturing event handlers on the document
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);


    // We've handled this event. Don't let anybody else see it.
    event.stopPropagation();  // Standard model


    // Now prevent any default action.
    event.preventDefault();   // Standard model

    /**
     * This is the handler that captures mousemove events when an element
     * is being dragged. It is responsible for moving the element.
     **/
    function moveHandler(e) {


        // Move the element to the current mouse position, adjusted by the
        // position of the scrollbars and the offset of the initial click.
        var scroll = getScrollOffsets();
        elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";
        elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + "px";

        // And don't let anyone else see this event.
        e.stopPropagation();  // Standard

    }

    /**
     * This is the handler that captures the final mouseup event that
     * occurs at the end of a drag.
     **/
    function upHandler(e) {


        // Unregister the capturing event handlers.

            document.removeEventListener("mouseup", upHandler, true);
            document.removeEventListener("mousemove", moveHandler, true);



        // And don't let the event propagate any further.
        e.stopPropagation();  // Standard model

    }
}
function closeMe(elementToClose)
 {
     elementToClose.innerHTML = '';
     elementToClose.style.display = 'none';
 }

 function minimizeMe(elementToMin, maxElement)
 {
     elementToMin.style.display = 'none';
 }

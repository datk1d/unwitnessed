console.log('helper.js has been chained');

/* returns an array that has had an item spliced out of it. ray is the array that you want something taken out. ind is the index to be spliced. amt is how many you want to remove from that index */
function removeIndex(ray, ind, amt) {
  ray.splice(ind, amt);

  return ray;
}
/* RNG  n = the range you want from the RNG. ie- If you want a random number between 0-60, n would be 60*/
function rngZeroUp(n) {
  let num = Math.floor((Math.random() * n) + 0)

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


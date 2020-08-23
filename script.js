let next = document.getElementById('next');
let previous = document.getElementById('previous');
let image = document.getElementById('image');

var images = new Array(
  'images/image11.jpg',
  'images/image5.jpg',
  'images/image12.jpg',
  'images/image10.jpg'
);

let i = 0;

next.onclick = function() {
  if (i < 3) {
    image.src = images[i];
    i++;
  }
}
previous.onclick = function() {
  if (i > 0) {
    image.src = images[i];
    i--;
  }
}

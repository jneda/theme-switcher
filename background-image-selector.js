function selectBackground() {
  console.log('TODO: show backgrounds');
  toggleImageDrawer();
  imagePaths.forEach(image => insertImage(image));
}

function setImageBackground(event) {
  console.log(`TODO: set image @ ${event.target.src} as background`);
  backgroundDivElement.style.backgroundImage = `url(${event.target.src})`;
  toggleImageDrawer();
}

function insertImage(imagePath) {
  const imgElement = document.createElement('img');
  imgElement.src = imagePath;
  imgElement.addEventListener('click', setImageBackground);
  imageDrawer.appendChild(imgElement);
}

function toggleImageDrawer() {
  imageDrawer.innerHTML = null;
  imageDrawer.classList.toggle('hidden');
}

const backgroundDivElement = document.querySelector('.background-image');
const backgroundSelectButton = document.querySelector('#background-image-button');
const imageDrawer = document.querySelector('.image-drawer');

const imagePaths = [
  'images/leiada-krozjhen-cvEoMQ0OO9Q-unsplash.jpg',
  'images/solstice-hannan-QZKEQz4Wa3Y-unsplash.jpg'
];

backgroundSelectButton.addEventListener('click', selectBackground);
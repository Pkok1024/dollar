let images = [
  'https://telegra.ph/file/56e6b604afac83b5e2ed2.jpg',
  'https://media.discordapp.net/attachments/1180682772487098549/1190555424265613372/IMG_20231027_094348_393.jpg',
  'https://media.discordapp.net/attachments/1180682772487098549/1190555424496304239/FpmNiokWIAE1m8T.jpg',
  'https://media.discordapp.net/attachments/1180682772487098549/1190555424747950161/mersweb-15-03-2023-0004.jpg',
  'https://media.discordapp.net/attachments/1180682772487098549/1190555424999616532/Screenshot_20210426_083352.jpg',
  'https://media.discordapp.net/attachments/1180682772487098549/1190555424265613372/IMG_20231027_094348_393.jpg',
  'https://media.discordapp.net/attachments/1180682772487098549/1190555424747950161/mersweb-15-03-2023-0004.jpg'
];
let nextImage = new Image(); // Preload next image
let isTransitioning = false;

function preloadNextImage() {
  const nextIndex = (currentIndex + 1) % images.length;
  nextImage.src = images[nextIndex];
}

let currentIndex = 0;

function changeBackground() {
  if (isTransitioning) return;

  isTransitioning = true;
  document.body.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    preloadNextImage();

    document.body.style.opacity = 1;
    isTransitioning = false;
  }, 1000); // Adjust the duration of the transition in milliseconds
}

setInterval(changeBackground, 4000);

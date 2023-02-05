const imgList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

function fnChangeBackgroundImg() {
  const imgIdx = Math.floor(Math.random() * imgList.length);
  const imgPath = `src/img/${imgList[imgIdx]}`;
  document.body.style.backgroundImage = `url("${imgPath}")`;
}

fnChangeBackgroundImg();

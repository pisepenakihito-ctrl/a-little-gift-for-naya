window.addEventListener("load",()=>{

  setTimeout(()=>{

    const loader =
    document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{
      loader.remove();
    },1000);

  },2800);

});
// OPEN WEBSITE

const giftBox = document.getElementById("gift-box");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bgMusic");

giftBox.addEventListener("click", () => {

  giftBox.classList.add("open");

  setTimeout(() => {

    opening.style.opacity = "0";

    setTimeout(() => {

      opening.style.display = "none";

      mainContent.style.display = "block";

      music.play().catch(() => {});

    },1000);

  },1000);

});



// SAKURA EFFECT

const sakuraContainer = document.getElementById("sakura-container");

function createPetal() {

  const petal = document.createElement("div");

  petal.classList.add("petal");

  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * window.innerWidth + "px";

  petal.style.fontSize =
    Math.random() * 15 + 15 + "px";

  petal.style.animationDuration =
    Math.random() * 5 + 6 + "s";

  sakuraContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);

}

setInterval(createPetal, 350);


// SCROLL ANIMATION

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },

  {
    threshold: 0.2
  }

);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});


// FLOWER CLICK EFFECT

document.querySelectorAll(".flowers span").forEach((flower) => {

  flower.addEventListener("click", () => {

    flower.style.transform = "scale(1.3)";

    setTimeout(() => {
      flower.style.transform = "scale(1)";
    }, 300);

  });

});


// GALLERY LIGHTBOX

const galleryImages =
  document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {

  img.addEventListener("click", () => {

    const overlay =
      document.createElement("div");

    overlay.classList.add("lightbox");

    const image =
      document.createElement("img");

    image.src = img.src;

    overlay.appendChild(image);

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

  });

});const heartContainer =
document.getElementById("heart-container");

function createHeart(){

  const heart =
  document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "🤍";

  heart.style.left =
  Math.random()*window.innerWidth+"px";

  heart.style.fontSize =
  (12 + Math.random()*12)+"px";

  heartContainer.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },8000);

}

setInterval(createHeart,3000);
const galleryItems =
document.querySelectorAll(
".gallery-item"
);

const galleryObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.15
}

);

galleryItems.forEach(item=>{

galleryObserver.observe(item);

});
const finalItems =
document.querySelectorAll(
".final-line,.final-heart,.final-sign"
);

const finalObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.3
}

);

finalItems.forEach(item=>{

finalObserver.observe(item);

});

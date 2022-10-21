const itemsContainer = document.querySelector(".items-container");
const thumbnailsContainer = document.querySelector(".thumbnails-container");
const infoContainer = document.querySelector(".info-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const reverseBtn = document.getElementById("reverse-btn");
const stopBtn = document.getElementById("stop-btn");

loadImages(itemsContainer, "item");
loadImages(thumbnailsContainer, "thumbnail");
loadInfo(infoContainer, "info");

const items = document.getElementsByClassName("item");
const thumbnails = document.getElementsByClassName("thumbnail");
const infos = document.getElementsByClassName("info");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");
thumbnails[sliderPosition].classList.add("active");
infos[sliderPosition].classList.add("active");
let scrollingDirection = next;

nextBtn.addEventListener("click", () => {
    next();
});

prevBtn.addEventListener("click", () => {
    prev();
});

for (let i = 0; i < thumbnails.length; i++) {
    const thisThumb = thumbnails[i];
    thisThumb.addEventListener("click", () => {
        set(i);
    });
}

const scrollingInterval = setInterval(() => {
    scrollingDirection();
}, 3000);

reverseBtn.addEventListener("click", () => {
    changeDirection();
});

stopBtn.addEventListener("click", () => {
    clearInterval(scrollingInterval);
});

////////////////////////////////////////////////////

function loadImages (position, givenClass) {
    images.forEach ((currentItem) => {
        const item = document.createElement("div");
        item.classList.add(givenClass);
        item.innerHTML = `<img src="${currentItem.image}" alt ="">`
        position.append(item);
    });
}

function loadInfo (position, givenClass) {
    images.forEach ((currentItem) => {
        const item = document.createElement("div");
        item.classList.add(givenClass);
        item.innerHTML = `
            <h2>${currentItem.title}</h2>
            <span>${currentItem.text}</span>`;
        position.append(item);
    });
}

function next () {
    items[sliderPosition].classList.remove("active");
    thumbnails[sliderPosition].classList.remove("active");
    infos[sliderPosition].classList.remove("active");
    if (sliderPosition < images.length - 1) {
        sliderPosition++;
    } else {
        sliderPosition = 0;
    }
    items[sliderPosition].classList.add("active");
    thumbnails[sliderPosition].classList.add("active");
    infos[sliderPosition].classList.add("active");
}

function prev () {
    items[sliderPosition].classList.remove("active");
    thumbnails[sliderPosition].classList.remove("active");
    infos[sliderPosition].classList.remove("active");
    if (sliderPosition > 0) {
        sliderPosition--;
    } else {
        sliderPosition = images.length - 1;
    }
    items[sliderPosition].classList.add("active");
    thumbnails[sliderPosition].classList.add("active");
    infos[sliderPosition].classList.add("active");
}

function set (index) {
    items[sliderPosition].classList.remove("active");
    thumbnails[sliderPosition].classList.remove("active");
    infos[sliderPosition].classList.remove("active");
    sliderPosition = index;
    items[sliderPosition].classList.add("active");
    thumbnails[sliderPosition].classList.add("active");
    infos[sliderPosition].classList.add("active");
}

function changeDirection () {
    if (scrollingDirection == next) {
        scrollingDirection = prev;
    } else {
        scrollingDirection = next;
    }
}
// Array of image URLs (all images have the same resolution)
const images = [
    "https://www.worldatlas.com/r/w1200/upload/51/07/4e/shutterstock-250781869.jpg",
    "https://th.bing.com/th/id/OIP.cn1M_lEOyHcog6_Vpvg-0QHaEr?rs=1&pid=ImgDetMain",
    "https://external-preview.redd.it/_Ovr4t7oQ3skNLu49EKanXFbMCgLHuRUwwrf4JTRJ0g.jpg?auto=webp&s=ad00a0e1c5b5130b2dc675fe2512c033a36fd607",
    "https://wallpaperaccess.com/full/2150468.jpg",
    "https://th.bing.com/th/id/OIP.fBWFwFSN2h_VcQLnSfeovgHaIE?w=1376&h=1500&rs=1&pid=ImgDetMain"
];

// Get DOM elements
const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0; // Track the current image index

// Function to display the current image
function showImage(index) {
    const images = document.querySelectorAll(".slider img");
    images.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
        }
    });
    updateButtons();
}

// Function to update the state of the buttons
function updateButtons() {
    prevBtn.disabled = currentIndex === 0; // Disable "Previous" button on the first image
    nextBtn.disabled = currentIndex === images.length - 1; // Disable "Next" button on the last image
}

// Event listener for the "Previous" button
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
});

// Event listener for the "Next" button
nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
});

// Preload images and add them to the DOM
function preloadImages() {
    const slider = document.querySelector(".slider");
    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Image ${index + 1}`;
        if (index === 0) {
            img.classList.add("active");
        }
        slider.appendChild(img);
    });
}

// Preload images and show the first image when the page loads
preloadImages();
showImage(currentIndex);
const img = document.getElementById('myImg');
let currentImgIdx = 1;
const images = [
    '../assets/designImage1.png',
    '../assets/designImage2.png',
    '../assets/designImage3.png',
];
// Call changeImage() function on button click
function changeImage(){
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
        // If current idx exceeds images array
        // length, reset it to 0 again
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
    // Increment current image idx by 1
}

// animation delay on scroll down
let elementsArray = document.querySelectorAll(".fade");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn );
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();
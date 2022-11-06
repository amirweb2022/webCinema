let header = document.getElementById("header");
let image = [
    "url('../../assets/images/image 62.png')",
    "url('../../assets/images/image 129.png')",
    "url('../../assets/images/image 130.png')",
    "url('../../assets/images/image 131.png')"
];
let index = 0;

setInterval(function () {
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
    header.style.backgroundImage = image[index];
}, 5000);
const backward = () => {
    index--;
    if (index < 0) {
        index = image.length - 1;
    }
    header.style.backgroundImage = image[index];
};
const forward = () => {
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
    header.style.backgroundImage = image[index];
};
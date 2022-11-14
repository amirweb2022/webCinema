// best movie
function bestMovieChangeStyle(element, movie) {
    for (let index = 0; index < element.parentNode.children.length; index++) {
        element.parentNode.children[index].classList.remove('activeBoxMovie');
        element.parentNode.children[index].style.backgroundImage = "none"
    }
    element.classList.add('activeBoxMovie');
    switch (movie) {
        case "bestMovie1":
            element.style.backgroundImage = "url('../../assets/images/Rectangle 56.png') , url('../../assets/images/Rectangle 55.png')";
            break;
        case "bestMovie2":
            element.style.backgroundImage = "url('../../assets/images/Rectangle 60.png') , url('../../assets/images/image 125.png')";
            break;
        case "bestMovie3":
            element.style.backgroundImage = "url('../../assets/images/Rectangle 58.png') , url('../../assets/images/image 113.png')";
            break;
        case "bestMovie4":
            element.style.backgroundImage = "url('../../assets/images/Rectangle 59.png') , url('../../assets/images/image 124.png')";
            break;
        default:
            break;
    }
}
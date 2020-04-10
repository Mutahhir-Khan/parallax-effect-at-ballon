console.log("connected");
var container = document.querySelector(".container");
var balloon = document.querySelector(".balloon");
console.log(container, balloon);

window.addEventListener("scroll", function () {
    // parallax()
    parallax(balloon, 'right', 50)
    // parallax(balloon, 'down', 50)
    parallax(container, 'up', this.scrollY)
    // parallax(container, 'scaleDown', 1.5)
    // parallax(container, 'scaleUp', 1)
});


var parallax = (element, direction, speed) => {
    var scrollValue = window.scrollY
    switch (direction) {
        case 'right':{
            console.log(`scroll ${scrollValue}`)
            element.style.transform = `translateX(${scrollValue * (8*(speed / 100))}px)`;
            break;
        }

        case 'up':{
            element.style.transform = `translateY(${scrollValue}px)`;
            break;
        }
        case 'scaleDown':{
            element.style.transform = `scale(${speed}, ${speed})`
        }
        case 'scaleUp':{
            element.style.transform = `scale(${speed}, ${speed})`
        }

        default:
            break;
    }
};

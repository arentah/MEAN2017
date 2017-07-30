const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');
const CIRCLE3 = document.querySelector('.circle3');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).

    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition = windowHeight - e.clientY - 26;

    var horizontalPosition2 = windowWidth - e.clientX - 26;
    var verticalPosition2 = windowHeight - e.clientY - 26;

    var horizontalPosition3 = windowWidth - e.clientX - 26;
    var verticalPosition3 = windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    //CIRCLE.style.top = verticalPosition + 'px';

    //CIRCLE2.style.left = horizontalPosition2 + 'px';
    CIRCLE2.style.top = verticalPosition2 + 'px';

    CIRCLE3.style.left = horizontalPosition3 + 'px';
    CIRCLE3.style.top = verticalPosition3 + 'px';

}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "black";
    CIRCLE.style.borderColor = "red";
}

function changeColorOnTouch2() {
    CIRCLE2.style.backgroundColor = "red";
    CIRCLE2.style.borderColor = "black";
}

function changeColorOnTouch3() {
    CIRCLE3.style.backgroundColor = "blue";
    CIRCLE3.style.borderColor = "magenta";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE2.addEventListener('mouseenter', changeColorOnTouch2, false);
CIRCLE3.addEventListener('mouseenter', changeColorOnTouch3, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
CIRCLE3.addEventListener('mouseleave', function(){CIRCLE3.removeAttribute("style");}, false);

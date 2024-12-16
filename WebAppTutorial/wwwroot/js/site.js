// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// tutorial assignment
function newColor() {
    document.getElementById("hello").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello").style.color = "darkolivegreen";
}

//animation
let id = null; // moved this variable outside of function for global scope
let pos = 0; // moved this variable outside of function for global scope too - when animation restarts after stop it will start from it's last position
function myMove() { // added more functionality to the W3School example. Animate continues until stop button is clicked. 
    
    const elem = document.getElementById("animate");
    
    let direction = 1; //This variable is used to track the direction of the element

    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            direction = -1; // Change direction to backward
        } else if (pos == 0) {
            direction = 1; // Change direction to forward
        }

        pos += direction; // Increment or decrement position based on direction
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
    }
    
}

document.getElementById("stopBtn").addEventListener("click", () => { // moved id outside of function so this event listener can reference it
    if (id !== null) { // check if not null before resetting to avoid possible errors
        clearInterval(id);
        id = null; // Reset id to prevent re-clearing
    }
});





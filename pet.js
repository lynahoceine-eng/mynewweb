console.log("Toffee is awake!");

const pet = document.getElementById("website-pet");
const catImage = document.getElementById("toffee-image");

const walkingFrames = [
    "images/toffee-walk-1.png",
    "images/toffee-walk-2.png",
    "images/toffee-walk-3.png",
    "images/toffee-walk-4.png"
];

let frame = 0;
let position = 20;
let direction = 1;

function walkToffee() {
    const target = direction === 1
        ? window.innerWidth - pet.offsetWidth - 20
        : 20;

    const movement = setInterval(() => {
        position += direction * 2;
        pet.style.left = position + "px";

        frame = (frame + 1) % walkingFrames.length;
        catImage.src = walkingFrames[frame];

        if (
            (direction === 1 && position >= target) ||
            (direction === -1 && position <= target)
        ) {
            clearInterval(movement);
            position = target;
            pet.style.left = position + "px";

            setTimeout(() => {
                direction *= -1;
                walkToffee();
            }, 3000);
        }
    }, 150);
}

walkToffee();

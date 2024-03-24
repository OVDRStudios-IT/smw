
const splashes = ["GOON!!!",
    "Die!",
    "Enjoying the goonsesh?",
    "Keep gooning!",
    "*Yawn*",
    "I'm going to bed.",
    "SMW, baby!",
    "Hacker free!",
    "100% Drama Free!",
    "Don't stop mewing!",
    "Negative canthal tilt!",
    "200% more airplanes!",
    "Crack.",
    "Peter, what are you doing?",
    "WHAT THE FUCK?!",
    "Live. Laugh. Goon.",
    "I know what you are.",
    "Game over.",
];

window.addEventListener("load", (event) => {
    var splash = splashes[Math.floor(Math.random()*splashes.length)];
    document.querySelector(".home-heading").innerHTML = splash;
});

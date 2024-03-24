
const splashes = ["GOON!!!",
    "Die!",
    "Enjoying the goonsesh?",
    "Keep gooning!",
    "*Yawn*",
    "I'm going to bed.",
    "SMW, baby!",
    "Politic free!",
    "100% Drama Free! (hopefully)",
    "Don't stop mewing!",
    "Positive canthal tilt!",
    "Negative canthal tilt!",
    "200% more capitalism!",
    "Crack.",
    "Peter, what are you doing?",
    "WHAT THE FUCK?!",
    "Live. Laugh. Goon.",
    "I know what you are.",
    "Looksmaxing 24/7",
    "Don't stop the jelq!",
    "Edge!! Edge!! Edge!!",
    "Game over.",
    "Don't eat ass in the halls!",
    "FUCK YOU!!",
];

window.addEventListener("load", (event) => {
    var splash = splashes[Math.floor(Math.random()*splashes.length)];
    document.querySelector(".home-heading").innerHTML = splash;
});

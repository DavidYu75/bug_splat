const images = ["images/rattata.png", "images/splat.png"]

const defiantComments = ["Is that all you got?",
                        "You suck!",
                        "So weak",
                        "You smell",
                        "You should run away",
                        "Sleep with one eye open",
                        "You're done",
                        "I'm yawning right now"
                    ]

const mercyComments = ["No please stop!", 
                        "I have a family", 
                        "Mercy!", 
                        "I'll do what you want", 
                        "Help me!",
                        "You don't have to do this",
                        "Wait! I'll buy you dinner"
                    ]

const splattedRats = []

const usedDefiantComments = []

const usedMercyComments = []

let numOfRats = 15;

function initialize() {
    document.getElementById("resetbutton").addEventListener("click", reset);
}

let sayComment = (ratsLeft) => {
    // if (ratsLeft === 0) {
    //     document.getElementById("comment").innerHTML = "You've splatted us all.";
    // }
    (ratsLeft === 0) 
        ? document.getElementById("comment").innerHTML = "You've splatted us all."
        : console.log("There are still rats remaining"); 
    if (ratsLeft >= 8) {
        randomDefiantComment = Math.floor(Math.random() * (defiantComments.length));
        document.getElementById("comment").innerHTML = `Comment: ${defiantComments[randomDefiantComment]}`;
        usedDefiantComments.push(defiantComments[randomDefiantComment]);
        defiantComments.splice(randomDefiantComment, 1);
    } else if (ratsLeft < 8 && ratsLeft > 0) {
        randomMercyComment = Math.floor(Math.random() * (mercyComments.length));
        document.getElementById("comment").innerHTML = `Comment: ${mercyComments[randomMercyComment]}`;
        usedMercyComments.push(mercyComments[randomMercyComment]);
        mercyComments.splice(randomMercyComment, 1);
    }
}

let splat = (rat) => {
    if (splattedRats.includes(rat) != true) {
        document.getElementById(rat).src = "images/splat.png";
        numOfRats--;
        sayComment(numOfRats);
        splattedRats.push(rat);
    }
}

function reset() {
    for (comment = 0; comment < usedDefiantComments.length; comment++) {
        defiantComments.push(usedDefiantComments[comment]);
    }
    usedDefiantComments.length = 0;
    for (comment = 0; comment < usedMercyComments.length; comment++) {
        mercyComments.push(usedMercyComments[comment]);
    }
    usedMercyComments.length = 0;
    numOfRats = 15;

    for (rat = 0; rat < splattedRats.length; rat++) {
        document.getElementById(splattedRats[rat]).src = "images/rattata.png";
    }

    splattedRats.length = 0;

    document.getElementById("comment").innerHTML = "";
}
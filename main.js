// 2 to 26: all pop ups 
$(document).ready(function () {
    $(".tutorial").click(function () {
        $(".overlay").fadeToggle();
    });
});
$(document).ready(function () {
    $(".mortem").click(function () {
        $(".mortemdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".banhammer").click(function () {
        $(".banhammerdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".zjokar").click(function () {
        $(".zjokardis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".nuof").click(function () {
        $(".nuofdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".efrir").click(function () {
        $(".efrirdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".afwreg").click(function () {
        $(".afwregdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".sadghost").click(function () {
        $(".sadghostdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".angryghost").click(function () {
        $(".angryghostdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".golem").click(function () {
        $(".golemdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".nenhert").click(function () {
        $(".nenhertdis").fadeToggle();
    });
});
$(document).ready(function () {
    $(".storeitem").click(function () {
        $(".storeitems").fadeToggle();
    });
});
// texts which will get displayed, currently at 38 texts
var arr = ["Oooh, candy. Yikes, it expired before you were even born.", "You run into a bear. It seems hungry.", "You see someone eating a pineapple pizza and slap it out of their hand.", "You spend days trying to think of a creative game idea. It doesn't work.", "You run into a strange man with some suspicious looking pills and a drink.",
    "You drop your sandwich. You're sad now.", "A tree throws an apple at you. Since when did trees throw apples?", "An orange man with a wig rants about how he wants to build a wall.", "A man deep fries a bucket.", "You hear screaming in the distance. Your neighbours must be arguing again.", "A large purple man kills half the people in your town.",
    "Why do you call your friend 'Two Armed Jerry'? Because he has no legs.", "A man dares you to run across a pile of Legos barefoot. You succeed, but what did it cost? Everything.", "You climb up a mountain. You've peaked in life, it's only downhill from here.", "What did the potato say to the man? I don't know, potatoes don't talk.",
    "You come across a dark cave. That totally looks safe.", "You wonder to yourself 'What's the real purpose of this game?'", "A tree falls in the distance. It doesn't make any sound.", "All this aimless wandering is making you hungry. You decide to eat some delicious air.", "The cake is a lie!", "A flying spider is terrorizing your town. You decide now would be a good time to help everyone and rob the town bank.",
    "Your pet rock died. It's a very sad day.", "You realize that these texts are as consistent as a lumpy cake.", "You destroy a tree with only your fist.", "What's white and could kill you if it fell out of a tree? A fridge.", "What's green and could kill you if it fell out of a tree? A green coconut.", "What kind of seal could kill you if it fell out of a tree? A Navy SEAL.", "Can a flight of stairs really fly?",
    "Look at all those chickens!", "You see a sign that says 'Road work ahead'... You sure hope it does.", "Lightning strikes a tree next to you. Ouch, that must of hurt.", "The full moon is out. You hear wolves howl in the distance.", "Someone in the distance yells 'Everybody do the flop!' and you suddenly faceplant on the ground.", "A moustached man with a red hat jumps on a turtle. You feel sorry for the turtle.",
    "Somebody once told me the world is going to roll me, I ain't the sharpest tool in the shed.", "A red haired man shouts that he's 'Never gonna give you up, never gonna let you down, never run around and desert you.'", "You hear a duck ask a man at a lemonade stand 'Hey, got any grapes?'", "You see a crying ghost with a half eaten gallon bucket of vanilla ice cream."
];
// function picks ranfom text from array and user gains a random amount of exp from 1 to 10
function getItem() {
    document.getElementById("exploretexts").innerHTML = arr[Math.floor(Math.random() * arr.length)];
    exp.value += 1 + Math.floor(Math.random() * 1256470);
    console.log(exp)
}
// greys out the explore button for 1.5 seconds to prevent spamming
function explore(obj) {
    obj.disabled = true;
    setTimeout(function () {
        obj.disabled = false;
    }, 1000);
}
// level up stuff, a is reset exp, b is level, c is gold
b = 1;
c = 0;
function expvalues() {
    var myexp = document.getElementById("exp").value;
    if (myexp > 99.99) {
        alert("Congrats! You levelled up!");
        a = 0;
        document.getElementById('exp').value = a;
        b += 1;
        document.getElementById('playerlevel').value = b;
        console.log(b);
        c += 50 + Math.floor(Math.random() * 50);
        document.getElementById('playergold').value = c;
        console.log(c);
    }
}
// fighting mechanics
function fight() {
    health.value -= 1 + Math.floor(Math.random() * 10);
    npchealth.value -= 1 + Math.floor(Math.random() * 10);
}
function kill() {
    var myhealth = document.getElementById("health").value;
    if (myhealth < 1) {
        document.getElementById("udead").innerHTML = "You died! :c";
        alert("Oh no! You died! :c");
        document.getElementById("fighting").disabled = true;
    }
}
function killing() {
    var mynpchealth = document.getElementById("npchealth").value;
    if (mynpchealth < 1) {
        document.getElementById("dead").innerHTML = "You won! :D";
        alert("Congrats! You won the fight!");
        document.getElementById("fighting").disabled = true;
    }
}
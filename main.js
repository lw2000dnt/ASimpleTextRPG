// $("selector").method();
$(document).ready(function() {
    $(".trigger").click(function() {
        $(".overlay").fadeToggle();
    });
});
$(document).ready(function() {
    $(".triggr").click(function() {
        $(".overlay").fadeToggle();
    });
});
$(document).ready(function() {
    $(".mortem").click(function() {
        $(".overlay").fadeToggle();
    });
});
$(document).ready(function() {
    $(".banhammer").click(function() {
        $(".banhammerdis").fadeToggle();
    });
});
$(document).ready(function() {
    $(".zjokar").click(function() {
        $(".zjokardis").fadeToggle();
    });
});
$(document).ready(function() {
    $(".nuof").click(function() {
        $(".nuofdis").fadeToggle();
    });
});
var arr = ["Oooh, candy. You eat the candy and get dysentery.","You run into a bear. It seems hungry.","You see someone eating a pineapple pizza and slap it out of their hand.", "You spend days trying to think of a creative game idea. It doesn't work.", "You run into a strange man called Bill with some suspicious looking pills and a drink.",
"You drop your sandwich. You're sad now.", "A tree throws an apple at you. Since when did trees throw apples?","An orange man with a wig rants about how he wants to build a wall.", "A man deep fries a bucket.","You hear screaming in the distance. Your neighbours must be arguing again.","A large purple man kills half the people in your town.",
"Why do you call your friend 'Two Armed Jerry'? Because he has no legs.", "A man dares you to run across a pile of Legos barefoot. You succeed, but what did it cost? Everything.", "You climb up a mountain. You've peaked in life, it's only downhill from here.","What did the potato say to the man? I don't know, potatoes don't talk."];
function getItem(){
    document.getElementById("exploretexts").innerHTML = arr[Math.floor(Math.random() * arr.length)];
}


// player.inventory = {
//   tools: [
// ],
// food: [
// ]
// };


// // when player picks up hammer
// player.inventory.push({
// name: 'hammer',
// icon: 'images/hammer.png',
// effect: function(target) {
//   console.log('whacked the ' + target.name);
// }
// });
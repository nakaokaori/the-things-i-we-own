var Index = [
    "な かおかおりの",
    "か ったりもらったり拾ったり作ったりした",
    "お 気に入りのもの",
    "カ タログ⚵",
    "お きもの・飾り⚱✢ 道具⌚︎ 身につけるもの༒ 食べるもの☕︎ 滞在場所毎 ∝~∼～~ ᨏᨑᨒ⭒の",
     "リ スト ⸙",
]

function more() {
    $("#header marquee").html(Index[Math.floor(Math.random() * Index.length)]);
}

function greeting() {
    $("#greeting #text").html(Index);
}

var volume;
var synth;
var notes;
$(document).ready(function(event) {
    // StartAudioContext(Tone.context, window);  
    $(window).click(function() {
        Tone.context.resume();
    });

    volume = new Tone.Volume(-10);
    synth = new Tone.PolySynth(10, Tone.Synth).chain(volume, Tone.Master);
    notes = Tone.Frequency("g6").harmonize([1, 6, 11, 12, 4, 20, 0, 80]);
});

$("#marquee").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "1");
});

$("._more").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "1n");
});

$(".label").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "5n");
});

$(".list_item img").hover(function() {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "8n");
});

$(".list_toggle").hover(function() {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "10n");
});

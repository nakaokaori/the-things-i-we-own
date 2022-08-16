var Index = [
    "な かおかおりの<br/>",
    "か ったりもらったり拾ったり作ったりした",
    "お 気に入りのもの<br/>",
    "カ タログ⚵",
    "説明文は、検索エンジンに表示される挨拶文としても使用する。"
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
    notes = Tone.Frequency("g6").harmonize([1, 7, 11, 12, 4, 19, 0, 80]);
});

$("#marquee").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "1");
});

$("._more").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "2");
});

$(".label").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "2n");
});

$(".list_item img").hover(function() {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "3");
});

$(".list_toggle").hover(function() {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "10n");
});

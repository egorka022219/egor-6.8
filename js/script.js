$(document).ready(_init_);

let one = 1;
let three = 3;
let seven = 7;

function _init_ () {
    $('#one-progress-bar').width(one + '%');
    $('#three-progress-bar').width(three + '%');
    $('#seven-progress-bar').width(seven + '%');
}

document.getElementById('btn-one').onclick = function greenBtn () {
    let caption = document.getElementById("one-progress-bar");
    let oneValue = 1;
    one+=oneValue;
    caption.style.width = one + '%';
}

document.getElementById('btn-three').onclick = function yellowBtn() {
    let caption = document.getElementById("three-progress-bar");
    let threeValue = 3;
    three += threeValue;
    caption.style.width = three + '%';
};

document.getElementById('btn-seven').onclick = function blueBtn() {
    let caption = document.getElementById("seven-progress-bar");
    let sevenValue = 7;
    seven += sevenValue;
    caption.style.width = seven + '%';
}
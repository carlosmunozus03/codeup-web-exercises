// var accessTheDom = document.getElementById('dc');
// var showMe = accessTheDom.innerHTML;
// alert(showMe);
var like = document.getElementById('like');
var dontLike = document.getElementById('dontLike');
var dc = document.getElementById('dc');
dc.innerHTML = dc.innerHTML + ' Animated universe';
var output = like.innerHTML + ' ' + dc.innerHTML;
// alert(output);
var marvel = document.getElementById('marvel'); // primero obtiene el elemento
marvel.setAttribute('class', 'hotpink');// luego agrego clase y nombre
marvel.innerHTML = marvel.innerHTML + ' cinematic universe';// ahora lo llamo a la pantalla como un console.log
dc.setAttribute('class', 'hotpink');

// ahora otra cosa para cambiar el color por medio de arrays

var hotpink = document.getElementsByClassName('hotpink'); // se obtiene el elemento
// hotpink[0].style.color = 'blue'; // ahora puedo cambiar el color
// hotpink[1].style.color = 'green';
// hotpink[1].style.fontFamily = 'sans-serif';

// usando un for loop

for (var i = 0; i < hotpink.length; i++) {
    hotpink[i].style.color = 'green';
    hotpink[i].style.fontFamily = 'sans-serif';
}

// finaliza con agregar form en html, colores en los inputs

var submitButton = document.getElementById('colorSubmission');
submitButton.onclick = function () {
    var colorInput = document.getElementById('colorPreference');
    var paragraphs = document.getElementsByTagName('p');
    colorPreference = colorInput.value;
    // alert(colorPreference);
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
    colorInput.value = '';
}

// para botones

var theHulk = document.getElementById('theHulk');
var hulkState = theHulk.getAttribute('data-state');
var hulkStrength = theHulk.getAttribute('data-strength');
var hulkIntelligence = theHulk.getAttribute('data-intelligence');
alert('the hulk is currently in ' + hulkState + ' state.His strength is  '+ hulkStrength + ' and his intelligence is' +
    ' ' + hulkIntelligence);

var transformButton = document.getElementById('transformHulk');
transformButton.onclick = function () {
    var hulkState = theHulk.getAttribute('data=state');
    if (hulkState === 'The hulk') {
        theHulk.setAttribute('data-state', 'Bruce Banner');
    } else {
        theHulk.setAttribute('data-state','The Hulk');
    }
}


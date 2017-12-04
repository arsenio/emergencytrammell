var maxCount = 8;
var mp3s = {};
var lastIndex;
var timer;
var theManImg;

function onPlay(evt) {
    if (timer !== undefined) {
        window.clearTimeout(timer);
    }

    theManImg.src = 'images/trammell-on.png';

    var audioId = evt.target.getAttribute('rel');
    if (audioId === '6') {
        timer = setTimeout(function() {
            theManImg.src = 'images/snort.png';
            timer = setTimeout(function() {
                theManImg.src = 'images/trammell-on.png';
            }, 350);
        }, 2130);
    }
};

function onEnded(evt) {
    theManImg.src = 'images/trammell-1.gif';
    evt.target.removeEventListener('play', onPlay);
    evt.target.removeEventListener('ended', onEnded);
};

function playSound(index) {
    var mp3 = mp3s[index];
    if (mp3) {
        mp3.addEventListener('play', onPlay);
        mp3.addEventListener('ended', onEnded);
        mp3.play();
    }
}

dojo.addOnLoad(function() {
    for (var i=1; i<=maxCount; i++) {
        var mp3 = document.createElement('audio');
        mp3.setAttribute('src', '/audio/et' + i + '.mp3');
        mp3.setAttribute('rel', i);
        mp3.setAttribute('preload', true);
        document.body.appendChild(mp3);
        mp3s[i] = mp3;
    }

    if (window.navigator.standalone) {
        dojo.style('iphone_bookmark', 'display', 'none');
    }
});

dojo.addOnLoad(function() {
    theManImg = dojo.byId('superclick_image');

    dojo.connect(document, 'onkeyup', function(e) {
      var index = e.keyCode - 48;
      if (index >= 1 && index <= maxCount) {
        lastIndex = index;
        playSound(index);
      }
    });

    var theMan = dojo.byId('superclick');
    dojo.connect(theMan, 'onclick', function(e) {
        dojo.stopEvent(e);

        var looking = true;
        while (looking) {
            var index = Math.ceil(Math.random() * maxCount);
            if (index !== lastIndex) {
                looking = false;
                lastIndex = index;
            }
        }

        playSound(index);
    });
});

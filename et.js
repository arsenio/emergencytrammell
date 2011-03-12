var timer;

dojo.addOnLoad(function() {
    soundManager.url = 'SoundManager2/swf/';
    soundManager.useFlashBlock = false; // optionally, enable when you're ready to dive in
    soundManager.debugMode = false;
    soundManager.onready(function() {
        for (var i = 0; i < 6; i++) {
            var j = i + 1;
            soundManager.createSound({
                autoload:  true,
                autoplay:  false,
                id:  'etsound' + j,
                url: 'audio/et' + j + '.mp3',
            });
        }
    });
});

dojo.addOnLoad(function() {
    theManImg = dojo.byId('superclick_image');

    // attempt at preload
    // soundManager.onready(function(){
    //     sound = soundManager.load(random_file(), {
    //         onplay: function(){
    //             theManImg.src = 'images/trammell-on.png';
    //         },
    //         onfinish: function() {
    //             theManImg.src = 'images/trammell-1.gif';
    //
    //         }
    //     });
    // });

    var theMan = dojo.byId('superclick');
    dojo.connect(theMan, 'onclick', function(e) {
        dojo.stopEvent(e);
        if (timer !== undefined) {
            window.clearTimeout(timer);
        }

        sound = soundManager.play(random_file(), {
            onplay: function(){
                theManImg.src = 'images/trammell-on.png';
            },
            onfinish: function() {
                theManImg.src = 'images/trammell-1.gif';

            }
        });

        sound.onposition(2500, function(){
            if (sound.url == 'audio/et6.mp3') {
                theManImg.src = 'images/snort.png';
            }
        }).onposition(3000, function(){
            if (sound.url == 'audio/et6.mp3') {
                theManImg.src = 'images/trammell-on.png';
            }
        });
        sound.play({
            onfinish: function() {
                theManImg.src = 'images/trammell-1.gif';
            }
        });

    });
});

function random_file() {
    num = 1 + (Math.floor(Math.random()*5));
    //num = 6;
    return 'etsound' + num;
}

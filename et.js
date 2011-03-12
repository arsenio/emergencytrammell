var spin, timer;

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
    var spinner = dojo.doc.createElement('img');
    spinner.src = 'images/spinner.gif';
    spinner.border = 0;
    spin = dojo.create(spinner);
    dojo.addClass(spin, 'spinner');
    dojo.place(spin, 'footer', 'before');
    dojo.style(spin, 'display', 'none');

    var theMan = dojo.byId('superclick');
    var theManImg = dojo.byId('superclick_image');
    dojo.connect(theMan, 'onclick', function(e) {
        dojo.stopEvent(e);
        if (timer !== undefined) {
            window.clearTimeout(timer);
        }

        dojo.style(spin, 'display', 'none');

        var rndNum = 1 + (Math.floor(Math.random()*5));
        rndNum = 6;
        soundManager.play('etsound' + rndNum, {
          onplay: function(){
            theManImg.src = 'images/trammell-on.gif';
          },
          onfinish: function() {
            theManImg.src = 'images/trammell-1.gif';
          }
        }).onposition(2500, function(){
            if (rndNum == 6) {
                theManImg.src = 'images/snort.gif';
            }
        }).onposition(3000, function(){
            if (rndNum == 6) {
                theManImg.src = 'images/trammell-on.gif';
            }
        });
    });
});

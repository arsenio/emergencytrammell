var spin, timer;
var sounds = new Array();
var loaded = new Array(false, false, false, false, false);

dojo.addOnLoad(function() {
    soundManager.url = 'SoundManager2/swf/';
    soundManager.useFlashBlock = false; // optionally, enable when you're ready to dive in
    soundManager.debugMode = false;
    soundManager.onready(function() {
        for (var i = 0; i < 6; i++) {
            var j = i + 1;
            sounds.push(soundManager.createSound({
                id:  'etsound' + j,
                autoLoad: true,
                url: 'audio/et' + j + '.mp3',
                onload: function() {
                    unloaded[i] = true;
                }
            }));
        }
    });
});

function loadtimer() {
    var any_unloaded = false;
    for (var unload in unloaded) {
        if (!unload) {
            any_unloaded = true;
        }
    }
    if (!any_unloaded) {
        dojo.style(spin, 'display', 'none');
        return;
    }
    return window.setTimeout(loadtimer, 50);
}

dojo.addOnLoad(function() {
    var spinner = dojo.doc.createElement('img');
    spinner.src = 'images/spinner.gif';
    spinner.border = 0;
    spin = dojo.create(spinner);
    dojo.addClass(spin, 'spinner');
    dojo.place(spin, 'footer', 'before');
    dojo.style(spin, 'display', 'none');

    var theMan = dojo.byId('superclick');
    dojo.connect(theMan, 'onclick', function(e) {
        dojo.stopEvent(e);
        if (timer !== undefined) {
            window.clearTimeout(timer);
        }

        dojo.style(spin, 'display', 'none');

        var rndNum = Math.floor(Math.random()*5);
        sounds[rndNum].play();
    });
});
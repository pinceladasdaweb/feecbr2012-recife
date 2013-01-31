var webcam = (function(){

    var video = document.createElement('video');

    function play() {

        if (navigator.getUserMedia) {

            navigator.getUserMedia({video: true, audio: true, toString : function() {return "video,audio";} }, onSuccess, onError);

        } else {

            changeStatus('getUserMedia não é suportado nesse browser.', true);
        }

    }

    function onSuccess(stream) {

        var source;
 
        if (window.webkitURL) {

            source = window.webkitURL.createObjectURL(stream);

        } else {

            source = stream; // Opera e Firefox
        }
 

        video.autoplay = true;

        video.src = source;

        changeStatus('Sorria, você está sendo filmado.', false);

    }

    function onError() {

        changeStatus('Permita o acesso a câmera', true);

    }

    function changeStatus(msg, error) {
        var status = document.getElementById('status');
        status.innerHTML = msg;
        status.style.color = (error) ? 'red' : 'green';
    }

    return {
        init: function() {

            changeStatus('Clique em permitir para ter acesso a câmera', true);

            document.body.appendChild(video);

            navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);

            play();

        }()

    }


})();
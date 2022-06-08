var video = document.querySelector('video');

const options = {
    video:true

}

navigator.mediaDevices.getUserMedia(options);
then(function(stream){
    video.srcObject = stream
});

const imageFile = document.querySelector("#catImage");
const audioFile = document.querySelector("#audioFile");
const videoFile = document.querySelector("#videoFile");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const audioSlider = document.querySelector("#audioSLider")
const playVidButton = document.querySelector("#playVidButton");
const pauseVidButton = document.querySelector("#pauseVidButton");
const stopVidButton = document.querySelector("#stopVidButton");
const videoAudioSlider = document.querySelector("#videoAudioSLider")

imageFile.addEventListener("load", function (e){
    console.log("image loaded!", e);
});

audioFile.addEventListener("play", function (event){
    console.log("Playing", event);
});

audioFile.addEventListener("pause", (e) => {
    console.log(`Audio paused!`, e);
});

playButton.addEventListener("click", (e) => {
    audioFile.play();
});

pauseButton.addEventListener("click", (e) => {
    audioFile.pause();
});

stopButton.addEventListener("click", (e) => {
    audioFile.pause();
    audioFile.currentTime = 0;
});

audioSlider.addEventListener("input", (e) => {
    audioFile.volume = e.target.value;
})

videoFile.addEventListener("time", (e) => {
    console.log("video time is...", e);
});

videoFile.addEventListener('pause', (e) => {
    console.log(`The video is paused.`, e);
});

playVidButton.addEventListener("click", (e) => {
    videoFile.play();
});

pauseVidButton.addEventListener("click", (e) => {
    videoFile.pause();
});

stopVidButton.addEventListener("click", (e) => {
    audvideoFileioFile.pause();
    videoFile.currentTime = 0;
});

videoAudioSlider.addEventListener("input", (e) => {
    videoFile.volume = e.target.value;
})
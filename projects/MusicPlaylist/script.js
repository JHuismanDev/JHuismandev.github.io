let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentIndex = 0;

const songs = [
    {
        name: "About me",
        artist: "Koven X ROY",
        source: "../../files/music/AboutMe-Koven.mp3",
        image: "../../files/music/standard.png"
    },
    {
        name: "Fairytale",
        artist: "Culture Code",
        source: "../../files/music/Fairytale-CultureCode.mp3",
        image: "../../files/music/standard.png"
    },
    {
        name: "Colorblind",
        artist: "Netrum",
        source: "../../files/music/Colorblind-Netrum.mp3",
        image: "../../files/music/standard.png"
    },

];

function playSong(index) {
    const currentSong = songs[index];
    song.src = currentSong.source;
    document.querySelector('.song-img').src = currentSong.image;
    document.querySelector('h1').innerText = currentSong.name;
    document.querySelector('p').innerText = currentSong.artist;
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

document.getElementById("nextButton").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex);
});

document.getElementById("prevButton").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
});

const playlistIcon = document.getElementById("playlistIcon");
const playlistDropdown = document.createElement("div");
playlistDropdown.classList.add("playlist-dropdown");

songs.forEach((song, index) => {
    const playlistItem = document.createElement("div");
    playlistItem.classList.add("playlist-item");
    playlistItem.textContent = `${song.name} - ${song.artist}`;
    playlistItem.addEventListener("click", () => {
        currentIndex = index;
        playSong(currentIndex);
        closePlaylist();
    });
    playlistDropdown.appendChild(playlistItem);
});

playlistIcon.addEventListener("click", () => {
    if (playlistDropdown.classList.contains("show")) {
        closePlaylist();
    } else {
        openPlaylist();
    }
});

function openPlaylist() {
    playlistDropdown.classList.add("show");
    playlistIcon.appendChild(playlistDropdown);
}

function closePlaylist() {
    playlistDropdown.classList.remove("show");
    playlistIcon.removeChild(playlistDropdown);
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

setInterval(()=>{
    progress.value = song.currentTime;
},500);

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

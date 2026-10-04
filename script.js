console.log("Welcome to Spotify");

// Initialize the Variables


let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songInfo = document.getElementsByClassName('masterImg');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kalyani - ARJN,FIFTY4,KDS", filePath: "song/1.mp3", coverPath: "cover/cover1.jpg"},
    {songName: "Diamond Ni - Jigar Saraiya, Aditya Gadhvi", filePath: "song/2.mp3", coverPath: "cover/cover2.jpg"},
    {songName: "Har Funn Maula - Vishal Dadlani, Sara Khan", filePath: "song/3.mp3", coverPath: "cover/cover3.jpg"},
    {songName: "Majboor - Sheheryar Rehan, Zoya Waseem", filePath: "song/4.mp3", coverPath: "cover/cover4.jpg"},
    {songName: "Qaatil - Hasan Sekh, Iqbal", filePath: "song/5.mp3", coverPath: "cover/cover5.jpg"},
    {songName: "Safar - Seventy Sky", filePath: "song/6.mp3", coverPath: "cover/cover6.jpg"},
    {songName: "You & Me - Shubh", filePath: "song/7.mp3", coverPath: "cover/cover7.jpg"},
    {songName: "Mann Mera - gajendra Verma", filePath: "song/8.mp3", coverPath: "cover/cover8.jpg"},
    {songName: "Pehli Vaari - Mitraz, Raiha Ali", filePath: "song/9.mp3", coverPath: "cover/cover9.jpg"},
    {songName: "Unforgettable - Pnb Archives, Pnb Rockk", filePath: "song/10.mp3", coverPath: "cover/cover10.jpg"},
    {songName: "Lagecy - Alok", filePath: "song/11.mp3", coverPath: "cover/cover11.jpg"},
    {songName: "Around The World - Daft punk", filePath: "song/12.mp3", coverPath: "cover/cover12.jpg"},
    {songName: "Dekho Na - Mitraz", filePath: "song/13.mp3", coverPath: "cover/cover13.jpg"},
    {songName: "Ishq De Fanniyar", filePath: "song/14.mp3", coverPath: "cover/cover14.jpg"},
    {songName: "Kamariya - Arijit Sinhg", filePath: "song/15.mp3", coverPath: "cover/cover15.jpg"},
    {songName: "Judas - Lady Gaga", filePath: "song/16.mp3", coverPath: "cover/cover16.jpg"},
    {songName: "Let me Love U - Justin Bieber", filePath: "song/17.mp3", coverPath: "cover/cover17.jpg"},
    {songName: "Sheesha - Mitta Ror", filePath: "song/18.mp3", coverPath: "cover/cover18.jpg"},
    {songName: "Paro - Nej", filePath: "song/19.mp3", coverPath: "cover/cover19.jpg"},
    {songName: "Pyaar Se Bhi Zyada", filePath: "song/20.mp3", coverPath: "cover/cover20.jpg"},
    {songName: "Soni Soni - Darshan Ravel", filePath: "song/21.mp3", coverPath: "cover/cover21.jpg"},
    {songName: "Dinero - Trinided Cardona", filePath: "song/22.mp3", coverPath: "cover/cover22.jpg"},
    {songName: "Udi Udi - Aneesh Poojari", filePath: "song/23.mp3", coverPath: "cover/cover23.jpg"},
    {songName: "Overdose - Natori", filePath: "song/24.mp3", coverPath: "cover/cover24.jpg"},
]

songItem.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

// Listen to Eventes
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play(); 
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }) 
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >= 23) {
    songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 0) {
        songIndex = 23;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

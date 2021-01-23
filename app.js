const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title =document.getElementById('title');
const artist =document.getElementById('artist');
const next =document.getElementById('next');
const prev =document.getElementById('prev');

const songs = [
    {
        name:"music1",
        title:'Love Per Square Foot',
        artist:'Altamash Faridi, Tarannum Malik'
    },
    {
        name:'music2',
        title:'Aur Tanha',
        artist:'K.K',
    },
    {
        name:'music3',
        title:'Bb Ki Vines',
        artist:'Bhuvan Bam',
    }
]


let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
};
play.addEventListener('click', () =>{
    isPlaying? pauseMusic() : playMusic();
});

// changing music function

const loadSongs = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";
}

songIndex = 0;
// loadSongs(songs[0]);

const nextSong = () =>{
    songIndex = (songIndex + 1)% songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length)% songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)


let audio = new Audio();
let xhr = new XMLHttpRequest();
let ps=document.querySelector('.pause');
let st=document.querySelector('.play');
function MusicPlayer(url){
audio.src = url;
}
const music = MusicPlayer('https://st1.z1.fm/music/6/81/4-roses_are_red-oceans_(zvukoff.ru).mp3')
function start(){
    ps.style.display='block ';
    st.style.display='none ';
   audio.play();
}
function pause(){
    audio.pause();
    ps.style.display='none ';
    st.style.display='block ';
}
function stop(){
    audio.pause();
    audio.currentTime = 0.0;
    ps.style.display='none ';
    st.style.display='block ';
}
xhr.open('GET', 'https://st1.z1.fm/music/6/81/4-roses_are_red-oceans_(zvukoff.ru).mp3', true);

xhr.send();

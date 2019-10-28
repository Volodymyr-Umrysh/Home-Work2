let ps=document.querySelector('.pause');
let st=document.querySelector('.play');
let stop=document.querySelector('.stop');

function MusicPlayer(){

    let audio = new Audio();
    let name;
    let trackName;

    this.getName = function(){
        return name
    }

    this.getTrackNme = function(){
        return trackName
    }

    function resetTime(){
        audio.currentTime = 0.0;
    }
    this.play = function(){
        audio.play()
    }
    this.setTrack = function(trackObject){
        name = trackObject.name
        trackName = trackObject.trackName
        audio.src = trackObject.url
    }
    this.pause=function(){
        audio.pause()
    }
    this.stop=function(){
        audio.pause();
        resetTime()
    }
    
}

const player = new MusicPlayer()

player.setTrack({
    url:'https://st1.z1.fm/music/6/81/4-roses_are_red-oceans_(zvukoff.ru).mp3',
    name: 'Roses',
    trackName: 'Red Ocean'
})

st.onclick=function(){
    player.play();
    ps.style.display='block';
    st.style.display='none';
    document.querySelector('.info').textContent = player.getName()+ '-'+ player.getTrackNme()
}
ps.onclick=function(){
    player.pause();
    ps.style.display='none';
    st.style.display='block';
}
stop.onclick=function(){
    player.stop();
    ps.style.display='none';
    st.style.display='block';
}
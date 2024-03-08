var songindex=0;
let audioele=new Audio('/songs/1.mp3')
let playits=document.getElementById("playit")
let mastersongname=document.getElementById('mastersongname')
let myprogressbar=document.getElementById("myProgressBar")
let songItems=Array.from(document.getElementsByClassName("songItem"))
let song=[
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
]
// console.log(songItems)
songItems.forEach((element,i)=>{
    // console.log(element,i)
   element.getElementsByTagName("img")[0].src=song[i].coverPath
   element.getElementsByTagName("span")[0].innerText=song[i].songName
})
const makeplay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
var time=0;
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioele.paused || audioele.currentTime<=0){
            songindex=parseInt(e.target.id);
            makeplay();
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            audioele.src=`songs/${songindex+1}.mp3`
            mastersongname.innerText=song[songindex].songName
            audioele.currentTime=time;
            // audioele.currentTime=myprogressbar.value*audioele.duration/100
           audioele.play()
           playits.classList.remove('fa-circle-play')
           playits.classList.add('fa-circle-pause')
        }else{
            audioele.pause();
            time=audioele.currentTime
           e.target.classList.remove('fa-circle-pause')
         e.target.classList.add('fa-circle-play')
         playits.classList.remove('fa-circle-pause')
         playits.classList.add('fa-circle-play')
        }
       
    })
})
document.getElementById("next").addEventListener('click',()=>{
    
  if(songindex>=7){
        songindex=0;
        mastersongname.innerText=song[songindex].songName
        document.getElementById("0").classList.remove('fa-circle-play')
        document.getElementById("0").classList.add('fa-circle-pause')
        audioele.play();
    }
       else{ makeplay();
        songindex=songindex+1;
        audioele.src=`songs/${songindex+1}.mp3`
        audioele.currentTime=0;
         id=`${songindex}`
        document.getElementById(id).classList.remove('fa-circle-play')
        document.getElementById(id).classList.add('fa-circle-pause')
       audioele.play()
       playits.classList.remove('fa-circle-play')
       playits.classList.add('fa-circle-pause')
       mastersongname.innerText=song[songindex].songName
    }
}
)
document.getElementById("prev").addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }else{
        makeplay();
        songindex=songindex-1;
        audioele.src=`songs/${songindex+1}.mp3`
        audioele.currentTime=0;
        id=`${songindex}`
        document.getElementById(id).classList.remove('fa-circle-play')
        document.getElementById(id).classList.add('fa-circle-pause')
       audioele.play()
       playits.classList.remove('fa-circle-play')
       playits.classList.add('fa-circle-pause')
       mastersongname.innerText=song[songindex].songName
    }
})

playits.addEventListener('click',()=>{
    if(audioele.paused || audioele.currentTime<=0){
        audioele.play();
        playits.classList.remove('fa-circle-play')
        playits.classList.add('fa-circle-pause')
        id=`${songindex}`
        document.getElementById(id).classList.remove('fa-circle-play')
        document.getElementById(id).classList.add('fa-circle-pause')
    }else{

        audioele.pause();
        playits.classList.remove('fa-circle-pause')
        playits.classList.add('fa-circle-play')
       makeplay();
    }
})
audioele.addEventListener('timeupdate',()=>{
    // console.log(audioele.currentTime)
   progress=parseInt((audioele.currentTime/audioele.duration)*100);
   myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioele.currentTime=myprogressbar.value*audioele.duration/100
})
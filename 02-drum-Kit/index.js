
const w_drum_btn=document.querySelector('.w.drum');
const a_drum_btn=document.querySelector('.a.drum');
const s_drum_btn=document.querySelector('.s.drum');
const d_drum_btn=document.querySelector('.d.drum');
const j_drum_btn=document.querySelector('.j.drum');
const k_drum_btn=document.querySelector('.k.drum');
const l_drum_btn=document.querySelector('.l.drum');

function playAudio(btn){
    const audio= new Audio(`sounds/${btn}.mp3`);
    audio.play();
    buttonAnimation(btn);
}

w_drum_btn.addEventListener("click",()=>playAudio("w"));
a_drum_btn.addEventListener("click",()=>playAudio("a"));
s_drum_btn.addEventListener("click",()=>playAudio("s"));
d_drum_btn.addEventListener("click",()=>playAudio("d"));
j_drum_btn.addEventListener("click",()=>playAudio("j"));
k_drum_btn.addEventListener("click",()=>playAudio("k"));
l_drum_btn.addEventListener("click",()=>playAudio("l"));

const validKeys=['w','a','s','d','j','k','l'];

window.addEventListener("keydown",(event)=>{

    let key = event.key.toLowerCase();

    
    if(validKeys.includes(key)){
        playAudio(key);
    }
}
)


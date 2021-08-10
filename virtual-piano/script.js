window.addEventListener('load', function(){
  const pianoKeysContainer = document.querySelector('.piano');
  const pianoKeys = document.querySelectorAll('.piano-key');
  const btnLetters = document.querySelector('.btn-letters');
  const btnNotes = document.querySelector('.btn-notes');
  const full = document.documentElement;
  const openFullBtn = document.querySelector('.fullscreen');
  let audio;
  let pianoKey;

 


  openFullBtn.addEventListener('click', changeFullscreen);



  function changeFullscreen(){
    if(document.fullscreenElement) {
      document.exitFullscreen();
    }
      
    else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } 
  };




btnLetters.addEventListener('click', () => {
   btnLetters.classList.add("btn-active");
   btnNotes.classList.remove("btn-active");

   pianoKeys.forEach(elem => {
   elem.classList.add('piano-key-letter');
});

});
btnNotes.addEventListener('click', () => {
  btnNotes.classList.add("btn-active");
  btnLetters.classList.remove("btn-active");
  
  pianoKeys.forEach(elem => {
    elem.classList.remove('piano-key-letter');
  });
});

  let getPianoKey = (e) => {
     pianoKey = document.querySelector(`.piano-key[data-key="${e.code}"]`);
  if (!pianoKey) return;
  };




  let playAudio = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };


window.addEventListener('keydown', function(e){

  getPianoKey(e);
 
  pianoKey.classList.add('piano-key-active');

 if (e.repeat == true) {
  return;
  }
 
  audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;
  playAudio(audio);
});



window.addEventListener('keyup', (e) => {
  getPianoKey(e);
  pianoKey.classList.remove('piano-key-active');
});

 
const startPlay = (e) => {
  e.target.classList.add('piano-key-active');
  let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
  playAudio(audio);

}
const stopPlay = (e) => {
  e.target.classList.remove('piano-key-active')
}

const startCorrespondOver = (e) => {
  if(e.target.classList.contains('piano-key')) {
    e.target.classList.add('piano-key-active');
    let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    playAudio(audio);
  };
  pianoKeys.forEach(elem => {
    elem.addEventListener('mouseover', startPlay);
    elem.addEventListener('mouseout', stopPlay);

    })
};

const stopCorrespondOver = () => {
  pianoKeys.forEach(elem => {
    elem.classList.remove('piano-key-active');
    elem.removeEventListener('mouseover', startPlay);
    elem.removeEventListener('mouseout', stopPlay);

  })
}


  


  pianoKeysContainer.addEventListener('mousedown', startCorrespondOver, false);
  pianoKeysContainer.addEventListener('mouseup', stopCorrespondOver);


  window.addEventListener('mouseup', stopCorrespondOver);

  

});


























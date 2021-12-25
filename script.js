/*  play button */
var track = document.getElementById("myAudio"); 
var playbutton = document.getElementById("playButton")

/*  rate slider */
const container = document.querySelector('.slider__box');
const btn = document.querySelector('.slider__btn');
const color = document.querySelector('.slider__color');

dragElement = (target, btn) => {
  target.addEventListener('mousedown', (e) => {
      onMouseMove(e);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
  });

  onMouseMove = (e) => {
      e.preventDefault();
      let targetRect = target.getBoundingClientRect();
      let x = e.pageX - targetRect.left + 10;
      if (x > targetRect.width) { x = targetRect.width};
      if (x < 0){ x = 0};
      btn.x = x - 10;
      btn.style.left = btn.x + 'px';

      // get the position of the button inside the container (%)
      let percentPosition = (btn.x + 10) / targetRect.width * 100;
      
      // color width = position of button (%)
      color.style.width = percentPosition + "%";

  };

  onMouseUp  = (e) => {
      window.removeEventListener('mousemove', onMouseMove);
      btn.style.opacity = 1;

      btn.addEventListener('mouseover', function() {
        btn.style.opacity = 1;
      });
      
      btn.addEventListener('mouseout', function() {
        btn.style.opacity = 1;
      });
  };
};

dragElement(container, btn);


playButton.addEventListener("click", function() {

  // Pause song
  if(playButton.querySelector('i.fas').classList.contains('fa-pause')){
    playButton.querySelector('i.fas').classList.remove('fa-pause');
    playButton.querySelector('i.fas').classList.add('fa-play');
    track.pause(); 
  } else {
    // Play song
    playButton.querySelector('i.fas').classList.remove('fa-play');
    playButton.querySelector('i.fas').classList.add('fa-pause');
    track.play(); 
  }
});

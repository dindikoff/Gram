'use strict';

(function() {
    //DragAndDrop;

const dragEffectLine = () => {
    const effectLevel = document.querySelector(".effect-level__pin");
    const effectDepth = document.querySelector(".effect-level__depth");
  
    effectLevel.addEventListener("mousedown", evt => {
      evt.preventDefault();
  
      let startCord = { x: evt.clientX };
  
      let dragged = false;
  
      const onMouseMove = moveEvt => {
        moveEvt.preventDefault();
        dragged = true;
  
        let shift = {
          x: startCord.x - moveEvt.clientX
        };
  
        startCord = { x: moveEvt.clientX };
  
        if (parseInt(effectLevel.style.left) >= 450) {
          effectLevel.style.left = "450px";
        }
  
        if (parseInt(effectLevel.style.left) <= 0) {
          effectLevel.style.left = "0px";
        }
  
        effectLevel.style.left = effectLevel.offsetLeft - shift.x + "px";
        effectDepth.style.width = effectLevel.offsetLeft - shift.x + "px";
        effects.useEffectHandler();
      };
  
      const onMouseUp = upEvt => {
        upEvt.preventDefault();
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
  
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  };
  
  dragEffectLine();
})();
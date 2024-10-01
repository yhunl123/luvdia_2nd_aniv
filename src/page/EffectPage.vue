<template>
  <div class="wrap" id="screen" @click="">
    <div class="movement-div" id="lockerObj">
      <img class="locker" id="lockerObjheader" src="../assets/img/자물쇠 아이콘.png" alt="자물쇠"/>
    </div>

    <div class="movement-div" id="keyObj">
      <img class="key" id="keyObjheader" src="../assets/img/열쇠.png" alt="열쇠"/>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import {router} from "@/router";

export default {
  name: "EffectPage",
  components: {

  },
  setup() {
    let loading = false
    const wrap = ref(null)

    const play = () => {
      // sound.currentSrc = 0
      const sound = new Audio(require('@/assets/audio/086_팝.mp3'))
      sound.play()
    }

    const dragElement = (elmnt) => {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5 = 0;

      const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;


        if(!loading) {
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

          // my code
          let locker = document.getElementById("lockerObj")
          locker.style.top = (locker.offsetTop - (pos2*-1)) + "px";
          if (locker.offsetTop - e.clientY > -120 && locker.offsetTop - e.clientY < -100) {
            // 자물쇠와 열쇠 닿았을 때 동작
            loading = true
            router.push('/result')
          }
        }
      }

      const closeDragElement = () => {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }

      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    }


    onMounted(() => {
      //Make the DIV element draggagle:
      dragElement(document.getElementById("keyObj"));
      document.getElementById('screen').click()
    })

    return {
      // 변수
      wrap,

      // 메서드
      play,
      dragElement,
    }
  }
}
</script>

<style scoped>
.wrap {
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img.locker {
  z-index: 1;
  position: relative;
  width: 150px;
  height: auto;
  top: 5%;
}

.movement-div {
  position: absolute;
  text-align: center;
}

img.key {
  z-index: 2;
  position: relative;
  width: 100px;
  height: auto;
  rotate: 180deg;
  top: 80vh;
  cursor: move;
}

</style>
<template>
  <div class="wrap" id="screen" @click="">
    <div class="effect-screen" id="lockerObj">
      <img class="locker" id="lockerObjheader" src="../assets/img/icon/자물쇠%20아이콘.png" alt="자물쇠" @click="goResult"/>
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

    const goResult = () => {
      router.push('/result')
    }

    onMounted(() => {
      //Make the DIV element draggagle:
      document.getElementById('screen').click()
    })

    return {
      // 변수
      wrap,

      // 메서드
      play,
      goResult,
    }
  }
}
</script>

<style scoped>

</style>
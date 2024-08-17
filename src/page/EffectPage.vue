<template>
  <div id="wrap" style="width: 1000px; height: 1000px" @click="play">

  </div>
</template>

<script>
import {ref, onMounted} from "vue";

export default {
  name: "StartPage",
  components: {

  },
  setup() {
  const wrap = ref(null)

    const play = () => {
      // sound.currentSrc = 0
      const sound = new Audio(require('@/assets/audio/086_팝.mp3'))
      sound.play()
    }

    onMounted(() => {
      document.getElementById('wrap').click()
    })

    return {
      // 변수
      wrap,

      // 메서드
      play,
      stop
    }
  }
}
</script>

<style scoped>

</style>
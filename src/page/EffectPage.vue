<template>
  <div class="wrap" id="screen" @click="goResult">
    <div class="effect-screen" id="lockerObj">
      <video src="@/assets/video/메이%20귀여운%20하품소리.mp4" id="effectVideo" autoplay @ended="goResult"></video>
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

    const effectVideo = ref(null)

    const play = () => {
      // sound.currentSrc = 0
      const sound = new Audio(require('@/assets/audio/086_팝.mp3'))
      sound.play()
    }

    const goResult = () => {
      router.push('/result')
    }

    return {
      // 변수
      wrap,
      effectVideo,

      // 메서드
      play,
      goResult,
    }
  }
}
</script>

<style scoped>

</style>
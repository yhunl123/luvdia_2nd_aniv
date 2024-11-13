<template>
  <div class="wrap" id="screen" @click="goResult">
    <div class="effect-screen" id="lockerObj">
      <video ref="effectVideo" autoplay @ended="goResult" @play="common.setVolume"></video>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import {router} from "@/router";
import {item_r, item_sr, item_ssr} from "@/object/gachaItem";
import common from "@/js/common";

export default {
  name: "EffectPage",
  computed: {
    common() {
      return common
    }
  },
  components: {

  },
  setup() {
    const wrap = ref(null)

    const itemList = ref([])
    const highGrade = ref('R')
    const results = JSON.parse(localStorage.getItem('result'))

    const effectVideo = ref(null)

    const goResult = () => {
      router.push('/result')
    }

    const getItemList = () => {
      console.log(results)
      if (results == null) {
        router.push('/draw')
        return
      }

      results.forEach((result) => {
        if (result.grade === 'R') {
          itemList.value.push(item_r.find((item) => item.id === result.id))
        } else if (result.grade === 'SR') {
          itemList.value.push(item_sr.find((item) => item.id === result.id))
        } else {
          itemList.value.push(item_ssr.find((item) => item.id === result.id))
        }

        if (result.isNew) {
          itemList.value[itemList.value.length-1].isNew = true
        }
      })

      itemList.value.map((itemOne) => {
        itemOne.unlocked = true
      })
    }

    const getHighGrade = () => {
      debugger
      itemList.value.forEach((itemOne) => {
        if (itemOne.grade === 'SSR') {
          highGrade.value = 'SSR'
        } else if (itemOne.grade === 'SR') {
          if (highGrade.value !== 'SSR') {
            highGrade.value = 'SR'
          }
        }
      })
    }

    const setVideoUrl = () => {
      if(highGrade.value === 'SSR') {
        effectVideo.value.src = require('@/assets/video/ssr.mp4')
      } else if (highGrade.value === 'SR') {
        effectVideo.value.src = require('@/assets/video/sr.mp4')
      } else {
        effectVideo.value.src = require('@/assets/video/r.mp4')
      }
    }

    getItemList()
    getHighGrade()

    onMounted(() => {
      setVideoUrl()
    })

    return {
      // 변수
      wrap,
      effectVideo,

      // 메서드
      goResult,
    }
  }
}
</script>

<style scoped>

</style>
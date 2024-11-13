<template>
  <audio :src="require('@/assets/audio/Gacha_impact_1.mp3')" autoplay @play="common.setVolume"></audio>
  <audio ref="bgMusic" :src="require('@/assets/audio/draw_bk_music.mp3')" :muted="muted || modalMuted" @play="common.setVolume" loop autoplay></audio>

  <div class="audio-control-wrap">
    <img src="../assets/img/icon/free-icon-speaker-189650.png" alt="음소거버튼" v-if="!muted && !modalMuted" @click="toggleMute(true)">
    <img src="../assets/img/icon/free-icon-mute-189653.png" alt="음소거해제버튼" v-if="muted || modalMuted" @click="toggleMute(false)">
  </div>

  <div class="wrap bg-img" :class="{'bk-img-r': highGrade==='R', 'bk-img-sr': highGrade==='SR', 'bk-img-ssr': highGrade==='SSR'}">
    <div class="result-div">
      <div
          class="draw-list"
          :class="{'border-r': highGrade==='R', 'border-sr': highGrade==='SR', 'border-ssr': highGrade==='SSR'}"
          v-if="gCount == 10"
      >
        <GalleryItem v-for="(item, i) in itemList" :item="item" :key="i" :view-one="false"></GalleryItem>
      </div>

      <div class="draw-one" v-if="gCount == 1" v-for="item in itemList" :key="item.id">
        <GalleryItem v-for="(item, i) in itemList" :item="item" :key="i" :view-one="true"></GalleryItem>
      </div>

      <div class="mileage-wrap">
        <img src="@/assets/img/icon/마일리지2.png" alt="마일리지">
        <span class="draw-text">+ {{gCount}}</span>
      </div>

      <div class="nav-div">
        <button class="back-btn" @click="router.push('/draw')"></button>

        <button class="redraw-btn" @click="reDraw">
          <span class="redraw-logo">
            <img src="@/assets/logo.png" alt="로고" style="width: 45px">
            <span class="draw-text">x {{300*gCount}}</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";
import common from "@/js/common";
import {computed, onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";
import store from "@/store";
import {item_r, item_sr, item_ssr} from "@/object/gachaItem";
import GalleryItem from "@/components/GalleryItem.vue";
import Modal from "@/App.vue";

export default {
  name: "DrawResultPage",
  components: {
    Modal,
    GalleryItem

  },
  setup() {
    const muted = computed(() => {
      return store.state.muted;
    })
    const modalMuted = computed(() => {
      return store.state.modalMuted;
    })

    let isLoading = false
    let pullCount = ref(localStorage.getItem('tCount') === undefined || localStorage.getItem('tCount') === null ? 0 : localStorage.getItem('tCount'))
    const highGrade = ref('R')
    const bgMusic = ref(null)
    const results = JSON.parse(localStorage.getItem('result'))
    const gCount = localStorage.getItem('gCount')
    console.log(results)
    localStorage.removeItem('result')

    const itemList = ref([])

    if (results == null) {
      router.push('/draw')
      return;
    }

    const getItemList = () => {
      results.forEach((result, index) => {
        if (result.grade === 'R') {
          itemList.value.push(JSON.parse(JSON.stringify(item_r.find((item) => item.id === result.id))))
        } else if (result.grade === 'SR') {
          itemList.value.push(JSON.parse(JSON.stringify(item_sr.find((item) => item.id === result.id))))
        } else {
          itemList.value.push(JSON.parse(JSON.stringify(item_ssr.find((item) => item.id === result.id))))
        }

        itemList.value[index].isNew = result.isNew
      })

      itemList.value.map((itemOne) => {
        itemOne.unlocked = true
      })
    }

    const reDraw = () => {
      if(isLoading) {
        return;
      }

      isLoading = true

      localStorage.setItem('gCount', gCount)
      localStorage.setItem('tCount', Number(pullCount.value) + Number(gCount))

      let mPoint = Number(store.state.mPoint) + Number(gCount)
      localStorage.setItem('mPoint', mPoint)
      store.commit('setMPoint', mPoint)

      const result = common.draw(gCount)

      localStorage.setItem('result', JSON.stringify(result))

      result.forEach((item, index) => {
        common.checkNewItem(item)
        common.unlockItem(item)
      })

      localStorage.setItem('result', JSON.stringify(result))

      router.push('effect')

      isLoading = false
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

    const toggleMute = (flag) => {
      store.commit('setMuted', flag)
    }

    getItemList()
    getHighGrade()

    onMounted(() => {
      bgMusic.value.currentTime = store.state.currentPlayTime;

      store.commit('setCurrentPlayTime', 0)
    })

    onBeforeUnmount(() => {
      store.commit('setCurrentPlayTime', bgMusic.value.currentTime)
    })

    return {
      // 변수
      router,
      itemList,
      gCount,
      highGrade,
      muted,
      modalMuted,
      bgMusic,

      // 함수
      reDraw,
      toggleMute,
      common,

    }
  }
}

</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 100vh;
  position: absolute;
}

.bk-img-r {
  background: url(../assets/img/background/drawResultBkImg.png) no-repeat center;
  background-size: cover;
}
.bk-img-sr {
  background: url(../assets/img/background/drawSResultBkImg.png) no-repeat center;
  background-size: cover;
}
.bk-img-ssr {
  background: url(../assets/img/background/drawSSResultBkImg.png) no-repeat center;
  background-size: cover;
}

.border-r {
  border: 2.5px solid rgba(0,0,0, 0.7);
}
.border-sr {
  border: 2.5px solid rgba(179,147,201, 0.9);
}
.border-ssr {
  border: 2.5px solid rgba(246,221,140, 0.9);
}

.redraw-btn {
  background-image: url("@/assets/img/button/다시뽑기.png");
}

.back-btn {
  background-image: url("@/assets/img/button/돌아가기.png");
}

</style>
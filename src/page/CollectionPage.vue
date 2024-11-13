<template>
  <div class="wrap bg-img">
    <audio id="bgMusic" :src="require('@/assets/audio/collection_bk_music.mp3')" @play="common.setVolume" autoplay :muted="muted || modalMuted" @ended="loop"></audio>
    <div class="item-box">
      <div class="tab-title"><span class="tab-text">도</span>감</div>
      <div class="tab-notice"><span class="tab-notice-text">! LP 100개를 사용해 잠겨있는 편지 하나를 해금할 수 있습니다.</span></div>
      <div class="item-list">
        <span class="item-sep">R</span><hr>
        <div class="r-grade">
          <GalleryItem v-for="item in item_r" :item="item" :key="item.id" :view-one="false" :hidden-new="true"></GalleryItem>
        </div><br>

        <span class="item-sep">SR</span><hr>
        <div class="sr-grade">
          <GalleryItem v-for="item in item_sr" :item="item" :key="item.id" :view-one="false" :hidden-new="true"></GalleryItem>
        </div><br>

        <span class="item-sep">SSR</span><hr>
        <div class="ssr-grade">
          <GalleryItem v-for="item in item_ssr" :item="item" :key="item.id" :view-one="false" :hidden-new="true"></GalleryItem>
        </div><br>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";
import {item_r, item_sr, item_ssr} from "@/object/gachaItem";
import {computed, ref} from "vue";
import store from "@/store";
import common from "@/js/common";

export default {
  name: 'collection',
  computed: {
  },
  components: {
    GalleryItem

  },
  setup() {
    const muted = computed(() => {
      return store.state.muted;
    })
    const modalMuted = computed(() => {
      return store.state.modalMuted;
    })

    const myItem = ref(localStorage.getItem('myItem') === null || localStorage.getItem('myItem') === undefined ? [] : JSON.parse(localStorage.getItem('myItem')))

    if(myItem.value != []) {
      item_r.map((item_r_one) => {
        const unlockedItem = myItem.value.find((myItemOne) => {
          return myItemOne.id == item_r_one.id && myItemOne.grade == item_r_one.grade
        })
        if (unlockedItem !== undefined) {
          item_r_one.unlocked = true
        }
      })

      item_sr.map((item_sr_one) => {
        const unlockedItem = myItem.value.find((myItemOne) => {
          return myItemOne.id == item_sr_one.id && myItemOne.grade == item_sr_one.grade
        })
        if (unlockedItem !== undefined) {
          item_sr_one.unlocked = true
        }
      })

      item_ssr.map((item_ssr_one) => {
        const unlockedItem = myItem.value.find((myItemOne) => {
          return myItemOne.id == item_ssr_one.id && myItemOne.grade == item_ssr_one.grade
        })
        if (unlockedItem !== undefined) {
          item_ssr_one.unlocked = true
        }
      })
    }

    const loop = (e) => {
      e.target.play()
      e.target.currentTime = 40.7
    }

    return {
      // 함수
      loop,
      common,

      // 변수
      item_r,
      item_sr,
      item_ssr,
      muted,
      modalMuted,
    }
  }
}
</script>

<style scoped>

.bg-img {
  width: 100%;
  height: 100vh;
  background: url(../assets/img/background/collectionBkImg.png) no-repeat center;
  background-size: cover;
  position: absolute;
}
</style>
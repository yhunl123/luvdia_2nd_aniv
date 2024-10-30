<template>
  <div class="wrap bg-img">
    <div class="item-box">
      <div class="tab-title"><span class="tab-text">도</span>감</div>
      <div class="item-list">
        <span class="item-sep">R</span><hr>
        <div class="r-grade">
          <GalleryItem v-for="item in item_r" :item="item" :key="item.id" :view-one="false"></GalleryItem>
        </div><br>

        <span class="item-sep">SR</span><hr>
        <div class="sr-grade">
          <GalleryItem v-for="item in item_sr" :item="item" :key="item.id" :view-one="false"></GalleryItem>
        </div><br>

        <span class="item-sep">SSR</span><hr>
        <div class="ssr-grade">
          <GalleryItem v-for="item in item_ssr" :item="item" :key="item.id" :view-one="false"></GalleryItem>
        </div><br>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";
import {item_r, item_sr, item_ssr} from "@/object/gachaItem";
import {ref} from "vue";

export default {
  name: 'collection',
  components: {
    GalleryItem

  },
  setup() {
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

    return {
      // 함수


      // 변수
      item_r,
      item_sr,
      item_ssr,
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
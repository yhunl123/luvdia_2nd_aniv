<template>
  <div class="content">

    <div class="container">
      <img :src="require('../assets/img/icon/notHaveItem.png')" class="item-image" v-if="!item.unlocked">

      <div class="middle" :class="{'middle-view': item.unlocked}">
        <div class="item-text">
          <button class="item-image grade-r" id="gradeImg" v-if="item.grade === 'R'"></button>
          <button class="item-image grade-sr" id="gradeImg" v-if="item.grade === 'SR'"></button>
          <button class="item-image grade-ssr" id="gradeImg" v-if="item.grade === 'SSR'"></button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "GalleryItem",
  props: {
    item: Object,
  },
  setup(props) {
    const gradeImg = ref(null)

    return {
      // 변수
      gradeImg,

      // 함수

    }
  }
}
</script>

<style scoped>
.grade-r {
  background-image: url("@/assets/img/icon/gradeRCloseIco.png");
}

.grade-sr {
  background-image: url("@/assets/img/icon/gradeSRCloseIco.png");
}

.grade-ssr {
  background-image: url("@/assets/img/icon/gradeSSRCloseIco.png");
}

.grade-r:hover {
  background-image: url("@/assets/img/icon/gradeROpenIco.png");
}

.grade-sr:hover {
  background-image: url("@/assets/img/icon/gradeSROpenIco.png");
}

.grade-ssr:hover {
  background-image: url("@/assets/img/icon/gradeSSROpenIco.png");
}
</style>
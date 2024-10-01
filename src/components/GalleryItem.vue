<template>
  <div class="content">

    <div class="container">
      <img :src="require('../assets/img/icon/물음표.png')" class="image">

      <div class="middle">
        <div class="text" v-if="$props.item.type === 'img'">
          <img :src="require('../assets/img/icon/편지모양.png')" class="image">
        </div>

        <div class="voice" v-if="$props.item.type === 'voice'">

        </div>

        <div class="video" v-if="$props.item.type === 'video'">

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
    item: Object
  },
  setup() {
    const unlocked = ref(false);

    return {
      // 변수


      // 함수
      unlocked

    }
  }
}
</script>

<style scoped>
.content {
  margin: 30px;
  width: 150px;
  height: 150px;
}
.container {
  position: relative;
}

.image {
  opacity: 1;
  display: block;
  width: 150px;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  transform: scale(1.05);
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
<template>
  <div class="wrap">
    <div class="sort-wrap">

    </div>
    <div class="contents">
      <div class="r-grade">
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
      </div>
      <div class="sr-grade">
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
      </div>
      <div class="ssr-grade">
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
        <GalleryText></GalleryText>
      </div>

    </div>
  </div>
</template>

<script>

import GalleryText from "@/components/GalleryText.vue";

export default {
  name: 'StoragePage',
  components: {
    GalleryText

  },
  setup() {


    return {
      // 함수


      // 변수
    }
  }
}
</script>

<style scoped>
.wrap {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 0;
}

.sort-wrap {

}

.contents {
  border: 5px #444 solid;
  border-radius: 15px;
  margin: 180px 16.5% 145px;
  display: flex;
  background-color: #bbb;
  flex-direction: column;
  overflow: auto;
  scroll-behavior: smooth;
  min-height: 67vh;
  height: 0;
}

.contents::-webkit-scrollbar {
  display: none;
}

.contents div {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.r-grade {

}

.sr-grade {

}

.ssr-grade {

}

</style>
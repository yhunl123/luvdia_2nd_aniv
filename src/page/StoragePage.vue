<template>
  <div class="wrap">
    <div class="sort-wrap">

    </div>
    <div class="contents">
      <div class="r-grade">
        <GalleryItem v-for="item in item_r" :item="item" :key="item.id"></GalleryItem>
      </div>
      <div class="sr-grade">
        <GalleryItem v-for="item in item_sr" :item="item" :key="item.id"></GalleryItem>
      </div>
      <div class="ssr-grade">
        <GalleryItem v-for="item in item_ssr" :item="item" :key="item.id"></GalleryItem>
      </div>

    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";
import {item_r, item_sr, item_ssr} from "@/object/gachaItem";

export default {
  name: 'StoragePage',
  methods: {
    item_r() {
      return item_r
    }
  },
  components: {
    GalleryItem

  },
  setup() {


    return {
      // 함수


      // 변수
      item_r,
      item_sr,
      item_ssr
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
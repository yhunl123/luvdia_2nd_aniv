<template>
  <div class="wrap">
    음음
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: 'StoragePage',
  components: {

  },
  setup() {

    const initLayout = () => {
      store.commit('setIsHeader', 'Y')
      store.commit('setIsFooter', 'Y')
    }


    initLayout();

    return {
      // 함수


      // 변수
    }
  }
}
</script>

<style scoped>

</style>
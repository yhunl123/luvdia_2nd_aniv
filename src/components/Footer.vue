<template>
  <div class="footer" :class="{hidden: !hasFooter}">
    <div class="nav-bar">
      <router-link :class="{active: page===1}" to="/storage">도감</router-link>
      <router-link :class="{active: page===2}" to="/">메인</router-link>
      <router-link :class="{active: page===3}" to="/draw">뽑기</router-link>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'Footer',
  components: {},
  props: {
    page: Number,
    hasFooter: Boolean
  },
  setup() {
    const hasFooter = ref(true)

    const hasFooterList = [
      '/',
      '/storage',
      '/draw',
    ]

    hasFooter.value = hasFooterList.includes(useRoute().fullPath);

    return {
      //변수
      router,
      hasFooter

      //함수

    }
  }
}
</script>
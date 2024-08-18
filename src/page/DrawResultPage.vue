<template>
  <div class="wrap">
    <div class="contents">
      결과페이지입니다~
    </div>
    <div class="nav-div">
      <button @click="router.push('/draw')">돌아가기</button>
      <button @click="reDraw">재뽑기</button>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";

export default {
  name: "DrawResultPage",
  components: {

  },
  setup() {

    const reDraw = () => {
      console.log('미구현')
    }

    return {
      // 변수
      router,

      // 함수
      reDraw,

    }
  }
}

</script>

<style scoped>
.wrap {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
}
.contents {
  position: relative;
  top: 40%
}
.nav-div {
  position: relative;
  top: 75%
}
.nav-div button{
  padding: 15px;
  margin-left: 10px;
  margin-right: 10px;
  width: 100px;
}
</style>
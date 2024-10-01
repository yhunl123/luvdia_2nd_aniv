<template>
  <div class="wrap">
    <div class="contents">
      <table>
        <h2>뽑기 결과</h2>
        <tr>
          <th>등급</th>
          <th>이름</th>
          <th>내용</th>
        </tr>
        <tr v-for="item in itemList" :key="item">
          <td>{{item.grade}}</td>
          <td>{{item.name}}</td>
          <td>{{item.data}}</td>
        </tr>
      </table>
    </div>
    <div class="nav-div">
      <button @click="router.push('/draw')">돌아가기</button>
      <button @click="reDraw">재뽑기</button>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";
import common from "@/js/common";
import {ref} from "vue";
import store from "@/store";
import {item_r, item_sr, item_ssr} from "@/object/gachaItem";

export default {
  name: "DrawResultPage",
  components: {

  },
  setup() {
    let isLoading = false
    let pullCount = ref(localStorage.getItem('tCount') === undefined || localStorage.getItem('tCount') === null ? 0 : localStorage.getItem('tCount'))
    const results = JSON.parse(localStorage.getItem('result'))
    const gCount = localStorage.getItem('gCount')
    localStorage.removeItem('result')

    const itemList = ref([])

    if (results == null) {
      router.push('/draw')
      return;
    }

    const getItemList = () => {
      results.forEach((result) => {
        if (result.grade === 'R') {
          itemList.value.push(item_r.filter((item) => item.id === result.id)[0])
        } else if (result.grade === 'SR') {
          itemList.value.push(item_sr.filter((item) => item.id === result.id)[0])
        } else {
          itemList.value.push(item_ssr.filter((item) => item.id === result.id)[0])
        }
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
        common.unlockItem(item)
      })

      router.push('effect')

      isLoading = false
    }

    getItemList()

    return {
      // 변수
      router,
      itemList,

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
.contents{
  margin-top: 100px;
}
.nav-div{
  margin-top: 60px;
}
.nav-div button{
  padding: 15px;
  margin-left: 10px;
  margin-right: 10px;
  width: 100px;
}
table {
  display: flex;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  flex-direction: column;
}
th, td {
  text-align: left;
  padding: 16px;
}
</style>
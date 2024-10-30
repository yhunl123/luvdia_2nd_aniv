<template>
  <div :class="{'content': !viewOne}">

    <div :class="{'container': !viewOne}">
      <img :src="require('../assets/img/icon/notHaveItem.png')" class="item-image" v-if="!item.unlocked">

      <div :class="{'middle': !viewOne, 'middle-one': viewOne, 'middle-view': item.unlocked}" v-if="item.unlocked">
        <button
            class="item grade-r"
            :class="{'item-image': !viewOne, 'item-image-one': viewOne}"
            id="gradeImg"
            v-if="item.grade === 'R'"
            @click="openModal(item.name, item.data)"
        >
          <img class="new-item" src="../assets/img/icon/느낌표.png" alt="새 아이템" v-if="item.isNew">
          <span class="item-number" style="color: #03f0fe; -webkit-text-stroke: 1px gray;">{{item.id}}</span>
        </button>

        <button
            class="grade-sr"
            :class="{'item-image': !viewOne, 'item-image-one': viewOne}"
            id="gradeImg"
            v-if="item.grade === 'SR'"
            @click="openModal(item.name, item.data)"
        >
          <img class="new-item" src="../assets/img/icon/느낌표.png" alt="새 아이템" v-if="item.isNew">
          <span class="item-number" style="color: #fe0388; -webkit-text-stroke: 1px gray;">{{item.id}}</span>
        </button>

        <button
            class="grade-ssr"
            :class="{'item-image':! viewOne, 'item-image-one': viewOne}"
            id="gradeImg"
            v-if="item.grade === 'SSR'"
            @click="openModal(item.name, item.data)"
        >
          <img class="new-item" src="../assets/img/icon/느낌표.png" alt="새 아이템" v-if="item.isNew">
          <span class="item-number" style="color: #fedf03; -webkit-text-stroke: 1px gray;">{{item.id}}</span>
        </button>
      </div>

    </div>

  </div>
</template>

<script>
import {ref} from "vue";
import store from "@/store";

export default {
  name: "GalleryItem",
  props: {
    item: Object,
    viewOne: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const gradeImg = ref(null)

    const openModal = (title, message) => {
      store.commit('setModalTitle', title)
      store.commit('setModalMessage', message)
      store.commit('setModalIsOpen', true)
    }

    return {
      // 변수
      gradeImg,

      // 함수
      openModal,

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
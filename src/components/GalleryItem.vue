<template>
  <div :class="{'content': !viewOne}">

    <div :class="{'container': !viewOne}">
      <img :src="require('../assets/img/icon/notHaveItem.png')" class="item-image" v-if="!item.unlocked">

      <div :class="{'middle': !viewOne, 'middle-one': viewOne, 'middle-view': item.unlocked}" v-if="item.unlocked">
        <button
            class="grade-r"
            :class="{'item-image': !viewOne, 'item-image-one': viewOne}"
            id="gradeImg"
            v-if="item.grade === 'R'"
            @click="checkType(item)"
        >
          <img class="new-item" src="../assets/img/icon/느낌표.png" alt="새 아이템" v-if="item.isNew">
          <span class="item-number" style="color: #03f0fe; -webkit-text-stroke: 1px gray;">{{item.id}}</span>
        </button>

        <button
            class="grade-sr"
            :class="{'item-image': !viewOne, 'item-image-one': viewOne}"
            id="gradeImg"
            v-if="item.grade === 'SR'"
            @click="checkType(item)"
        >
          <img class="new-item" src="../assets/img/icon/느낌표.png" alt="새 아이템" v-if="item.isNew">
          <span class="item-number" style="color: #fe0388; -webkit-text-stroke: 1px gray;">{{item.id}}</span>
        </button>

        <button
            class="grade-ssr"
            :class="{'item-image':! viewOne, 'item-image-one': viewOne}"
            id="gradeImg"
            v-if="item.grade === 'SSR'"
            @click="checkType(item)"
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
import common from '@/js/common'

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

    const checkType = (item) => {
      if(item.type === 'text') {
        common.openModal(item.name, item.data)
      } else if (item.type === 'voice') {
        common.openModal(item.name, item.data)
      } else if (item.type === 'video') {
        common.openModal(item.name, '<iframe src="' + item.url + '" width="1024" height="576" allow="autoplay"></iframe>')
      }

    }

    return {
      // 변수
      gradeImg,
      common,

      // 함수
      checkType,

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
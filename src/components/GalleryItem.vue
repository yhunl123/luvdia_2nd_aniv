<template>
  <div :class="{'content': !viewOne}">

    <div :class="{'container': !viewOne}">
      <img :src="require('../assets/img/icon/notHaveItem.png')" class="item-image" v-if="!item.unlocked" @click="openModal">

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


  <div id="modal-background" v-if="confirmModalIsOpen || errorModalIsOpen"></div>
  <div id="alert" class="confirm-modal" v-if="confirmModalIsOpen">
    <div class="modal-body">
      LP 100을 사용해<br>
      이 편지를 잠금 해제하시겠습니까?
    </div>

    <div class="modal-footer">
      <button class="confirm-btn" id="confirm" @click="closeModal">취소</button>
      <button class="confirm-btn" id="confirm" @click="getItem">확인</button>
    </div>
  </div>

  <div id="alert" class="confirm-modal" v-if="errorModalIsOpen">
    <div class="modal-body">
      <br>
      LP가 부족합니다.
    </div>

    <div class="modal-footer">
      <button class="confirm-btn" id="confirm" @click="closeErrorModal">확인</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import common from '@/js/common'
import store from "@/store";
import {useRoute} from "vue-router";

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
    const route = useRoute()

    const gradeImg = ref(null)
    const confirmModalIsOpen = ref(false)
    const errorModalIsOpen = ref(false)

    const checkType = (item) => {
      if(item.type === 'text') {
        common.openModal(item.name, item.data)
      } else if (item.type === 'voice') {
        common.openModal(item.name, item.data)
      } else if (item.type === 'video') {
        common.openModal(item.name, '<iframe src="' + item.url + '" width="1024" height="576" allow="autoplay"></iframe>')
        store.commit('setModalMuted', true)

        if(route.name === 'result') {
          store.commit('setModalHeader', false)
        }
      }

    }

    const openModal = () => {
      confirmModalIsOpen.value = true;
    }

    const closeModal = () => {
      confirmModalIsOpen.value = false;
    }

    const openErrorModal = () => {
      errorModalIsOpen.value = true;
    }

    const closeErrorModal = () => {
      errorModalIsOpen.value = false;
    }

    const getItem = () => {
      if (store.state.mPoint < 100) {
        closeModal()
        openErrorModal()
      } else {
        const mPoint = store.state.mPoint

        common.unlockItem(props.item)
        store.commit("setMPoint", mPoint - 100)
        localStorage.setItem('mPoint', String(mPoint - 100))
        props.item.unlocked = true
        closeModal()
      }
    }

    return {
      // 변수
      gradeImg,
      confirmModalIsOpen,
      errorModalIsOpen,

      // 함수
      checkType,
      openModal,
      closeModal,
      closeErrorModal,
      getItem,
      common,

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
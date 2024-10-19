<template>
  <div class="wrap bg-img">
    <div class="contents">

    </div>
  </div>

  <Modal @popupConfirm="popClose"></Modal>
</template>

<script>
  import store from "@/store";
  import {ref} from "vue";
  import Modal from "@/components/Modal.vue";

  export default {
    name: "MainPage",
    components: {
      Modal

    },
    setup() {
      const pass1 = ref(0)
      const pass2 = ref(0)
      const pass3 = ref(0)
      const pass4 = ref(0)

      const passProc = () => {
        if(pass1.value===1 && pass2.value===1 && pass3.value===1 && pass4.value===3) {
          store.commit('setModalTitle', '잠금 해제')
          store.commit('setModalMessage', '이제 모든 도감을 확인할 수 있습니다.')
          store.commit('setIsConfirmModal', false)
          store.commit('setModalIsOpen', true)

          localStorage.setItem('AllUnlock', 1);
        } else {
          pass1.value = 0
          pass2.value = 0
          pass3.value = 0
          pass4.value = 0
        }
      }
      const popClose = () => {
        store.commit('setModalIsOpen', false)
      }

      return {
        // 변수
        pass1,
        pass2,
        pass3,
        pass4,

        // 메서드
        passProc,
        popClose,

      }
    }
  }
</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 100vh;
  background: url(../assets/img/background/mainBkImg.png) no-repeat center;
  background-size: cover;
  position: absolute;
}
</style>

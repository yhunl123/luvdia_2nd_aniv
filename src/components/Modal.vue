<template>
  <div id="modal-background" v-if="modalIsOpen"></div>

  <div id="alert" class="modal" v-if="modalIsOpen">
    <div class="modal-header">
      {{ modalTitle }}
    </div>

    <div class="modal-body" v-html="modalMessage">

    </div>

    <div class="modal-footer">
      <button class="confirm-btn" id="confirm" @click="close">확인</button>
    </div>
  </div>
</template>

<script>

import {computed, ref} from "vue";
import store from "@/store";

export default {
  name: "Modal",
  props: {
    color: {
      type: String,
      default: 'sr'
    }
  },
  emits: ['popClose'],
  setup() {

    const modalTitle = computed(() => {
      return store.state.modalTitle;
    })

    const modalMessage = computed(() => {
      return store.state.modalMessage;
    })

    const modalIsOpen = computed(() => {
      return store.state.modalIsOpen;
    })

    const isConfirmModal = computed(() => {
      return store.state.isConfirmModal;
    })

    const close = () => {
      store.commit('setModalMuted', false)
      store.commit('setModalIsOpen', false);
    }

    return {
      // 변수

      // 함수
      modalTitle,
      modalMessage,
      modalIsOpen,
      isConfirmModal,
      close,

    }
  }
}
</script>
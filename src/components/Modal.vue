<template>
  <div id="modal-background" v-if="modalIsOpen"></div>

  <div id="alert" class="modal" v-if="modalIsOpen">
    <div class="modal-header" v-if="modalHeader">
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
    grade: {
      type: String,
      default: ''
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

    const modalHeader = computed(() => {
      return store.state.modalHeader;
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
      store.commit('setModalHeader', true);
    }

    return {
      // 변수
      modalTitle,
      modalMessage,
      modalIsOpen,
      modalHeader,
      isConfirmModal,

      // 함수
      close,

    }
  }
}
</script>
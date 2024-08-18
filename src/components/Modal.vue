<template>
  <div id="modal-background" v-if="modalIsOpen"></div>

  <div id="alert" class="modal" v-if="modalIsOpen">
    <div class="modal-header">
      {{ modalTitle }}
    </div>
    <div class="modal-body">
      {{ modalMessage }}
    </div>
    <div class="modal-footer">
      <button class="close-btn" id="closeModal" @click="close" v-if="isConfirmModal">취소</button>
      <button class="confirm-btn" id="confirm" @click="$emit('popupConfirm')">확인</button>
    </div>
  </div>
</template>

<script>

import {computed, ref} from "vue";
import store from "@/store";

export default {
  name: "Modal",
  props: {
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

<style scoped>
.modal {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  z-index: 10;
  text-align: center;
  animation: fadeIn 0.2s ease-out;
}

.modal-header {
  padding: 15px;
  font-size: 1.5em;
  font-weight: bold;
  background-color: #fe0388;
  color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.modal-body {
  padding: 20px;
  font-size: 1.2em;
}

.modal-footer {
  padding: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.modal-footer button {
  padding: 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-btn {
  background-color: #f0f0f0;
  color: black;
  border-color: #444;
  font-weight: bold;
}

.close-btn:hover {
  background-color: #e0e0e0;
}

.confirm-btn {
  background-color: deepskyblue;
  color: #f0f0f0;
  border: none;
  font-weight: bold;
}

.confirm-btn:hover {
  background-color: dodgerblue;
}

#modal-background {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  animation: fadeInBackground 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInBackground {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
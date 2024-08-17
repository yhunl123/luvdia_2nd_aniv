<template>
  <div id="modal-background"></div>

  <div id="myModal" class="modal">
    <div class="modal-header">
      Victory Awaits!
    </div>
    <div class="modal-body">
      Welcome to the world of NIKKE. Ready for battle?
    </div>
    <div class="modal-footer">
      <button id="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    msg: String,

  },
  setup() {

    const open

    return {
      // 변수


      // 함수
    }
  }
}
</script>

<style scoped>
.modal {
  display: none;
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
  animation: fadeIn 0.5s ease-out;
}

.modal-header {
  padding: 15px;
  font-size: 1.5em;
  font-weight: bold;
  background-color: #FF7F50;
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
  background-color: #FF7F50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.modal-footer button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #282828;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-footer button:hover {
  background-color: #444;
}

#modal-background {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  animation: fadeInBackground 0.5s ease-out;
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
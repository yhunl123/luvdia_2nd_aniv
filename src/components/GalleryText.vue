<template>
  <div class="content">

    <div class="container">
      <img :src="require('../assets/img/퍼펙트_털찌.png')" alt="Avatar" class="image">
      <div class="middle">
        <div class="text">John Doe</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "GalleryText",
  setup() {

    return {
      // 변수


      // 함수


    }
  }
}
</script>

<style scoped>
.content {
  margin: 30px;
  width: 150px;
  height: 150px;
}
.container {
  position: relative;
}

.image {
  opacity: 1;
  display: block;
  width: 150px;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  transform: scale(1.05);
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
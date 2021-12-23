<template>
  <div class="bg-home">
    <div class="overlay-home">
      <div class="content">
        <h1 class="title">WELCOME</h1>
        <p class="description">We are ...</p>
        <span class="see-more">
          See our project <b-icon icon="arrow-right"></b-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.title {
  color: white;
  font-size: 80px;
  font-family: Montserrat_SemiBold;
}
.description {
  color: white;
  font-size: 30px;
  font-family: Montserrat_SemiBold;
}
.see-more {
  color: white;
  font-size: 24px;
  font-family: Montserrat_Light;
  background-color: #010314;
  position: relative;
  z-index: 1;
  left: 40px;
  top: 30px;
}

.content {
  margin-left: 15%;
  padding-top: 15%;
}
</style>
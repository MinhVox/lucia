<template>
  <div class="bg-home">
    <div class="overlay-home">
      <div class="content">
        <h1 class="title">{{title}}</h1>
        <p class="description">We are ...</p>
        <div class="container-seemore">
          <span class="see-more">
            See our project <b-icon icon="arrow-right"></b-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    title : String
  },
  name: "Background",
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
  transition: 0.5s ease;
}

.container-seemore {
  height: 70px;
  width: 400px;
}

.content {
  margin-left: 10%;
  padding-top: 20%;
}
</style>
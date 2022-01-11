<template>
  <div>
    <div class="bg-home">
      <div class="overlay-home">
        <div class="content">
          <h1 class="title">WELCOME</h1>
          <p class="description">We are ...</p>
          <div class="container-seemore">
            <span class="see-more">
              See our project <b-icon icon="arrow-right"></b-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="list-project">
      <div class="content" style="padding: 70px 0 70px 0">
        <h1 class="title" style="color: #011021">WHAT WE DO...</h1>
        <p class="description" style="color: #000111">Lörem ipsum suhägt.</p>
      </div>

      <HomeProject v-for="(item, index) in 5" :key="index" :index="index + 1" />
      <div class="client-customer">
        <h1 class="client-title">Our Clients</h1>
        <div class="list-customer">
          <img v-for="(item, index) in 10" :key="index" src="../../assets/img/client-customer/logo-1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProject from "../../components/home-project/HomeProject.vue";
export default {
  name: "Home",
  components: {
    HomeProject: HomeProject,
  },
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
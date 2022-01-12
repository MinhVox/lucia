<template>
  <div>
    <Background :title="title"/>

    <div class="list-project">
      <HomeProject v-for="(item, index) in 4" :key="index" :index="index + 1" />

      <LogoGaming />

      <div class="client-customer">
        <h1 class="client-title">Our Clients</h1>
        <div class="list-customer">
          <img
            v-for="(item, index) in 10"
            :key="index"
            src="../../assets/img/client-customer/logo-1.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProject from "../../components/home-project/HomeProject.vue";
import LogoGaming from "../../components/logo-gaming/LogoGaming.vue";
import Background from "../../components/background/BackgroundTop.vue";
export default {
  name: "Home",
  components: {
    HomeProject: HomeProject,
    LogoGaming: LogoGaming,
    Background: Background,
  },

  data() {
    return {
      title: "OUR WORKS"
    }
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
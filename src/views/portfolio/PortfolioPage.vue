<template>
  <div>
    <div class="bg-portfolio">
      <div class="overlay-portfolio">
        <div class="content">
          <h1 class="title">{{ title }}</h1>
          <p class="description">{{$t("porfolio.teamDescription")}}</p>
        </div>
      </div>
    </div>

    <div class="list-project">
      <HomeProject v-for="(item, index) in 4" :key="index" :index="index + 1" />

      <LogoGaming />
    </div>
  </div>
</template>

<script>
import HomeProject from "../../components/home-project/HomeProject.vue";
import LogoGaming from "../../components/logo-gaming/LogoGaming.vue";
export default {
  name: "Home",
  components: {
    HomeProject: HomeProject,
    LogoGaming: LogoGaming,
  },

  data() {
    return {
      title: "OUR WORKS",
    };
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
  font-size: 20px;
  font-family: Montserrat;
}
.content {
  margin: 10vh 20vh;
  text-align: left;
  width: 30%;
}

@media (max-width: 1500px) {
  .title {
  color: white;
  font-size: 50px;
  font-family: Montserrat_SemiBold;
}
.description {
  color: white;
  font-size: 15px;
  font-family: Montserrat;
}
}
</style>
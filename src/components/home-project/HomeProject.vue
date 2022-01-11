<template>
  <div class="project">
    <div class="box-infor-project-left">
      <p class="index-project">{{ this.index }}</p>
      <p class="name-project">2D Projects</p>
      <div class="box-line">
        <hr class="line" />
        <span class="type-project">Graphic Design, Website, Social Media.</span>
      </div>
    </div>
    <div class="box-infor-project-right">
      <button class="button-see-more">
        See our project <b-icon icon="arrow-right"> </b-icon>
      </button>
      <div>
        <div class="project-block">
          <img
            class="project-img"
            src="../../assets/img/project/project-1.png"
          />
          <img
            class="project-bg"
            src="../../assets/img/background/bg-project.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProject",
  props: {
    index: Number,
    nameProject: String,
    type: String,
    projectImg: String,
  },
  data() {
      return {
      }
  },
};
</script>

<style>
</style>
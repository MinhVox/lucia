<template>
  <div>
    <div class="cover">
      <div class="bg-join-us">
      <div class="overlay-join-us">
        
      </div>
      <div class="content">
          <h1 class="title">{{$t("joinUs.title")}}</h1>
          <p class="description">{{$t("joinUs.description")}}</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cover{
    height: 140vh;
}
.title {
  color: black;
  font-size: 70px;
  font-family: Montserrat_SemiBold;
}
.description {
  color: black;
  font-size: 14px;
  font-family: Montserrat_Bold;
  white-space: pre-line;
  text-align: left;
  line-height: 0.9;
  margin-top: 10vh;
}
.content{
    transform: translate(0,-20vh);
}

@media (max-width: 1500px) {
    .cover{
    height: 180vh;
}
  .title {
  color: black;
  font-size: 40px;
  font-family: Montserrat_SemiBold;
}
.description {
  color: black;
  font-size: 13px;
  font-family: Montserrat_Bold;
  white-space: pre-line;
  text-align: left;
  line-height: 0.9;
  margin-top: 10vh;
}
}
</style>
<template>
  <div>
    <div class="bg-welcome">
      <div class="overlay-welcome">
        <div class="content">
          <h1 class="title">Welcome</h1>
          <p class="description">We are ...</p>
        </div>
      </div>
    </div>
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
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
.content {
  text-align: center;
}
.title {
  font-size: 80px;
  color: white;
  font-family: Montserrat_SemiBold;
}

.description {
  color: white;
  font-size: 30px;
  font-family: Montserrat_SemiBold;
}
</style>
<template>
  <div>
    <div class="cover">
      <div class="bg-about-us">
        <div class="overlay-about-us">
          <div class="content">
            <img
              class="logo-trinix"
              src="../../assets/img/logo/about-us-trinix-logo.png"
            />
            <hr class="hr-about-us" />
            <h1 class="team">TEAM</h1>
            <p class="team-description">{{ $t("aboutUs.teamDescription") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="members">
      <div class="member" v-for="(item, index) in 4" :key="index">
        <img class="avatar" src="../../assets/img/logo/avatar.png" />
        <p class="avt-name">NAME</p>
        <p class="avt-title">Title</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.cover {
  height: 120vh;
}
.hr-about-us {
  height: 4px !important;
  background-color: black;
  color: black;
  opacity: 1 !important;
}

.team {
  font-size: 80px;
  font-weight: 700;
}

.content {
  text-align: center;
  margin: 0 40vh;
}

.team-description {
  font-size: 13px;
  font-weight: bold;
}

.avatar {
  border-radius: 100%;
  width: 300px;
  height: 300px;
}

.avt-name {
  color: #ff8900;
  font-size: 40px;
  font-family: Montserrat_Bold;
}

.avt-title {
  color: black;
  font-size: 30px;
  font-family: Montserrat_Bold;
}

.member {
  width: 40%;
  text-align: center;
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
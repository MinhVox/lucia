<template>
  <header class="header-outer" id="header">
    <div class="header-inner responsive-wrapper">
      <nav class="header-navigation">
        <div class="header-logo">
          <img src="@/assets/img/logo/logo-trinix.svg" />
        </div>
        <a class="pages" href="#" @click="pushNavigator('Welcome')">{{
          $t("header.home")
        }}</a>
        <a class="pages" href="#" @click="pushNavigator('Portfolio')">{{
          $t("header.portfolio")
        }}</a>
        <a class="pages" href="#" @click="pushNavigator('AboutUs')">{{ $t("header.about") }}</a>
        <a class="pages" href="#">{{ $t("header.blog") }}</a>
        <a class="pages" href="#" @click="pushNavigator('JoinUs')">{{ $t("header.joinUs") }}</a>
        <!-- <select
          id="language-picker-select"
          class="language-select"
          v-model="key"
          @change="callSetLangActions(key)"
        >
          <option
            class="item"
            v-for="lang in optionLangs"
            :key="lang.value"
            :value="lang.value"
          >
            <img :src="lang.icon" />
            {{ lang.text }}
          </option>
        </select> -->
      </nav>
      <b-dropdown class="language-select" size="sm" variant="outline" right>
        <template #button-content>
          <img width="30px" height="20px" :src="langText.flag" />
          <span>{{ langText.text }}</span>
        </template>
        <b-dropdown-item
          v-for="lang in optionLangs"
          :key="lang.value"
          :value="lang.value"
          @click="callSetLangActions(lang.value)"
        >
          <img width="30px" height="20px" :src="lang.flag" />
          <span>{{ lang.text }}</span></b-dropdown-item
        >
      </b-dropdown>
      <button class="menu">Menu</button>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  computed: {
    langText() {
      return this.optionLangs.find((x) => x.value == this.key);
    },
  },
  data() {
    return {
      key: "en",
      optionLangs: [
        {
          text: "EN",
          value: "en",
          flag: require("@/assets/img/flag/en_flag.png"),
        },
        {
          text: "VIE",
          value: "vn",
          flag: require("@/assets/img/flag/vn_flag.png"),
        },
      ],
    };
  },
  methods: {
    callSetLangActions(key) {
      this.key = key;
      this.$store.dispatch("setLang", key);
    },

    pushNavigator(router) {
      this.$router.push({ name: router });
    },
  },
};
</script>
<style scoped>
span {
  font-size: 1rem;
  color: inherit;
  margin-left: 0.5rem;
  font-weight: 500;
}
</style>
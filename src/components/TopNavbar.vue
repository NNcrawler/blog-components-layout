<template lang="html">
  <div class="row gap-after-nav">
    <!-- {{isLogin}} -->
    <router-link :to="{ name: 'recent-post' }"><span>NNcrawler</span></router-link> |
    <span>Home</span> |
    <router-link v-if="!isLogin" :to="{ name: 'login', params: {} }"><span>Login</span>|</router-link>
    <router-link v-if="!isLogin" :to="{ name: 'register', params: {} }"><span>Register</span>|</router-link>
    <router-link v-if="isLogin" :to="{ name: 'post-article', params: {} }"><span>Post Article</span>|</router-link>
    <span><a v-if="isLogin" @click="logout" href="#">Logout</a></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    logout() {
      window.localStorage.removeItem('token');
      this.$store.commit('loginChecker');
    },
  },
  mounted() {
    this.$store.commit('loginChecker');
  },
};
</script>

<style lang="css">
.gap-after-nav{
  margin-bottom: 40px;
}
</style>

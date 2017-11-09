<template lang="html">
  <div class="row gap-after-nav text-center text-md-left align-middle">
    <img class="logo" src="https://blog.events.com/hs-fs/hubfs/Events-v2-blog/blog-logo.png?t=1509571639349&width=500&name=blog-logo.png" alt="">
    <!-- {{isLogin}} -->
    <router-link class="text-danger top-nav" :to="{ name: 'recent-post' }">|<i class="fa fa-home"></i><span>Home</span>|</router-link>
    <router-link class="text-danger top-nav" v-if="!isLogin" :to="{ name: 'login', params: {} }">|<i class="fa fa-sign-in"></i><span>Login</span>|</router-link>
    <router-link class="text-danger top-nav" v-if="!isLogin" :to="{ name: 'register', params: {} }">|<i class="fa fa-user-plus"></i><span>Register</span>|</router-link>
    <router-link class="text-danger top-nav" v-if="isLogin" :to="{ name: 'post-article', params: {} }">|<i class="fa fa-pied-piper"></i><span>Post Article</span>|</router-link>
    <span><a class="text-danger top-nav" v-if="isLogin" @click="logout" href="#">|<i class="fa fa-sign-out"></i>Logout|</a></span>
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
      this.$router.push({ name: 'recent-post' });
    },
  },
  mounted() {
    this.$store.commit('loginChecker');
  },
};
</script>

<style lang="css">
.logo{
  height: 40px;
}
.gap-after-nav{
  margin-bottom: 40px;
}
.top-nav{
  margin-left: 20px;
}
</style>

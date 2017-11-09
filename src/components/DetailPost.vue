<template lang="html">
  <div class="row">
    <div class="col-12 col-md-8">
      <!-- {{dateCreated}}
      {{posting}} -->
      <!-- {{userPostChecker}} -->
      <!-- {{userPost}} -->
      <h1>{{posting.title}}</h1>
      <button @click="deletePost" v-if="userPost == posting.user" class="btn btn-link" type="button" name="button">Delete This Post</button>
      <small>{{dateCreated}}</small>
      <button v-if="userPost == posting.user" class="btn btn-link" type="button" name="button"><router-link :to="{ name: 'edit-article', params: { posting } }">Edit This Post</router-link></button>
      <p>{{posting.content}}</p>

    </div>
    <div class="col-12 col-md-2 offset-md-1">
      <img src="http://maxcdn.inspirationfeed.com/wp-content/uploads/2010/08/elegantbanners1.gif" alt="">
    </div>
    <div class="col-12 col-md-2 offset-md-1">
      <img src="http://maxcdn.inspirationfeed.com/wp-content/uploads/2010/08/elegantbanners1.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
    };
  },
  computed: {
    userPost() {
      return this.$store.state.userId;
    },
    posting() {
      return this.$store.state.detailPost;
    },
    dateCreated() {
      const date = new Date(this.posting.createdAt);
      const day = date.getDay();
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
  methods: {
    deletePost() {
      const data = {
        token: window.localStorage.getItem('token'),
        // eslint-disable-next-line
        id: this.posting._id,
      };
      /* eslint-disable */
      this.$axios.delete('/post', { data })
        .then((value) => {
          const data = value.data;
          if (data.message == 'berhasil') {
            this.$router.push({ name: 'recent-post' });
          } else {
            throw data;
          }
        })
        .catch((err) => {
          console.log(err);
        })
      /* eslint-enable */
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // access to component instance via `vm`
      vm.$store.commit('changeDetailPost', vm.id);
      vm.$store.commit('userIdChecker');
      // vm.userPostChecker();
    });
  },
  mounted() {
    if (this.posting.user === window.localStorage.getItem('user_id')) {
      this.userPost = true;
    }
  },
};
</script>

<style lang="css">
</style>

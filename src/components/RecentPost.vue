<template lang="html">
  <div class="row">
    <h1 class="col-2">Recent Post</h1>
    <div class="row" v-for="post in recentPost" >

      <PostSummary class="col-5" :id="post._id" :title="post.title" :date="post.createdAt"/>
    </div>

  </div>
</template>

<script>
import PostSummary from './PostSummary';

export default {
  data() {
    return {
      recentPost: null,
    };
  },
  mounted() {
    this.$axios.get('/post/all')
      .then(({ data }) => {
        console.log(data);
        this.recentPost = data.data;
      })
      .catch((err) => {
        this.recentPost = `err ${err}`;
      });
  },
  components: {
    PostSummary,
  },
};
</script>

<style lang="css">
</style>

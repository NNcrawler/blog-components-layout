<template lang="html">
  <div class="row">
    <h1 class="col-12 col-md-3">Recent Post</h1>
    <div class="col-12 col-md-7" v-for="post in recentPost" >

      <PostSummary class="col-12 border border-danger" :id="post._id" :title="post.title" :date="post.createdAt"/>
    </div>
    <div class="col-12 col-md-2 offset-md-1">
      <img src="http://maxcdn.inspirationfeed.com/wp-content/uploads/2010/08/elegantbanners1.gif" alt="">
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

<template lang="html">
  <div class="col-12 col-md-8 offset-md-1 text-sm-center text-md-left article-sum">
      <router-link :to="{ name: 'detail-post', params: {id} }"><h2>{{title}}</h2></router-link>
      <p>{{date}}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'date', 'id'],
};
</script>

<style lang="css">

</style>

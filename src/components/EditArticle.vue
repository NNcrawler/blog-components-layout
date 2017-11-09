<template lang="html">
  <div class="">
    <div v-if="error != ''" class="alert alert-danger" role="alert">
      {{error}}
    </div>
    <div v-if="success != ''" class="alert alert-success" role="alert">
      {{success}}
    </div>
    <!-- {{posting}} -->
    <div class="form-group">
      <label for="exampleInputPassword1"><h2>Update</h2></label>
      <input v-model="title" type="text" class="form-control" id="exampleInputPassword1" placeholder="Title">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1"></label>
      <textarea v-model="content" placeholder="Your article here ...." class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
    </div>
    <button @click="edit" class="btn btn-success" type="button" name="button">Submit</button>
  </div>
</template>

<script>
export default {
  props: ['posting'],
  data() {
    return {
      title: '',
      content: '',
      success: '',
      error: '',
    };
  },
  methods: {
    edit() {
      this.error = '';
      this.success = '';
      const passedData = {
        title: this.title,
        content: this.content,
        token: window.localStorage.getItem('token'),
        // eslint-disable-next-line
        postId: this.posting._id,
      };
      this.$axios.put('/post', passedData)
        .then((value) => {
          const response = value.data;
          if (response.message === 'berhasil') {
            this.success = 'Your article have been updated.';
            this.title = '';
            this.content = '';
            this.$store.commit('changeDetailPost', passedData.postId);
            let i = 0;
            while (i < 1000) {
              i += 1;
            }
            this.$router.push({ name: 'detail-post', params: { id: passedData.postId } });
          } else {
            // eslint-disable-next-line
            console.log(value);
            // eslint-disable-next-line
            throw 'Oops';
          }
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.error = 'Oops Something Wrong';
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // access to component instance via `vm`
      if (!window.localStorage.getItem('token')) {
        vm.$router.push({ name: 'recent-post' });
      }
      // eslint-disable-next-line
      vm.title = vm.posting.title;
      // eslint-disable-next-line
      vm.content = vm.posting.content;
    });
  },
};
</script>

<style lang="css">
</style>

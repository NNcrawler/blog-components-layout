<template lang="html">
  <div class="">
    <div v-if="error != ''" class="alert alert-danger" role="alert">
      {{error}}
    </div>
    <div v-if="success != ''" class="alert alert-success" role="alert">
      {{success}}
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Title</label>
      <input v-model="title" type="text" class="form-control" id="exampleInputPassword1" placeholder="Title">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Content</label>
      <textarea v-model="content" placeholder="Your article here ...." class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
    </div>
    <button @click="login" class="btn btn-success" type="button" name="button">POST</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      success: '',
      error: '',
    };
  },
  methods: {
    login() {
      this.error = '';
      this.success = '';
      const passedData = {
        title: this.title,
        content: this.content,
        token: window.localStorage.getItem('token'),
      };
      this.$axios.post('/post', passedData)
        .then((value) => {
          const response = value.data;
          if (response.message === 'berhasil') {
            this.success = 'Your article have been posted.';
            this.title = '';
            this.content = '';
          } else {
            // eslint-disable-next-line
            console.log('er');
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
    });
  },
};
</script>

<style lang="css">
</style>

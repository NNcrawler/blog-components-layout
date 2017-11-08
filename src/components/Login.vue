<template lang="html">
  <div class="col-md-4 offset-md-4">

    <div v-if="error != ''" class="alert alert-danger" role="alert">
      {{error}}
    </div>

    <div v-if="success != ''" class="alert alert-success" role="alert">
      {{error}}
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <button @click="login" class="btn btn-success" type="button" name="button">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      error: '',
      success: '',
    };
  },
  methods: {
    login() {
      this.error = '';
      this.success = '';
      const data = {
        email: this.email,
        password: this.password,
      };
      this.$axios.post('/user/login', data)
        .then((response) => {
          const resData = response.data;
          if (resData.message === 'berhasil') {
            window.localStorage.setItem('token', resData.token);
            window.localStorage.setItem('user_id', resData.id);
            this.$store.commit('loginChecker');
            this.$router.push({ name: 'recent-post' });
          } else {
            // eslint-disable-next-line
            throw resData;
          }
        })
        .catch((err) => {
          this.error = 'Oops! Something is not right. Pls try different combination.';
          // eslint-disable-next-line
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css">
</style>

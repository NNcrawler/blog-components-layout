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
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input v-model="username" type="text" class="form-control" id="username" placeholder="Choose username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <button @click="register" class="btn btn-success" type="button" name="button">Register</button>
    <br>
    <router-link :to="{ name: 'login', params: {} }"><button class="btn btn-link" type="button" name="button">It seems i have an account...</button></router-link>
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
    register() {
      this.error = '';
      this.success = '';
      const data = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      this.$axios.post('/user/create', data)
        .then((response) => {
          const resData = response.data;
          if (resData.message === 'berhasil') {
            this.success = 'Register Success! Use your account to share greatness.';
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

<template>
  <router-view></router-view>
</template>

<script>

import { storeUser } from "./store/user";

export default {
  name: 'AppComponent',
  methods: {
    checkLogin() {
      return storeUser().getUserId;
    }
  },
  created() {
    if(!this.checkLogin()) {
      this.$router.push('login');
    }
  },
}
</script>
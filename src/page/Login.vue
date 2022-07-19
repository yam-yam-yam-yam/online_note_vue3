<template>
  <input type="text" v-model="userId">아이디 입력
  <button @click="login(userId)">로그인</button>
</template>

<script>

import { storeUser } from "../store/user";

export default {
  name: 'LoginComponent',
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    login(param) {
      storeUser().setUserId(param)
      alert(`${storeUser().getUserId} 계정으로 접속합니다.`);
      this.$router.push('memo')
    }
  }
}
</script>
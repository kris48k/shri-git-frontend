<script setup lang="ts">

import { useAuthStore } from "@/stores/authStore";
import router from "../router";
const code = router.currentRoute.value.query.code;

const store = useAuthStore();
store.authenticate(code?.toString() || '').then(()=>{
  router.push('/select-repo');
}).catch(()=>{
  router.push('/user-not-found');
});


</script>
<template>
    <h2>Авторизация...</h2>
</template>

<style>

</style>

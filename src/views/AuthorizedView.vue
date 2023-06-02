<script setup lang="ts">

import { useAuthStore } from "@/stores/authStore";
import router from "../router";
const code = router.currentRoute.value.query.code;

const store = useAuthStore();
await store.authenticate(code?.toString() || '');
router.push('/select-repo');

</script>
<template>
  <div class="about">
    <h1>Authorizing...</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';

const store = useAuthStore();
store.initStore();

if (store.isLoggedIn && store.currentRepo) { 
  router.push('/assignment');
} else if (store.isLoggedIn) {
    router.push('/select-repo');
} else {
    router.push('/login');
}
</script>

<template>
  <main>
    
  </main>
</template>

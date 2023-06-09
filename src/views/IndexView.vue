<script setup lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { useAssignmentStore } from '@/stores/assignmentStore';

const store = useAuthStore();
store.initStore();

if (store.isLoggedIn && store.currentRepo) { 
  router.push('/assignment');
} else if (store.isLoggedIn) {
    router.push('/assignment');
} else {
    router.push('/login');
}
</script>

<template>
  <main>
    
  </main>
</template>

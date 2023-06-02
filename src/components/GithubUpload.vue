<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue';
import { useAuthStore } from '../stores/authStore';

const store = useAuthStore();
const authUrl = store.authURL;
</script>

<template>
  <div class="greetings">
    <h1 class="green">Авторизуйтесь с помощью Github:</h1>
    <a class="login-link" :href='authUrl'>
        <GithubIcon />
        <span>Login with GitHub</span>
    </a>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

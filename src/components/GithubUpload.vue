<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue';
import { useAuthStore } from '../stores/authStore';

const store = useAuthStore();
const authUrl = store.authURL;
</script>

<template>
  <div class="central-content">
    
    <h2 >
      <a class="login-link" :href='authUrl'>
        Авторизуйтесь с помощью <GithubIcon />
      </a>
    </h2>

  </div>
</template>

<style>
.octicon {
  vertical-align: bottom;
}

</style>


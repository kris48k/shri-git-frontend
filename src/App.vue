<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import { darkTheme, NConfigProvider } from 'naive-ui';
import { useAuthStore } from './stores/authStore';

export default defineComponent({
    components: {NConfigProvider},
    setup() {
      const store = useAuthStore();
      return {
        name: store.isLoggedIn ? store.login : "",
        darkTheme,
        debug: import.meta.env.VITE_DEBUG,
        onClick:()=>{
          store.reset();
        }
      }
    }
})

</script>

<template>
  <header>
      <h1 class="title">Школа разработки интерфейсов: <span class="git">GIT</span></h1>
      <div class="users-info">{{ name }}</div>
      <button :onClick="onClick">Сбросить прогресс</button>
  </header>
  <div class="app content-wrapper">
  
    <div class="content">
      <n-config-provider :theme="darkTheme">
        <RouterView />
      </n-config-provider>
    </div>
  </div>
</template>

<style scoped>



</style>

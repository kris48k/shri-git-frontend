<script lang="ts">
import { RouterView } from 'vue-router';
import { computed, defineComponent } from 'vue';
import { darkTheme, NConfigProvider } from 'naive-ui';
import { useAuthStore } from './stores/authStore';

export default defineComponent({
    components: {NConfigProvider},
    setup() {
      const store = useAuthStore();
      //store.initStore();
      return {
        name: computed(() => store?.login),
        repo: computed(() => store?.currentRepo?.label),
        darkTheme,
        debug: import.meta.env.VITE_DEBUG,
        isLoggedIn: computed(() => store.isLoggedIn),
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
      <div v-if="isLoggedIn" class="users-info">
        <div v-if="name"><span class="msg">Вы: </span>{{ name }}</div>
        <div v-if="repo"><span class="msg">Ваш репозиторий: </span>{{ repo }}</div>
      </div>
      <button class="reset" :onClick="onClick">Сбросить прогресс</button>
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
.reset{
  position: fixed;
  bottom:0;
  right:0;
  display: none;
}

.users-info {
  margin: auto 0;
}


</style>

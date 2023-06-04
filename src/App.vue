<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import { darkTheme, NConfigProvider } from 'naive-ui';

export default defineComponent({
    components: {NConfigProvider},
    setup() {
      return {
        darkTheme
      }
    }
})

</script>

<template>
  <header>
    <div class="logo" />
    <div class="users-info">Добавить информацию о пользователе(имя, репо, сделано заданий)</div>
  </header>
  <div class="app">
    <h1 class="title">Школа разработки <br/> интерфейсов: <span class="git">GIT</span></h1>
    <div class="content">
      <n-config-provider :theme="darkTheme">
        <RouterView />
      </n-config-provider>
    </div>
  </div>
</template>

<style scoped>

</style>

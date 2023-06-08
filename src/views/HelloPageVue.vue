<script setup lang="ts">
import router from '@/router';
const onClick = ()=>{
    router.push('/login');
}
</script>

<template>
    <h2>Добро пожаловать в Школу Разработки Интерфейсов, курс по Git</h2>
    <h3>Для начала давай форкнем репозиторий ...</h3>
    <button class="button" :onClick="onClick">Далее</button>
</template>

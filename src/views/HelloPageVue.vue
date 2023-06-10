<script setup lang="ts">
import router from '@/router';
const onClick = ()=>{
    router.push('/select-repo');
}
</script>

<template>
    <div class="content-content">
        <h2>Добро пожаловать в Школу Разработки Интерфейсов, домашняя работа по Git</h2>
        <h3><a target="_blank" href="https://github.com/gitya2023/test_1">Для начала давайте форкнем вот этот репозиторий ➡</a></h3>
        <button class="button" :onClick="onClick">Далее</button>
    </div>
</template>

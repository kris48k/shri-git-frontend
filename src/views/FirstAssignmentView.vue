<script lang="ts">
import { defineComponent, Suspense} from 'vue';
import { useFirstAssignmentStore } from '@/stores/firstAssignmentStore';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
    components: {
    },
    setup(){
        const store = useAuthStore();
        store.initAssignment();
        return {
            name: store.name,
            repo: store.currentRepo.label
        };
    }
})

</script>

<template>
    <h2>Задание первое:</h2>
    <ul class="tasks">
        <li class="done">Создать репозиторий</li>
        <li>Создать ветку dev</li>
        <li>добавить файлы index.js</li>
        <li>закомитеть c месседжем «1 index»</li>
        <li>добавить style.css</li>
        <li>закомитеть c месседжем «2 style»</li>
        <li>добавить файлы index.html</li>
        <li>закомитеть c месседжем «3 html»</li>
        <li>добавить файлы config.js</li>
        <li>закомитеть c месседжем «4 config»</li>
        <li>добавить api.js</li>
        <li>закомитеть c месседжем «5 api»</li>
        <li>Запушьте все это в репозиторий</li>
    </ul>
    <button class="button">Отправить на проверку</button>
</template>

<style>
.tasks {
    margin-bottom: 20px;
}
</style>



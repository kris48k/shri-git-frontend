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
    <h3>Привет {{name}}!</h3>
    <h4>Твой репозиторий: {{repo}}</h4>
    <br/>
    <h1>Задание первое:</h1>
    <div>
        Вы начали работу над интернет магазион и вас взяли в команду разработки. 
        В репозитории который вы форкнули, нужно от основной ветки отвести ветку dev. 
        Пока в проекте должно быть 5 файлов. 
        Наш тим лид любит чтобы история была атомарной. 
        Поэтому добавление каждого файла надо оформить отдельным коммитом. 
    </div>
    <div class="tasks">
        <div><input type="checkbox" checked/><label>Создать репозиторий</label></div>
        <div><input type="checkbox"/><label>Создать ветку dev</label></div>
        <div><input type="checkbox"/><label>добавить файлы index.js</label></div>
        <div><input type="checkbox"/><label>закомитеть c месседжем «1 index»</label></div>
        <div><input type="checkbox"/><label>добавить style.css</label></div>
        <div><input type="checkbox"/><label>закомитеть c месседжем «2 style»</label></div>
        <div><input type="checkbox"/><label>добавить файлы index.html</label></div>
        <div><input type="checkbox"/><label>закомитеть c месседжем «3 html»</label></div>
        <div><input type="checkbox"/><label>добавить файлы config.js</label></div>
        <div><input type="checkbox"/><label>закомитеть c месседжем «4 config»</label></div>
        <div><input type="checkbox"/><label>добавить api.js</label></div>
        <div><input type="checkbox"/><label>закомитеть c месседжем «5 api»</label></div>
        <div><input type="checkbox"/><label>Запушьте все это в репозиторий</label></div>
    </div>
    <button>Отправить на проверку</button>
</template>

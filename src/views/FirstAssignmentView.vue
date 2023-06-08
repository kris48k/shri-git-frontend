<script lang="ts">
import { defineComponent, Suspense} from 'vue';
import { useFirstAssignmentStore } from '@/stores/firstAssignmentStore';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
    components: {
    },
    setup(){
        //const store = useAuthStore();
        //store.initAssignment();
        return {
            name: "",//store.name,
            repo: "",// store.currentRepo.label
            error: null,
            onClick: ()=>{
                setTimeout(()=>{ // тут будет вызов апи
                    const success = Math.random() > 0.5;
                    if (success) {

                    } else {
                        //this.error = "Задание выполнено не верно";
                    }
                }, 1000);
            }
        };
    }
})

</script>

<template>
    <h2>Задание первое:</h2>
    <div>
        Ты присоединился к команде разработчиков нового интернет магазина. Ты уже умеешь писать код и решил попробовать свои силы в командной работе. Ты присоединился к команде, в которой уже работал опытный тимлид Аркадий. 
        Аркаша дал тебе задание сделать правки уже в существующем проект. Ты приступил к работе, но когда закончил писать код, ты понял, что тебе нужно его опубликовать и представить другим разработчикам.
        Это шуточное задание. Код с которым вы будете взаимодействовать — не рабочий. Это сделано осознанно, чтобы вы не вдавались в нюансы реализации, а работали именно с гитов. Сам интернет магазин писать не нужно.

    </div>
    <ul class="tasks">
        <li class="done">Форкнуть репозиторий</li>
        <li>Создать ветку c названием <span class="code">dev</span></li>
        <li>Добавить в корень репозитория файл <span class="code">index.js</span></li>
        <li>Сделать коммит c сообщением <span class="msg">1 index</span></li>
        <li>Добавить в корень репозитория файл <span class="code">style.css</span></li>
        <li>Сделать коммит c сообщением <span class="msg">2 style</span></li>
        <li>Добавить в корень репозитория файл <span class="code">index.html</span></li>
        <li>Сделать коммит c сообщением <span class="msg">3 html</span></li>
        <li>Добавить в корень репозитория файл <span class="code">config.js</span></li>
        <li>Сделать коммит c сообщением <span class="msg">4 config</span></li>
        <li>Добавить в корень репозитория файл <span class="code">api.js</span></li>
        <li>Сделать коммит c сообщением <span class="msg">5 api</span></li>
        <li>Сделать пуш в свой репозиторий</li>
    </ul>
    <button class="button">Проверить результат</button>
</template>

<style>
.tasks {
    margin-bottom: 20px;
}
</style>



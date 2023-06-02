<script lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { defineComponent, ref } from 'vue';
import { NSelect } from 'naive-ui';
import router from '@/router';


export default defineComponent({
    components: {
        NSelect
    },
    async setup(){
        const store = useAuthStore();
        await store.fetchRepositories();
        const options = store.repositories.map(e=> { return {label: e.name, value: e.id }});
        function handleUpdateValue (value, options) {
            store.setCurrentRepo({ value, label: options.label });
            router.push('/first-assignment');
        };
        return {
            login: store.login, 
            name: store.name,
            value: ref(null),
            options,
            handleUpdateValue
        }
    }
})


</script>

<template>            
    <h1>Выберите репозиторий с домашней работой {{name}}</h1>
    <main>
        <n-select v-model:value="value" :options="options" @update:value="handleUpdateValue"/>
    </main>
</template>

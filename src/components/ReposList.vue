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
        const options = store.repositories.map(e=> { return {label: e.name, value: e.id }});
        function handleUpdateValue (value, options) {
            store.setCurrentRepo({ value, label: options.label });

            router.push('/assignment');
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
    <main>
        <n-select v-model:value="value" placeholder="Выберите репозиторий с домашней работой" :options="options" @update:value="handleUpdateValue"/>
    </main>
</template>

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
        const value = ref(null);
        const store = useAuthStore();
        const options = store.repositories.map(e=> { return {label: e.name, value: e.id }});
        function handleUpdateValue () {
            const id = value.value;
            const selected = options.find(v => v.value === value.value)
            store.setCurrentRepo({ value: id, label: selected.label });

            router.push('/assignment');
        };
        return {
            login: store.login,
            name: store.name,
            value,
            options,
            handleUpdateValue
        }
    }
})


</script>

<template>
    <main>
        <n-select v-model:value="value" placeholder="Выберите репозиторий с домашней работой" :options="options"/>
        <button class="button" :onClick="handleUpdateValue">Далее</button>
    </main>
</template>

<style>

.n-select {
    min-width: 800px;
}

</style>

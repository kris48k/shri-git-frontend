<script lang="ts">
import { defineComponent, Suspense} from 'vue';
import { useAssignmentStore } from '@/stores/assignmentStore';

export default defineComponent({
    components: {
    },
    setup(){
        const store = useAssignmentStore();
        return {
            name: "",//store.name,
            repo: "",// store.currentRepo.label
            error: null,
            onClick: ()=>{
                store.checkAssignment();
            }
        };
    }
})

</script>

<template>

    <button class="button" :onClick="onClick">Проверить результат</button>
</template>

<style>
.tasks {
    margin-bottom: 20px;
}
</style>



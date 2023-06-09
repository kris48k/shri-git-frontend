<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAssignmentStore } from '@/stores/assignmentStore';
import FirstAssignmentContent from '@/components/FirstAssignmentContent.vue'
import SecondAssignmentContent from '@/components/SecondAssignmentContent.vue';
import ThirdAssignmentContent from '@/components/ThirdAssignmentContent.vue';
import FourthAssignmentContent from '@/components/FourthAssignmentContent.vue';
import FithAssignmentContent from '@/components/FithAssignmentContent.vue';


export default defineComponent({
    components: {
        FirstAssignmentContent,
        SecondAssignmentContent,
        ThirdAssignmentContent,
        FourthAssignmentContent,
        FithAssignmentContent
    },
    setup(){
        const store = useAssignmentStore();
        store.checkStatus();
        return {
            loading: computed(() => store.loading) ,
            error: null,
            activeTask: computed(() => store.activeTask),
            onClick: ()=>{
                store.checkAssignment();
            }
        };
    }
})

</script>

<template>
    <div v-if="loading">...</div>
    <div v-else>
        <div class="task-contend">
            <FirstAssignmentContent v-if="activeTask===1"/>
            <SecondAssignmentContent v-if="activeTask===2"/>
            <ThirdAssignmentContent v-if="activeTask===3"/>
            <FourthAssignmentContent v-if="activeTask===4"/>
            <FithAssignmentContent v-if="activeTask===5"/>
        </div>
        <button class="button" :onClick="onClick">Проверить результат</button>
    </div>
    
</template>

<style>
.tasks {
    margin-bottom: 20px;
}
</style>



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
            error: computed(() => store.error),
            activeTask: computed(() => store.activeTask),
            checking:  computed(() => store.checking),
            success:  computed(() => store.success),
            canDoNextTask:  computed(() => store.canDoNextTask),
            onClick: ()=>{
                store.checkAssignment();
            },
            onNextClick: ()=>{
                store.nextTask();
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
        <div class="button-container">
            <button class="button button-check" :onClick="onClick" :disabled="checking || success">Проверить результат</button>
            <button v-if="canDoNextTask" class="button button-next-step" :onClick="onNextClick" >Перейти к следующему заданию</button>
        </div>
        <div v-if="success || error">
            <div v-if="error" class="error" >Статус: {{ error }}</div>
            <div v-if="success" class="success" >Статус: Задание выполнено успешно!</div>
        </div>
        
    </div>
    
</template>

<style>
.tasks {
    margin-bottom: 20px;
}

.button {
    margin: 20px;
}

.button-container {

}

.error {
    margin: 20px;
    color: red;
}

.success {
    margin: 20px;
    color: green;
}

</style>



<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAssignmentStore } from '@/stores/assignmentStore';
import FirstAssignmentContent from '@/components/FirstAssignmentContent.vue'
import SecondAssignmentContent from '@/components/SecondAssignmentContent.vue';
import ThirdAssignmentContent from '@/components/ThirdAssignmentContent.vue';
import FourthAssignmentContent from '@/components/FourthAssignmentContent.vue';
import FithAssignmentContent from '@/components/FithAssignmentContent.vue';
import router from '@/router';


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
        if (!store.auth.isLoggedIn) {
            router.push('/');
        }
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
        <div class="content-container">
            <div class="task-contend">
                <FirstAssignmentContent v-if="activeTask===1"/>
                <SecondAssignmentContent v-if="activeTask===2"/>
                <ThirdAssignmentContent v-if="activeTask===3"/>
                <FourthAssignmentContent v-if="activeTask===4"/>
                <FithAssignmentContent v-if="activeTask===5"/>
            </div>
            <div class="status">
                <div v-if="error" class="error" > 🔴 {{ error }}</div>
                <div v-if="success" class="success"> 🟢 Задание выполнено успешно!</div>
            </div>
            <div class="button-container">
                <button v-if="!success" class="button button-check" :onClick="onClick" :disabled="checking">
                    <span v-if="checking">Проверяем 🧐</span>
                    <span v-else>Проверить результат <span v-if="error">еще раз</span></span>
                    
                </button>
                <button v-if="canDoNextTask" class="button button-next-step" :onClick="onNextClick" >Перейти к следующему заданию</button>
            </div>
        </div>
    </div>
    
</template>

<style>

.button {
    margin: 20px;
    min-width: 300px;
}

.button-check:disabled, .button:hover:disabled, .button:active:disabled {
    background-color: #fdefab;
    color: var( --color-background);
}

.status {
    height: 50px;
    display: flex;
    align-items: center;
}

.error {
    margin: 20px;
    color: red;
}

.success {
    margin: 20px;
    color: #00ff28;;
}

.content-container {
    max-width: 1200px;
}

.joke {
    color: gray;
    font-size: 0.6rem;
}

.descripton {
    margin: 10px 0;
}

.tasks li {
    margin: 10px 0;
}

.tasks {
    margin-top: 40px;
}

</style>



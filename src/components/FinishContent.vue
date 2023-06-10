<script  lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { useAssignmentStore } from '@/stores/assignmentStore';
import { defineComponent } from 'vue';

export default defineComponent({
    async setup(){
        const store = useAssignmentStore();
        store.auth.initStore();
        await store.checkStatus();

        if (!store.auth.isLoggedIn || !store.isHomeworkOver) {
            router.push('/');
        } else {
            confetti({
                particleCount: 1000,
                spread: 2000,
            });
        }
    }
});

</script>

<template>
    <div class="finish">
        <h2>Поздравляю! Вы успешно прошли все задания!</h2>
        <img src="/src/assets/cat_meme.jpg" class="meme"/>
    </div>
</template>

<style>
.finish {
    text-align: center;
}

.meme {
    animation: show-up 4s ease;

}


@keyframes show-up {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
   }
}
</style>

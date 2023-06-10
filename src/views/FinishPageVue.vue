<script  lang="ts">
import FinishContent from '../components/FinishContent.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    components: {
        FinishContent, 
    },
    setup(){
        return {};
    }
})

</script>

<template>
    <Suspense>
        <FinishContent />
    </Suspense>
</template>

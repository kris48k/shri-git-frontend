<script lang="ts">
import { defineComponent, Suspense} from 'vue';
import ReposList from '../components/ReposList.vue';

export default defineComponent({
    components: {
        ReposList, 
    },
    setup(){
        return {};
    }
})

</script>

<template>
    <Suspense>
        <ReposList />
    </Suspense>
</template>

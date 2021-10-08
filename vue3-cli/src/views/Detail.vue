<template>
    <main>
        <h1>Dog #{{$route.params.dogId}}</h1>
        <router-link to="/">zurück</router-link>
            <Image
                :src="dog.url"
                :alt="dog.id"
            />
        <router-link to="/">zurück</router-link>
    </main>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import Image from '@/components/Image.vue';
import { fetchDog } from '@/dogs';
export default {
    name: 'Detail',
    components: {
        Image,
    },
    setup() {
        const dog = ref({});
        const route = useRoute()

        onMounted(async() => {
            dog.value = await fetchDog(route.params.dogId);
        });

        return {
            dog,
        };
    },
}
</script>
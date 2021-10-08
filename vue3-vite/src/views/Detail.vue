<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import Image from '@/components/Image.vue';

const apiUrl = 'https://api.thedogapi.com/v1/images/';
const dog = ref({});
const route = useRoute();

onMounted(async () => {
    const response = await fetch(`${apiUrl}${route.params.dogId}`);
    if (response.ok) {
        dog.value = await response.json();
    }
});
</script>
<template>
    <main>
        <router-link to="/">zurück</router-link>
        <Image :src="dog.url" :alt="dog.id" />
        <router-link to="/">zurück</router-link>
    </main>
</template>
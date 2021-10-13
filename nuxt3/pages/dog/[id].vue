<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const { data } = await useFetch(`${import.meta.env.VITE_API_DETAIL_URL}${route.params.id}`);
</script>

<template>
    <main>
        <NuxtLink to="/">zurück</NuxtLink>
            <Image
                :src="data.url"
                :alt="data.id"
            />
        <NuxtLink to="/">zurück</NuxtLink>
    </main>
</template>
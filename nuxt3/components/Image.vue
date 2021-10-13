<template>
    <picture>
        <img
            :class="{
                'img' : true,
                'img--cover': cover
            }"
            :src="src"
            :alt="alt"
        >
    </picture>
</template>

<script setup>
const props = defineProps({
    cover: Boolean,
    src: String,
    alt: String,
});
</script>

<style scoped>
.img {
    max-width: 100%;
    height: auto;
}

.img--cover {
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
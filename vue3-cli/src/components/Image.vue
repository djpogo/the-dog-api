<template>
    <picture>
        <img
            class="img"
            :class="{'img--cover' : cover}"
            :src="src"
            :alt="alt"
        >
    </picture>
</template>

<script>
export default {
    name: 'Image',
    props: {
        cover: {
            type: Boolean,
            default: false
        },
        src: {
            type: String,
            default: null,
        },
        alt: {
            type: String,
            default: null,
        },
    },
};
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
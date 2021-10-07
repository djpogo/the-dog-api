<script lang="ts">
    export let cover:Boolean = false;
    export let src:string = null;
    export let alt:string = null;
</script>

<picture>
    <img
        class="img"
        class:img--cover={cover}
        {src}
        {alt}
    >
</picture>

<style>
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
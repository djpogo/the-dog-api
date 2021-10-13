<script setup>
    const { data } = await useFetch(import.meta.env.VITE_API_URL);
</script>

<template>
    <main>
        <ul class="ul">
            <li
                v-for="dog in data"
                :key="dog.id"
                class="li"
            >
                <NuxtLink :to="`/dog/${dog.id}`">
                    <Image
                        cover
                        :src="dog.url"
                        :alt="dog.id"
                    />
                </NuxtLink>
            </li>
        </ul>
    </main>
</template>

<style scoped>
.ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}
  
.li {
    width: 100%;
}

.button {
    background-color: var(--header-bg-color);
    color: var(--header-text-color);
    border: 2px solid var(--accent-color);
    border-radius: .25rem;
    padding: .2rem .3rem;
    margin: .2rem;
    font-weight: 700;
}

  
@media screen and (min-width: 640px) {
    .li {
        width: 50%;
    }
}
  
@media screen and (min-width: 768px) {
    .li {
        width: 33%;
    }
}
</style>
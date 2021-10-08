<script setup>
import { ref, onMounted } from 'vue';
import Image from '@/components/Image.vue'

const apiUrl = 'https://api.thedogapi.com/v1/images/';
const dogs = ref([]);

onMounted(() => {
    if (window.sessionStorage.getItem('dogs')) {
        dogs.value = JSON.parse(window.sessionStorage.getItem('dogs'));
        return;
    }
    fetchDogs();
});

async function fetchDogs() {
    const response = await fetch(`${apiUrl}search?limit=20`);
    if (response.ok) {
        dogs.value = await response.json();
        window.sessionStorage.setItem('dogs', JSON.stringify(dogs.value));
    }
}
</script>

<template>
    <div>
        <button
            class="button"
            @click="fetchDogs"
        >
            refresh dog list
        </button>
        <ul class="ul">
            <li 
                v-for="dog in dogs"
                :key="dog.id"
                class="li"
            >
                <router-link :to="`/dog/${dog.id}`">
                    <Image
                        :src="dog.url"
                        :alt="dog.id"
                        cover
                    />
                </router-link>
            </li>
        </ul>
    </div>
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
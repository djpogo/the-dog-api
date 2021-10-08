<template>
    <main>
        <button
            class="button"
            @click="fetchDogs()"
        >refresh dog list</button>
        <ul class="ul">
            <li
                v-for="dog in dogs"
                :key="dog.id"
                class="li"
            >
                <router-link :to="`/dog/${dog.id}`">
                    <Image
                        cover
                        :src="dog.url"
                        :alt="dog.id"
                    />
                </router-link>
            </li>
        </ul>
    </main>
</template>

<script>
import { onMounted } from 'vue';
import { dogs, fetchDogs } from '../dogs';
import Image from '@/components/Image.vue';

export default {
    name: 'Home',

    components: {
        Image,
    },

    setup() {
        onMounted(() => {
            if (dogs.value.length === 0) {
                fetchDogs();
            }
        });

        return {
            dogs,
            fetchDogs
        };
    },
};
</script>

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
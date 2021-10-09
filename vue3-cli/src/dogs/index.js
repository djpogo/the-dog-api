import { ref } from 'vue';

const dogsUrl = process.env.VUE_APP_API_URL;
const dogUrl = process.env.VUE_APP_API_DETAIL_URL;
const dogs = ref([]);

async function fetchDogs() {
    const response = await fetch(dogsUrl);
    if (response.ok) {
        dogs.value = await response.json();
    }
}

async function fetchDog(dogId) {
    const response = await fetch(`${dogUrl}${dogId}`);
    if (response.ok) {
        return await response.json();
    }
    return null;
}

export { 
    dogs,
    fetchDogs,
    fetchDog
};
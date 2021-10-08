import { ref } from 'vue';

const apiUrl = 'https://api.thedogapi.com/v1/images/';
const dogs = ref([]);

async function fetchDogs() {
    const response = await fetch(`${apiUrl}search?limit=20`);
    if (response.ok) {
        dogs.value = await response.json();
    }
}

async function fetchDog(dogId) {
    const response = await fetch(`${apiUrl}${dogId}`);
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
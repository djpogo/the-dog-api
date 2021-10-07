<script context="module" lang="ts">
const apiUrl = 'https://api.thedogapi.com/v1/images/';
/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ page, fetch }) {
    const response = await fetch(`${apiUrl}${page.params.dogId}`);

    if (response.ok) {
        return {
            props: {
                dog: await response.json(),
            },
        };
    }
};
</script>

<script lang="ts">
    import Image from '$lib/Image.svelte';
    export let dog:Object = null;
</script>

<a href="/">zurück</a>
<Image 
    src={dog.url}
    alt={dog.id}
/>
<a href="/">zurück</a>
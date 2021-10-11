<script context="module" lang="ts">
import { variables } from '../../variables';
const { apiDetailUrl } = variables;
/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ page, fetch }) {
    const response = await fetch(`${apiDetailUrl}${page.params.dogId}`);

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
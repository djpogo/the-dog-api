<script context="module" lang="ts">
	export const prerender = true;
	import { variables } from '../variables';
	const { apiUrl } = variables;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const response = await fetch(apiUrl);

		if (response.ok) {
			return {
				props: {
					dogs: await response.json()
				},
			};
		}
	}
</script>

<script lang="ts">
	import Image from '$lib/Image.svelte';
	export let dogs = [];
</script>

<section>
	<ul class="ul">
		{#each dogs as dog}
		<li class="li">
			<a href={`/dog/${dog.id}`}>
				<Image
					cover
					src={dog.url}
					alt={dog.id}
				/>
			</a>
		</li>
		{/each}
	</ul>
</section>

<style>
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

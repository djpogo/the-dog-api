<script lang="ts">
	import '../app.css';
</script>

<header class="App-header">
	<h1>The Dog Api</h1>
</header>

<main>
	<slot />
</main>

<style>
	.App-header {
		background-color: var(--header-bg-color);
		color: var(--header-text-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
	}
</style>

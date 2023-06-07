<script>
	import { page } from '$app/stores';
</script>

<nav class="py-4 flex justify-start">
	<button
		class="btn btn-outline btn-warning"
		on:click={() => {
			history.back();
		}}>Back</button
	>
</nav>

<div class="flex justify-center w-full">
	<div>
		<h1 class="text-6xl font-bold py-4">Pokémons</h1>
	</div>
</div>
<div class="flex justify-center w-full pb-10">
	<p>{$page.error?.message}</p>
</div>

<div class="w-full flex justify-center items-center">
	<img src="/pikachu-shock.png" alt="shocked-pikachu" />
</div>

<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<div class="container w-10/12 mx-auto">
	<Header />
	<slot />
</div>

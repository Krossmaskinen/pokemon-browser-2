<script lang="ts">
	export let variant: 'info' | 'success' | 'warning' | 'error' = 'success';
	export let href: string;
</script>

<a {href} class="btn btn-outline btn-{variant}">
	<slot />
</a>

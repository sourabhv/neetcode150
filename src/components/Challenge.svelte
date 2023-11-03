<script>
	import DifficultyIndicator from './DifficultyIndicator.svelte';
	export let challenge;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
	class="flex flex-row items-center p-3 cursor-pointer rounded-md border-slate-900 bg-slate-950/[.3] hover:bg-slate-950 transition-all"
	on:click={() => window.open(challenge.link, '_blank')}
>
	<DifficultyIndicator difficulty={challenge.difficulty} />
	<p class="ml-3 text-sm font-semibold">{challenge.name}</p>
</li>

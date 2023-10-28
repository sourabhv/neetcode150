<script>
    export let difficulty = 'Easy';

	let difficultyColor = '';
	if (difficulty == 'Easy') {
		difficultyColor = 'bg-emerald-500';
	} else if (difficulty == 'Medium') {
		difficultyColor = 'bg-yellow-500';
	} else if (difficulty == 'Hard') {
		difficultyColor = 'bg-red-500';
	}
</script>

<span class={`w-3 h-3 rounded-full ${difficultyColor}`} />

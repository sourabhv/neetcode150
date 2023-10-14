<script>
	import { questions } from '../lib/questions';
	import Question from '../components/question.svelte';
</script>

<div class="flex-1 h-full overflow-y-auto">
	<ul role="list" class="mx-auto max-w-4xl lg:w-4/5 py-1 divide-y divide-gray-700">
		{#each questions as question, index (question.name)}
			<Question {question} {index} />
		{/each}
	</ul>
</div>

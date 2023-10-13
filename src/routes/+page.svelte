<script>
	import { questions } from '../lib/questions';
	import Question from '../components/question.svelte';
</script>

<div class="mx-auto max-w-4xl lg:w-2/5 py-3">
	<ul role="list" class="divide-y divide-gray-200">
		{#each questions as question, index (question.name)}
			<Question {question} {index} />
		{/each}
	</ul>
</div>

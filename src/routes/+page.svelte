<script>
	import Question from '../components/Question.svelte';
	import { questions } from '../lib/questions';
</script>

<div class="flex-1 h-full overflow-y-auto">
	<ul role="list" class="mx-auto max-w-4xl lg:w-4/5 py-1 divide-y divide-gray-700">
		{#each questions as question (question.id)}
			<Question {question} id={question.id} />
		{/each}
	</ul>
</div>

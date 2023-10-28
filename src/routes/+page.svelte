<script>
	import { sections } from '../lib/stats';
	import QuestionGroup from '../components/QuestionGroup.svelte';
	import Question from '../components/Question.svelte';
</script>

<div class="flex-1 h-full overflow-y-auto">
	<ul role="list" class="mx-auto max-w-4xl lg:w-4/5 py-1 divide-y divide-gray-700">
		{#each sections as section (section.item?.id || section.items?.[0]?.id)}
			{#if section.type === 'question'}
				<Question question={section.item}  />
			{:else if section.type === 'collapse'}
				<QuestionGroup questions={section.items} />
			{/if}
		{/each}
	</ul>
</div>

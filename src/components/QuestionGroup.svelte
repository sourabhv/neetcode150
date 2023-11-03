<script>
	import Question from './Question.svelte';
	export let questions = [];

	let isOpen = false;

	function toggleAccordion() {
		isOpen = !isOpen;
	}
</script>

<li class="">
	<div class="accordion transition-all" class:expand={isOpen}>
		<div
			class="p-3 text-center text-[12px] text-indigo-500 uppercase transition-all hover:text-indigo-400 hover:font-bold"
			role="button"
			tabindex="0"
			on:click={toggleAccordion}
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					toggleAccordion();
				}
			}}
		>
			{questions.length} Solved Questions
		</div>

		<div class="accordion-content overflow-auto transition-all duration-300 ease-in-out">
			{#each questions as question (question.id)}
				<Question {question} />
			{/each}
		</div>
	</div>
</li>

<style>
	.accordion.expand .accordion-content {
		max-height: 2000px;
		opacity: 1;
		overflow: auto;
	}

	.accordion:not(.expand) .accordion-content {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
	}
</style>

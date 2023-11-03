<script>
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import DifficultyIndicator from './DifficultyIndicator.svelte';
	import Challenge from './Challenge.svelte';

	export let question;
	export let nofade = false;
	const key = `item${question.id}`;
	const hasChallenges = question.moreChallenges?.length > 0;

	const checked = writable(browser && localStorage.getItem(key) === 'true');
	$: $checked = $checked;
	checked.subscribe((value) => browser && localStorage.setItem(key, `${value}`));

	let isOpen = false;

	function toggleAccordion() {
		isOpen = !isOpen;
	}
</script>

<li class="flex flex-col items-stretch p-3">
	<div
		class="flex flex-1 flex-col items-stretch accordion transition-all"
		class:expand={isOpen}
		class:opacity-30={!nofade && $checked && !isOpen}
	>
		<div class="flex flex-row items-center">
			<div
				class="mr-2 p-2.5 rounded-md hover:bg-gray-700"
				role="button"
				tabindex="0"
				on:click={toggleAccordion}
				on:keydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						toggleAccordion();
					}
				}}
			>
				<svg
					class="w-2.5 h-2.5 transition-all"
					class:-rotate-90={!isOpen}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="stroke-white"
						stroke-width="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</div>

			<DifficultyIndicator difficulty={question.difficulty} />

			<input
				id={question.name}
				type="checkbox"
				bind:checked={$checked}
				name={question.name}
				class="h-4 w-4 ml-4 rounded border-gray-300 accent-indigo-500 focus:accent-indigo-600"
			/>
			<label for={question.name} class="text-sm my-0 ml-4 font-semibold leading-2 text-white">
				{question.name}
			</label>
			<div class="flex-1" />
			<button
				type="submit"
				on:click={() => window.open(question.link, '_blank')}
				class="flex flex-row items-center gap-x-2 rounded-md px-2 py-0.5 text-sm font-semibold leading-6 text-indigo-500 transition-all hover:bg-gray-700"
			>
				<svg
					width="18px"
					height="18px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
						class="stroke-indigo-500"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				OPEN
			</button>
		</div>

		<div
			class="accordion-content flex flex-col w-full overflow-auto transition-all duration-300 ease-in-out"
			class:mt-3={isOpen}
		>
			{#if hasChallenges}
				<ul class="flex flex-row items-center list-none">
					{#each question.moreChallenges as challenge (challenge.name)}
						<Challenge {challenge} />
					{/each}
				</ul>
			{/if}

			<pre
				class="w-full p-4 rounded-md border-slate-900 bg-slate-950/[.3] whitespace-pre-wrap text-sm leading-2 text-gray-300"
				class:mt-3={hasChallenges}>{question.description}</pre>
		</div>
	</div>
</li>

<style>
	.accordion.expand .accordion-content {
		max-height: 1000px;
		opacity: 1;
		overflow: auto;
	}

	.accordion:not(.expand) .accordion-content {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
	}
</style>

<script>
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';

	export let question;
	export let id;

	const key = `item${id}`;

	const checked = writable(browser && localStorage.getItem(key) === 'true');
	$: $checked = $checked;
	checked.subscribe((value) => browser && localStorage.setItem(key, `${value}`));

	let isOpen = false;

	function toggleAccordion() {
		isOpen = !isOpen;
	}
</script>

<li class="flex flex-row items-center p-3 items-center">
	<div class="flex flex-1 flex-col items-stretch accordion" class:expand={isOpen}>
		<div class="flex flex-row items-center" on:click={toggleAccordion}>
			<svg
				class="w-2.5 h-2.5 mr-2.5 transition-all"
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
			<input
				id={question.name}
				type="checkbox"
				bind:checked={$checked}
				name={question.name}
				class="h-4 w-4 rounded border-gray-300 accent-indigo-500 focus:accent-indigo-600"
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
			class="accordion-content w-full transition-all duration-300 ease-in-out"
			class:mt-3={isOpen}
		>
			<pre
				class="w-full rounded-md p-2 border-2 border-black bg-gray-900 whitespace-pre-wrap text-sm leading-2 text-gray-300">{question.description}</pre>
		</div>
	</div>
</li>

<style>
	.accordion.expand .accordion-content {
		max-height: 1000px;
		opacity: 1;
		overflow: visible;
	}

	.accordion:not(.expand) .accordion-content {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
	}
</style>

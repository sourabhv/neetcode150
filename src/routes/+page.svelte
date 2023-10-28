<script>
	import Question from '../components/Question.svelte';
	import { browser } from '$app/environment';
	import { questions } from '../lib/questions';

	const collapse_zones = [];

	if (browser) {
		const checked = Array.from(
			{ length: questions.length },
			(_, i) => localStorage.getItem(`item${i + 1}`) === 'true'
		);

		let start = -1;
		for (let i = 0; i < checked.length; i++) {
			if (!checked[i]) {
				start = -1;
			} else if (start === -1) {
				start = i;
			} else if (i === checked.length - 1 || !checked[i + 1]) {
				if (i - start + 1 > 1) {
					collapse_zones.push([start, i]);
				}
			}
		}
	}

	const items = collapse_zones
		.map(([start, end], idx) => {
			const prev = questions
				.slice(collapse_zones[idx - 1]?.[1] + 1 ?? 0, start)
				.map((q) => ({ type: 'question', item: q }));

			const next = (idx === collapse_zones.length - 1 ? questions.slice(end + 1) : []).map((q) => ({
				type: 'question',
				item: q
			}));
			const collapsed = questions.slice(start, end + 1);

			return prev.concat([{ type: 'collapse', items: collapsed }]).concat(next);
		})
		.flat();

	console.log(items);
</script>

<div class="flex-1 h-full overflow-y-auto">
	<ul role="list" class="mx-auto max-w-4xl lg:w-4/5 py-1 divide-y divide-gray-700">
		{#each items as item (item.item?.id || item.items?.[0]?.id)}
			{#if item.type === 'question'}
				<Question question={item.item}  />
			{:else if item.type === 'collapse'}
				<li class="py-4">
					<div class="collapse px-0">
						<input type="checkbox" class="peer min-h-0 h-10" />
						<div class="collapse-title text-[12px] text-indigo-500 min-h-0 h-10 p-0 flex items-center justify-center opacity-50 uppercase" >
							{item.items.length} solved questions
						</div>
						<div class="collapse-content px-0">
							<div class=" " id="faq-0">
								{#each item.items as item (item.id)}
									<Question question={item}  />
								{/each}
							</div>
						</div>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</div>

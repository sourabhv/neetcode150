<script>
	import '../app.css';
</script>

<div class="h-full flex flex-col overflow-hidden">
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-4xl p-4">
			<div class="flex h-16 items-center justify-between">
				<div class="flex flex-1 items-center">
					<img
						class="h-8 w-8"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="NeetCode"
					/>
					<div class="ml-10 flex flex-1 flex-row justify-between items-center leading-none">
						<h1 class="text-white text-2xl font-bold tracking-tight">NeetCode</h1>
						<div class="flex flex-col items-end">
              <p class="text-gray-300 text-sm font-bold tracking-tight">
                A place to practice your coding skills
              </p>
              <p class="text-gray-300 text-[12px] mt-1 font-bold tracking-tight">
                State stored locally
              </p>
            </div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<main class="flex flex-1 overflow-x-auto">
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>

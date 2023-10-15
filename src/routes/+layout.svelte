<script>
	import '../app.css';
	import logo from '../assets/images/logo.svg'
</script>

<div class="h-full flex flex-col overflow-hidden">
	<nav class="bg-gray-900">
		<div class="mx-auto max-w-4xl p-4">
			<div class="flex h-16 items-center justify-between">
				<div class="flex flex-1 items-center">
					<div class="flex flex-row items-center flex-1">
						<img
							class="h-6 w-6 animate-hue rotate-45 hover:scale-110 transition-all duration-500 ease-in-out"
							src={logo}
							alt="NeatCode"
						/>
						<h1 class="ml-5 sm:ml-10 text-white text-2xl font-bold tracking-tight">NeatCode</h1>
					</div>
					<div class="flex flex-row justify-between items-center leading-none">
						<div class="flex flex-col items-end">
							<p class="text-gray-300 text-sm font-bold tracking-tight hidden sm:block">
								A place to practice your coding skills
							</p>
							<p class="text-gray-300 text-[12px] mt-1 color-indigo-400 font-bold tracking-tight">
								Login
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<main class="flex flex-1 overflow-y-hidden">
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>

<script>
	// import LoginModal from '../components/LoginModal.svelte';
	import logo from '../assets/images/logo.svg';
	import { stats } from '../lib/stats';
	import DifficultyIndicator from '../components/DifficultyIndicator.svelte';
	import '../app.css';
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
					<div class="flex flex-col items-end">
						<div
							class="tooltip tooltip-bottom"
							data-tip={`${stats.completed} done of ${stats.total}`}
						>
							<p class="text-sm text-indigo-500">{stats.completedPercent}% Solved</p>
						</div>
						<div class="flex flex-row justify-between items-center mt-1 gap-1.5 sm:gap-2">
							<div
								class="flex flex-row justify-between items-center tooltip tooltip-bottom"
								data-tip={`${stats.easyCompleted} done of ${stats.easy}`}
							>
								<DifficultyIndicator difficulty="Easy" />
								<p class="ml-1 sm:ml-2 text-sm text-emerald-500">{stats.easyCompletedPercent}%</p>
							</div>
							<div
								class="flex flex-row justify-between items-center tooltip tooltip-bottom"
								data-tip={`${stats.mediumCompleted} done of ${stats.medium}`}
							>
								<DifficultyIndicator difficulty="Medium" />
								<p class="ml-1 sm:ml-2 text-sm text-yellow-500">
									{stats.mediumCompletedPercent}%
								</p>
							</div>
							<div
								class="flex flex-row justify-between items-center tooltip tooltip-bottom"
								data-tip={`${stats.hardCompleted} done of ${stats.hard}`}
							>
								<DifficultyIndicator difficulty="Hard" />
								<p class="ml-1 sm:ml-2 text-sm text-red-500">{stats.hardCompletedPercent}%</p>
							</div>
						</div>
						<!-- <button
							type="submit"
							onclick="login_modal.showModal()"
							class="rounded-md px-2 py-1.5 text-sm font-semibold text-indigo-500 transition-all hover:bg-gray-700 uppercase"
						>
							Sign in
						</button> -->
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- <LoginModal /> -->

	<main class="flex flex-1 overflow-y-hidden">
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>

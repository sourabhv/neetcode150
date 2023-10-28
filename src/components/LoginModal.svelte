<script>
	import logo from '../assets/images/logo.svg';
</script>

<dialog id="login_modal" class="modal">
	<div class="modal-box">
		<div class="flex flex-col items-stretch">
			<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<img
					class="h-12 w-12 animate-hue self-center rotate-45 hover:scale-110 transition-all duration-500 ease-in-out"
					src={logo}
					alt="NeatCode"
				/>
				<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
					Sign in to your account
				</h2>

				<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						class="space-y-6"
						action="#"
						method="POST"
						on:submit={(e) => {
							e.preventDefault();
							document.getElementById('login_modal')?.close?.();
						}}
					>
						<div>
							<label for="username" class="block text-sm font-medium leading-6 text-white">
								Username
							</label>
							<div class="mt-1">
								<input
									id="username"
									name="username"
									type="text"
									autocomplete="username"
									required
									class="block w-full rounded-md border-0 py-1.5 px-3 text-white ring-2 ring-inset ring-gray-800 bg-gray-900/[.4] placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
								/>
							</div>
						</div>

						<div>
							<label for="password" class="block text-sm font-medium leading-6 text-white">
								Password
							</label>
							<div class="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="block w-full rounded-md border-0 py-1.5 px-3 text-white ring-2 ring-inset ring-gray-800 bg-gray-900/[.4] placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
								/>
							</div>
						</div>

						<button
							type="submit"
							class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
						>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

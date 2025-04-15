import PanelInput from '@/app/_components/_ui/PanelInput'

function Settings() {
	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">Ustawienia</h1>
			<div className="w-full px-3 py-8 bg-transparent rounded-lg flex flex-col flex-wrap gap-7  md:flex-row md:flex-wrap   xl:gap-8 lg:py-14 md:justify-evenly 2xl:px-20 min-h-[800px]">
				<form className="bg-white h-[500px] w-[500px] rounded-lg border-slate-200 outline-none border shadow-stone-200 shadow-md px-3 py-8">
					<h2>Zmień hasło</h2>
					<div>
						<PanelInput label="Nowe hasło" type="password" name="password" placeholder="Wpisz nowe hasło" />
						<PanelInput
							label="Powtórz hasło"
							type="password_confirm"
							name="password_confirm"
							placeholder="Powtórz hasło"
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Settings

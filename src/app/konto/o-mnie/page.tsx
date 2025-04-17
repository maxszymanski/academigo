import SettingsBox from '@/app/_components/_panel/SettingsBox'
import Button from '@/app/_components/_ui/Button'
import CustomSelect from '@/app/_components/_ui/CustomSelect'
import PanelInput from '@/app/_components/_ui/PanelInput'
import { countryOptions } from '@/app/utils/countries'

const gender = ['Kobieta', 'Mężczyzna', 'Nieokreślona']

function page() {
	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">O mnie</h1>

			<SettingsBox>
				<form className="flex flex-col gap-5  w-full md:max-w-md">
					<PanelInput label="Imię i Nazwisko" name="fullName" placeholder="Podaj Imię i nazwisko" />
					<PanelInput label="Wiek" name="age" placeholder="Wprowadź swój wiek" />
					<CustomSelect
						optionsData={gender}
						label="Płeć"
						defaultOption="Wybierz płeć"
						name="gender"

						// formRegister={register('platform')}
						// error={errors?.platform || null}
						// message={errors?.platform?.message || null}
					/>
					<CustomSelect
						optionsData={countryOptions}
						label="Kraj"
						defaultOption="Polska"
						name="country"

						// formRegister={register('platform')}
						// error={errors?.platform || null}
						// message={errors?.platform?.message || null}
					/>
					<PanelInput label="Miasto" name="city" placeholder="Wpisz nazwę miasta" />
					<Button variant="submit">Zapisz</Button>
				</form>
			</SettingsBox>
		</section>
	)
}

export default page

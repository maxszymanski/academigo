'use client'

import { useState } from 'react'
import Checkbox from '../_ui/Checkbox'
import PanelInput from '../_ui/PanelInput'
import CustomSelect from '../_ui/CustomSelect'
import Button from '../_ui/Button'
import { FieldError, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addCourseSchema, AddCourseType } from '@/app/_lib/validators'
import Spinner from '../_ui/Spinner'

const difficultyLevels = ['Początkujący', 'Średniozaawansowany', 'Zaawansowany', 'Wszystkie poziomy']
const languages = ['Polski', 'Angielski', 'Angielski (polskie napisy)']

function AddCourseForm({ platforms }: { platforms: string[] }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<AddCourseType>({
		resolver: zodResolver(addCourseSchema),
	})
	// const [isPending, startTransition] = useTransition()
	const [isFree, setIsFree] = useState(false)

	// const onSubmit: SubmitHandler<AddCourseType> = data => {
	// 	startTransition(async () => {
	// 		// const formData = new FormData()
	// 		// formData.append('email', data.email)
	// 		// formData.append('password', data.password)
	// 		console.log(data)

	// 		// const result = await login(formData)
	// 		// if (result?.error) {
	// 		// 	setError(result.error)
	// 		// 	reset()
	// 		// }
	// 	})
	// }

	return (
		<form
			className="w-full px-3 py-8 border border-slate-200 bg-white rounded-lg flex flex-col flex-wrap gap-7 shadow-md shadow-stone-200 md:flex-row md:flex-wrap md:items-start   xl:gap-8 lg:py-14 md:justify-evenly 2xl:px-20"
			onSubmit={handleSubmit(() => {})}>
			<div className="w-full md:max-w-md flex flex-col gap-7 xl:gap-8">
				<PanelInput
					label="Tytuł "
					type="text"
					name="title"
					formRegister={register('title')}
					error={errors?.title || null}
					message={errors?.title?.message || null}
					placeholder="Wpisz tytuł kursu"
					required
				/>

				<PanelInput
					label="Krótki opis"
					type="text"
					name="short_description"
					placeholder="Wpisz krótki opis kursu"
					formRegister={register('short_description')}
					error={errors?.short_description || null}
					message={errors?.short_description?.message || null}
					required
				/>

				<CustomSelect
					optionsData={platforms}
					label="Nazwa platfromy"
					defaultOption="Wybierz nazwę platformy"
					name="platform"
					formRegister={register('platform')}
					error={errors?.platform || null}
					message={errors?.platform?.message || null}
				/>
				<PanelInput
					label="Link do kursu"
					type="text"
					name="course_link"
					placeholder="Link do kursu"
					formRegister={register('course_link')}
					error={errors?.course_link || null}
					message={errors?.course_link?.message || null}
					required
				/>
				<PanelInput
					label="Cena kursu"
					type="number"
					name="price"
					placeholder="Cena kursu"
					formRegister={register('price')}
					error={errors?.price || null}
					message={errors?.price?.message || null}
					min={0}
					disabled={isFree}
					defaultValue={isFree ? 0 : 0}>
					<Checkbox
						formRegister={register('free')}
						id="free"
						name="free"
						label="Darmowy kurs"
						onClick={() => setIsFree(is => !is)}
					/>
				</PanelInput>
				<PanelInput
					label="Czas trwania kursu"
					type="number"
					name="duration"
					formRegister={register('duration')}
					error={errors?.duration || null}
					message={errors?.duration?.message || null}
					placeholder="Czas trwania kursu w minutach"
					min={1}
				/>
			</div>
			<div className="w-full md:max-w-md flex flex-col gap-7 xl:gap-8">
				<CustomSelect
					optionsData={difficultyLevels}
					label="Poziom kursu"
					defaultOption="Wybierz poziom kursu"
					formRegister={register('level')}
					error={errors?.level || null}
					message={errors?.level?.message || null}
					name="level"
				/>
				<CustomSelect
					optionsData={languages}
					label="Język kursu"
					defaultOption="Wybierz język kursu"
					name="language"
					formRegister={register('language')}
					error={errors?.language || null}
					message={errors?.language?.message || null}
				/>

				<PanelInput
					label="Autor kursu"
					type="text"
					name="author_name"
					placeholder="Imię i nazwisko"
					formRegister={register('author_name')}
					error={errors?.author_name || null}
					message={errors?.author_name?.message || null}
				/>
				<PanelInput
					label="Link do profilu autora"
					type="text"
					name="author_link"
					placeholder="Link do profilu"
					formRegister={register('author_link')}
					error={errors?.author_link || null}
					message={errors?.author_link?.message || null}
				/>
				<PanelInput
					label="Obraz kursu"
					type="file"
					name="picture"
					placeholder="Wybierz obraz kursu"
					formRegister={register('picture')}
					error={errors?.picture as FieldError | null | undefined}
					message={typeof errors?.picture?.message === 'string' ? errors.picture.message : null}
					required
				/>
			</div>
			<PanelInput
				textArea
				label="Opis kursu"
				name="long_description"
				placeholder="Wprowadź opis kursu"
				formRegister={register('long_description')}
				error={errors?.long_description || null}
				message={errors?.long_description?.message || null}
				required
			/>
			<Button>
				{isSubmitting ? 'Dodawanie' : 'Dodaj kurs'}
				{isSubmitting && <Spinner restClass="ml-6 absolute right-3 sm:right-8" />}
			</Button>
		</form>
	)
}

export default AddCourseForm

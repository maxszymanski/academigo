'use client'

import { useState, useTransition } from 'react'
import Checkbox from '../_ui/Checkbox'
import PanelInput from '../_ui/PanelInput'
import CustomSelect from '../_ui/CustomSelect'
import Button from '../_ui/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const difficultyLevels = ['Początkujący', 'Średniozaawansowany', 'Zaawansowany', 'Wszystkie poziomy']
const languages = ['Polski', 'Angielski', 'Angielski (polskie napisy)']

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

interface AddCourseType {
	title: string
	short_description: string
	long_description: string
	platform: string
	price: string | null
	free: boolean
	duration: string
	level: string
	language: string
	course_link: string
	author_name: string | null
	author_link: string | null
	picture: FileList
}
const schema = z.object({
	title: z
		.string()
		.min(5, 'Tytuł kursu musi mieć co najmniej 5 znaków')
		.max(100, 'Tytuł kursu może mieć maksymalnie 100 znaków'),
	short_description: z
		.string()
		.min(10, 'Krótki opis musi mieć co najmniej 10 znaków')
		.max(255, 'Krótki opis może mieć maksymalnie 255 znaków'),
	long_description: z
		.string()
		.min(50, 'Opis kursu musi mieć co najmniej 50 znaków')
		.max(5000, 'Opis kursu może mieć maksymalnie 5000 znaków'),
	platform: z.string().nonempty('Nazwa platformy jest wymagana'),
	price: z.string().nullable(),
	free: z.boolean(),
	duration: z.string().min(1, 'Czas trwania kursu musi być większy niż 0 minut'),
	level: z.string().nonempty('Poziom kursu jest wymagany'),
	language: z.string().nonempty('Język kursu jest wymagany'),
	course_link: z.string().url('Link do kursu musi być poprawnym adresem URL'),
	author_name: z.string().nullable(),
	author_link: z.string().nullable(),
	picture: z
		.any()
		.refine((files: FileList) => files?.length > 0, {
			message: 'Plik jest wymagany',
		})
		.refine((files: FileList) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type), {
			message: 'Dozwolone są tylko pliki graficzne',
		})
		.refine((files: FileList) => files?.[0]?.size < MAX_FILE_SIZE, {
			message: 'Plik musi być mniejszy niż 2MB',
		}),
})

function AddCourseForm({ platforms }: { platforms: string[] }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddCourseType>({
		resolver: zodResolver(schema),
	})
	const [isPending, startTransition] = useTransition()
	const [isFree, setIsFree] = useState(false)

	const onSubmit: SubmitHandler<AddCourseType> = data => {
		startTransition(async () => {
			// const formData = new FormData()
			// formData.append('email', data.email)
			// formData.append('password', data.password)
			console.log(data)

			// const result = await login(formData)
			// if (result?.error) {
			// 	setError(result.error)
			// 	reset()
			// }
		})
	}

	return (
		<form
			className="w-full px-3 py-8 border border-slate-200 bg-white rounded-lg flex flex-col flex-wrap gap-7 shadow-md shadow-stone-200 md:flex-row md:flex-wrap md:items-start   xl:gap-8 lg:py-14 md:justify-evenly 2xl:px-20"
			onSubmit={handleSubmit(onSubmit)}>
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
					error={errors?.picture || null}
					message={errors?.picture?.message || null}
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
			<Button> Dodaj kurs </Button>
		</form>
	)
}

export default AddCourseForm

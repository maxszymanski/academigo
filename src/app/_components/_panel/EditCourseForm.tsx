'use client'

import { useEffect, useState } from 'react'
import Checkbox from '../_ui/Checkbox'
import PanelInput from '../_ui/PanelInput'
import FileInput from '../_ui/FileInput'
import CustomSelect from '../_ui/CustomSelect'
import Button from '../_ui/Button'
import { FieldError, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ACCEPTED_IMAGE_TYPES, addCourseSchema, AddCourseType, MAX_FILE_SIZE } from '@/app/_lib/validators'
import Spinner from '../_ui/Spinner'
import { Category, SubCat } from '@/app/_types/types'
import { getSpecializationsOnClient, getSubCategoriesOnClient } from '@/app/_lib/client-service'
import { createCourse } from '@/app/_actions/mutations'
import LoadingPortal from '../_ui/LoadingPortal'

const difficultyLevels = ['Początkujący', 'Średniozaawansowany', 'Zaawansowany', 'Wszystkie poziomy']
const languages = ['Polski', 'Angielski', 'Angielski (polskie napisy)']

function EditCourseForm({ platforms, categories }: { platforms: string[]; categories: Category[] }) {
	const {
		register,
		handleSubmit,
		control,
		setError,
		clearErrors,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<AddCourseType>({
		resolver: zodResolver(addCourseSchema),
	})
	const selectedCategory = useWatch({ control, name: 'categories' })
	const selectedSubCategory = useWatch({ control, name: 'sub_categories' })

	const [image, setImage] = useState<File | null>(null)
	const [isFree, setIsFree] = useState(false)
	const [serverError, setServerError] = useState<string | null>(null)

	const [subCategories, setSubCategories] = useState<SubCat[] | []>([])
	const [specializations, setSpecializations] = useState<SubCat[] | []>([])

	useEffect(() => {
		setValue('sub_categories', '')
		setValue('specialization', '')
	}, [selectedCategory, setValue])

	useEffect(() => {
		if (!selectedCategory) return

		const fetchSubCategories = async () => {
			setValue('specialization', '')

			const subCategoryList = await getSubCategoriesOnClient(selectedCategory)
			setSubCategories(subCategoryList)
		}

		fetchSubCategories()
	}, [selectedCategory, selectedSubCategory, setValue])

	useEffect(() => {
		if (!selectedSubCategory) return

		const fetchSpecializations = async () => {
			const specializationsList = await getSpecializationsOnClient(selectedCategory, selectedSubCategory)

			setSpecializations(specializationsList)
			setValue('specialization', '')
		}

		fetchSpecializations()
	}, [selectedSubCategory, selectedCategory, setValue])

	const onSubmit: SubmitHandler<AddCourseType> = async data => {
		if (!image) {
			setError('picture', {
				type: 'manual',
				message: 'Plik jest wymagany',
			})
			return
		}

		const isValidType = ACCEPTED_IMAGE_TYPES.includes(image.type)

		const isValidSize = image.size < MAX_FILE_SIZE

		if (!isValidType) {
			setError('picture', {
				type: 'manual',
				message: 'Nieprawidłowy format pliku',
			})
			return
		}

		if (!isValidSize) {
			setError('picture', {
				type: 'manual',
				message: 'Plik musi być mniejszy niż 1MB',
			})
			return
		}

		if (image && isValidType && isValidSize) {
			clearErrors('picture')
			data.picture = image
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { picture, ...restData } = data

		const formData = new FormData()

		formData.append('data', JSON.stringify(restData))
		formData.append('picture', image)

		const result = await createCourse(formData)

		if (result?.error) {
			setServerError(result.error)
		}
	}

	return (
		<>
			{' '}
			{isSubmitting && <LoadingPortal information="Dodawanie kursu" />}
			<form
				className="w-full px-3 py-8 border border-slate-200 bg-white rounded-lg flex flex-col flex-wrap gap-7 shadow-md shadow-stone-200 md:flex-row md:flex-wrap md:items-end   xl:gap-8 lg:py-14 md:justify-evenly 2xl:px-20"
				onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full md:max-w-md flex flex-col gap-7 xl:gap-8">
					<FileInput
						name="picture"
						image={image}
						setImage={setImage}
						control={control}
						setError={setError}
						clearErrors={clearErrors}
						error={errors?.picture as FieldError | null}
						message={typeof errors?.picture?.message === 'string' ? errors.picture.message : null}
					/>

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
						defaultValue={isFree ? '0' : undefined}
						required>
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
						type="text"
						name="duration"
						formRegister={register('duration')}
						error={errors?.duration || null}
						message={errors?.duration?.message || null}
						placeholder="Czas trwania kursu np. 1h 10min"
						min={1}
						required
					/>
				</div>
				<div className="w-full md:max-w-md flex flex-col gap-7 xl:gap-8">
					<CustomSelect
						categoriesData={categories}
						label="Kategoria kursu"
						defaultOption="Wybierz kategorię kursu"
						formRegister={register('categories')}
						error={errors?.categories || null}
						message={errors?.categories?.message || null}
						name="categories"
					/>
					<CustomSelect
						subCategoriesData={subCategories}
						label="Podkategoria kursu"
						defaultOption="Wybierz podkategorię kursu"
						formRegister={register('sub_categories')}
						error={errors?.sub_categories || null}
						message={errors?.sub_categories?.message || null}
						name="sub_categories"
						disabled={subCategories.length === 0}
					/>
					<CustomSelect
						subCategoriesData={specializations}
						label="Specializacja kursu"
						defaultOption="Wybierz specializacje kursu"
						formRegister={register('specialization')}
						error={errors?.specialization || null}
						message={errors?.specialization?.message || null}
						name="specialization"
						disabled={specializations.length === 0}
					/>
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
				<div className="flex flex-col gap-7 items-center justify-center w-full xl:pt-4">
					<Button variant="submit" restClass="relative" disabled={isSubmitting}>
						{isSubmitting ? 'Dodawanie' : 'Dodaj kurs'}
						{isSubmitting && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
					</Button>
					{serverError && <span className="text-sm text-red-500 mt-2 pl-1 block">{serverError}</span>}
				</div>
			</form>
		</>
	)
}

export default EditCourseForm

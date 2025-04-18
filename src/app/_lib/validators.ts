import { z } from 'zod'

export const MAX_FILE_SIZE = 2000000
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const loginSchema = z.object({
	email: z.string().nonempty('Email jest wymagany').email('Nieprawidłowy email'),
	password: z.string().nonempty('Hasło jest wymagane').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
})

export const signUpSchema = z
	.object({
		email: z.string().nonempty('Email nie może być pusty').email('Nieprawidłowy email'),
		username: z
			.string()
			.nonempty('Nazwa użytkownika nie może być pusta')
			.min(3, 'Nazwa użytkownika musi mieć co najmniej 3 znaki')
			.max(20, 'Nazwa użytkownika może mieć maksymalnie 20 znaków'),
		password: z.string().nonempty('Hasło nie może być puste').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
		confirmPassword: z
			.string()
			.nonempty('Potwierdzenie hasła nie może być puste')
			.min(8, 'Hasło musi mieć co najmniej 8 znaków'),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Hasła muszą być takie same',
		path: ['confirmPassword'],
	})

export const pictureSchemaServer = z.union([
	z
		.instanceof(File)
		.refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
			message: 'Nieprawidłowy format pliku',
		})
		.refine(file => file.size < MAX_FILE_SIZE, {
			message: 'Plik musi być mniejszy niż 2MB',
		}),
	z.string().url('Nieprawidłowy adres URL'),
])

export const avatarSchema = z.object({
	avatar: z.any().nullable(),
})
export const pictureSchema = z.object({
	picture: z.any().nullable(),
})

export const addCourseSchema = z
	.object({
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
		platform: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać platformę',
		}),
		price: z.string().optional(),
		free: z.boolean(),
		duration: z.string().min(1, 'Prosze wpisać czas trwania kursu'),
		level: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać poziom kursu',
		}),
		categories: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać kategorię',
		}),
		sub_categories: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać podkategorię',
		}),
		specialization: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać specializację',
		}),
		language: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać język kursu',
		}),
		course_link: z.string().url('Link do kursu musi być poprawnym adresem URL'),
		author_name: z.string().nullable(),
		author_link: z.string().nullable(),
		picture: z.any().nullable(),
	})
	.refine(data => data.free || (data.price && data.price.length > 0), {
		message: 'Cena kursu jest wymagana, jeśli kurs nie jest darmowy',
		path: ['price'],
	})
export const addCourseSchemaServer = z
	.object({
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
		platform: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać platformę',
		}),
		price: z.string().optional(),
		free: z.boolean(),
		duration: z.string().min(1, 'Prosze wpisać czas trwania kursu'),
		level: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać poziom kursu',
		}),
		categories: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać kategorię',
		}),
		sub_categories: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać podkategorię',
		}),
		specialization: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać specializację',
		}),
		language: z.string().refine(value => value !== '', {
			message: 'Proszę wybrać język kursu',
		}),
		course_link: z.string().url('Link do kursu musi być poprawnym adresem URL'),
		author_name: z.string().nullable(),
		author_link: z.string().nullable(),
		picture: pictureSchemaServer,
	})
	.refine(data => data.free || (data.price && data.price.length > 0), {
		message: 'Cena kursu jest wymagana, jeśli kurs nie jest darmowy',
		path: ['price'],
	})

export const updatePersonalDataSchema = z.object({
	username: z
		.string()
		.nonempty('Nazwa użytkownika nie może być pusta')
		.min(3, 'Nazwa użytkownika musi mieć co najmniej 3 znaki')
		.max(20, 'Nazwa użytkownika może mieć maksymalnie 20 znaków'),
	gender: z.string().nullable(),
	country: z.string().nonempty('Prosze wybrać kraj'),
	city: z.string().nullable(),
	age: z.string().nullable(),
})

export type LoginType = z.infer<typeof loginSchema>
export type AddCourseType = z.infer<typeof addCourseSchema>
export type SignUpType = z.infer<typeof signUpSchema>
export type UpdatePersonalDataType = z.infer<typeof updatePersonalDataSchema>
export type pictureType = z.infer<typeof pictureSchema>
export type avatarType = z.infer<typeof avatarSchema>

import { z } from 'zod'

const MAX_FILE_SIZE = 2000000
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
		gender: z
			.enum(['kobieta', 'mężczyzna'])
			.nullable()
			.refine(value => value !== null, {
				message: 'Proszę wybrać płeć',
			}),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Hasła muszą być takie same',
		path: ['confirmPassword'],
	})

export const addCourseSchema = z.object({
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
	price: z.string().min(1, 'Prosze podać cenę kursu'),
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
	picture: z
		.any()
		.refine((files: FileList | undefined) => !files || files?.length > 0, {
			message: 'Plik jest wymagany',
		})
		.refine(
			(files: FileList | undefined) => !files || (files?.[0] && ACCEPTED_IMAGE_TYPES.includes(files[0].type)),
			{
				message: 'Nieprawidłowy format pliku',
			}
		)
		.refine((files: FileList | undefined) => !files || files?.[0]?.size < MAX_FILE_SIZE, {
			message: 'Plik musi być mniejszy niż 2MB',
		}),
})
export const addCourseSchemaServer = z.object({
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
	price: z.string().min(1, 'Prosze podać cenę kursu'),
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
	picture: z
		.instanceof(File)
		.refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
			message: 'Nieprawidłowy format pliku',
		})
		.refine(file => file.size < MAX_FILE_SIZE, {
			message: 'Plik musi być mniejszy niż 2MB',
		}),
})

export type LoginType = z.infer<typeof loginSchema>
export type AddCourseType = z.infer<typeof addCourseSchema>
export type SignUpType = z.infer<typeof signUpSchema>

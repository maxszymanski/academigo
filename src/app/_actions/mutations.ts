'use server'

import { addCourseSchemaServer } from '../_lib/validators'
import { createClient } from '../utils/supabase/server'

export async function createCourse(data: FormData) {
	const result = addCourseSchemaServer.safeParse({
		title: data.get('title') as string,
		short_description: data.get('short_description') as string,
		long_description: data.get('long_description') as string,
		platform: data.get('platform') as string,
		price: data.get('price') as string,
		free: data.get('free') === 'on',
		duration: data.get('duration') as string,
		level: data.get('level') as string,
		categories: data.get('categories') as string,
		sub_categories: data.get('sub_categories') as string,
		specialization: data.get('specialization') as string,
		picture: data.get('picture') as File,
		course_link: data.get('course_link') as string,
		language: data.get('language') as string,
		author_name: data.get('author_name') as string,
		author_link: data.get('author_link') as string,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas dodawania kursu, proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}
	const fileName = `picture-${authData.user.id}-${Math.random()}`

	console.log(fileName)

	const { error: storageError } = await supabase.storage.from('pictures').upload(fileName, result.data.picture, {
		cacheControl: '3600',
		upsert: false,
	})

	if (storageError) throw new Error(storageError.message)

	const pictureLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/pictures/${fileName}`
	// const { data: courseData, error } = await supabase.from('courses').insert(data)

	// if (error) {
	// 	throw new Error('Błąd podczas dodawania kursu')
	// }

	// return courseData
}

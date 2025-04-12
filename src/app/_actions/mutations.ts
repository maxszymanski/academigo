'use server'

import { addCourseSchemaServer } from '../_lib/validators'
import { createClient } from '../utils/supabase/server'
import { getCourseById } from '../_lib/data-service'
import { revalidatePath } from 'next/cache'

export async function createCourse(data: FormData) {
	const parsedData = JSON.parse(data.get('data') as string)
	const picture = data.get('picture') as File

	const result = addCourseSchemaServer.safeParse({
		...parsedData,
		picture,
	})

	if (!result.success) {
		console.log(result.error.format())
		return { error: 'Wystąpił problem podczas dodawania kursu, proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}
	const fileName = `picture-${authData.user.id}-${Math.random()}`

	const { error: storageError } = await supabase.storage.from('pictures').upload(fileName, result.data.picture, {
		cacheControl: '3600',
		upsert: false,
	})

	if (storageError) throw new Error(storageError.message)

	const pictureLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/pictures/${fileName}`
	const { error } = await supabase.from('courses').insert({
		...result.data,
		picture: pictureLink,
		created_by: authData.user.id,
	})

	if (error) {
		return { error: 'Wystąpił problem podczas dodawania kursu, proszę spróbować ponownie później.' }
	}
	revalidatePath('/konto/moje-kursy')
}

export async function updateCourse(data: FormData, courseID: string | number) {
	const parsedData = JSON.parse(data.get('data') as string)
	const picture = data.get('picture') as File | string

	const result = addCourseSchemaServer.safeParse({
		...parsedData,
		picture,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania kursu, proszę spróbować ponownie później.' }
	}

	const course = await getCourseById(courseID)

	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}

	if (authData.user.id != course.created_by) {
		return { error: 'Użytkownik nie posiada uprawnień do edycji tego kursu!' }
	}

	let pictureLink

	if (typeof result.data.picture === 'string') {
		pictureLink = result.data.picture
	} else {
		const fileName = `picture-${authData.user.id}-${Math.random()}`
		const { error: storageError } = await supabase.storage.from('pictures').upload(fileName, result.data.picture, {
			cacheControl: '3600',
			upsert: false,
		})

		if (storageError) {
			throw new Error(storageError.message)
		} else {
			pictureLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/pictures/${fileName}`
		}
	}

	const { error } = await supabase
		.from('courses')
		.update({
			...result.data,
			picture: pictureLink,
		})
		.eq('id', courseID)
		.eq('created_by', authData.user.id)

	if (error) {
		return { error: 'Wystąpił problem podczas edytowania kursu, proszę spróbować ponownie później.' }
	}

	revalidatePath(`/konto/edytuj-kurs/${courseID}`)
	revalidatePath(`/konto/moje-kursy`)
	// redirect('/konto/moje-kursy')
}

export async function deleteCourse(courseID: string) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Użytkownik nie ma uprawnień do usunięcia tego kursu' }
	}

	const { error } = await supabase.from('courses').delete().eq('id', courseID).eq('created_by', authData.user.id)

	if (error) {
		if (error) {
			return { error: 'Wystąpił problem przy usuwaniu kursu' }
		}
	}

	revalidatePath(`/konto/edytuj-kurs/${courseID}`)
	revalidatePath(`/konto/moje-kursy`)
}

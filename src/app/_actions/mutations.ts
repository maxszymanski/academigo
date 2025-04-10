'use server'

import { redirect } from 'next/navigation'
import { addCourseSchemaServer } from '../_lib/validators'
import { createClient } from '../utils/supabase/server'

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

	redirect('/konto')
}

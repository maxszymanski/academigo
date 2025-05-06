'use server'

import {
	addCourseSchemaServer,
	updatePersonalDataSchema,
	UpdatePersonalDataType,
	pictureSchemaServer,
	UpdateSocialType,
	UpdateRoleType,
	updateSocialSchema,
	updateRoleSchema,
	UpdateUserDescription,
	updateUserDescriptionSchema,
} from '../_lib/validators'
import { createClient } from '../utils/supabase/server'
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
	const fileName = `picture-${authData.user.id}`

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
	revalidatePath('/konto/moje-kursy/dodane')
	revalidatePath(`/profil/${authData.user.id}`)
}

export async function updateCourse(data: FormData, courseID: string) {
	const parsedData = JSON.parse(data.get('data') as string)
	const picture = data.get('picture') as File | string

	const result = addCourseSchemaServer.safeParse({
		...parsedData,
		picture,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania kursu, proszę spróbować ponownie później.' }
	}
	const timestamp = Date.now()
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}

	let pictureLink

	if (typeof result.data.picture === 'string') {
		pictureLink = result.data.picture
	} else {
		const fileName = `picture-${authData.user.id}`
		const { error: storageError } = await supabase.storage.from('pictures').upload(fileName, result.data.picture, {
			cacheControl: '3600',
			upsert: true,
		})

		if (storageError) {
			throw new Error(storageError.message)
		} else {
			pictureLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/pictures/${fileName}?t=${timestamp}`
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

	revalidatePath(`/konto/kursy/${courseID}`)
	revalidatePath(`/konto/edytuj-kurs/${courseID}`)
	revalidatePath(`/konto/moje-kursy/dodane`)
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
	revalidatePath(`/konto/kursy/${courseID}`)
	revalidatePath(`/konto/edytuj-kurs/${courseID}`)
	revalidatePath(`/konto/moje-kursy`)
}

export async function UpdatePersonalUserData(updateData: UpdatePersonalDataType) {
	const result = updatePersonalDataSchema.safeParse({
		...updateData,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania , proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()
	const { data: authData, error: authError } = await supabase.auth.getUser()

	if (authError) return { error: 'Użytkownik nie ma uprawnień do edytowania danych' }

	const { error } = await supabase
		.from('users')
		.update({
			...result.data,
		})
		.eq('id', authData.user.id)

	if (error) {
		if (error) {
			return { error: 'Wystąpił problem podczas edycji danych' }
		}
	}

	revalidatePath('/konto/')
	revalidatePath('/konto/o-mnie')
	revalidatePath(`/profil/${authData.user.id}`)
}

export async function UpdateRole(updateData: UpdateRoleType) {
	const result = updateRoleSchema.safeParse({
		...updateData,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania , proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()
	const { data: authData, error: authError } = await supabase.auth.getUser()

	if (authError) return { error: 'Użytkownik nie ma uprawnień do edytowania danych' }

	const { error } = await supabase
		.from('users')
		.update({
			...result.data,
		})
		.eq('id', authData.user.id)

	if (error) {
		if (error) {
			return { error: 'Wystąpił problem podczas edycji danych' }
		}
	}

	revalidatePath('/konto/o-mnie')
	revalidatePath(`/profil/${authData.user.id}`)
}

export async function UpdateSocials(updateData: UpdateSocialType) {
	const result = updateSocialSchema.safeParse({
		...updateData,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania , proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()
	const { data: authData, error: authError } = await supabase.auth.getUser()

	if (authError) return { error: 'Użytkownik nie ma uprawnień do edytowania danych' }

	const { error } = await supabase
		.from('users')
		.update({
			...result.data,
		})
		.eq('id', authData.user.id)

	if (error) {
		return { error: 'Wystąpił problem podczas edycji danych' }
	}

	revalidatePath('/konto/o-mnie')
	revalidatePath(`/profil/${authData.user.id}`)
}

export async function UpdateDescription(updateData: UpdateUserDescription) {
	const result = updateUserDescriptionSchema.safeParse({
		...updateData,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania , proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()
	const { data: authData, error: authError } = await supabase.auth.getUser()

	if (authError) return { error: 'Użytkownik nie ma uprawnień do edytowania danych' }

	const { error } = await supabase
		.from('users')
		.update({
			...result.data,
		})
		.eq('id', authData.user.id)

	if (error) {
		return { error: 'Wystąpił problem podczas edycji danych' }
	}

	revalidatePath('/konto/o-mnie')
	revalidatePath(`/profil/${authData.user.id}`)
}

export async function updateAvatar(data: FormData) {
	const avatar = data.get('avatar') as File | string

	const result = pictureSchemaServer.safeParse(avatar)

	if (!result.success) {
		return { error: 'Wystąpił problem podczas edytowania zdjęcia, proszę spróbować ponownie później.' }
	}
	const timestamp = Date.now()
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}

	let avatarLink

	if (typeof result.data === 'string') {
		avatarLink = result.data
	} else {
		const fileName = `avatar-${authData.user.id}`
		const { error: storageError } = await supabase.storage.from('avatars').upload(fileName, result.data, {
			cacheControl: '3600',
			upsert: true,
		})

		if (storageError) {
			throw new Error(storageError.message)
		} else {
			avatarLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/avatars/${fileName}?t=${timestamp}`
		}
	}

	const { error } = await supabase.from('users').update({ avatar: avatarLink }).eq('id', authData.user.id)

	if (error) {
		return { error: 'Wystąpił problem podczas edytowania avataru, proszę spróbować ponownie później.' }
	}

	revalidatePath(`/konto/`)
	revalidatePath(`/konto/o-mnie`)
	revalidatePath(`/profil/${authData.user.id}`)
}

export async function deleteAvatar() {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}
	const { error } = await supabase.from('users').update({ avatar: null }).eq('id', authData.user.id)
	if (error) {
		return { error: 'Wystąpił problem podczas usuwania zdjęcia, proszę spróbować ponownie później.' }
	}

	revalidatePath(`/konto/`)
	revalidatePath(`/konto/o-mnie`)
	revalidatePath(`/profil/${authData.user.id}`)
}
export async function likeCourse(courseId: string) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()

	if (authError) {
		return { error: 'Dostępne tylko dla zalogowanych użytkowników' }
	}

	const { error } = await supabase
		.from('user_likes')
		.insert([{ user_id: authData.user.id, course_id: courseId }])
		.select()

	if (error) {
		return
	}

	revalidatePath(`/kursy/${courseId}`)
	revalidatePath(`/konto/`)
	revalidatePath(`/konto/moje-kursy/polubione`)
}
export async function unlikeCourse(courseId: string) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()

	if (authError) {
		return { error: 'Dostępne tylko dla zalogowanych użytkowników' }
	}

	const { error } = await supabase
		.from('user_likes')
		.delete()
		.eq('course_id', courseId)
		.eq('user_id', authData.user.id)

	if (error) {
		return
	}

	revalidatePath(`/kursy/${courseId}`)
	revalidatePath(`/konto/`)
	revalidatePath(`/konto/moje-kursy/polubione`)
}

export async function saveCourse(courseId: string) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Dostępne tylko dla zalogowanych użytkowników' }
	}
	const { error } = await supabase
		.from('user_saved_courses')
		.insert([{ user_id: authData.user.id, course_id: courseId }])
		.select()

	if (error) {
		return
	}

	revalidatePath(`/kursy/${courseId}`)
	revalidatePath(`/konto/`)
	revalidatePath(`/konto/moje-kursy/zapisane`)
}
export async function unSaveCourse(courseId: string) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Dostępne tylko dla zalogowanych użytkowników' }
	}
	const { error } = await supabase
		.from('user_saved_courses')
		.delete()
		.eq('user_id', authData.user.id)
		.eq('course_id', courseId)

	if (error) {
		return
	}

	revalidatePath(`/kursy/${courseId}`)
	revalidatePath(`/konto/`)
	revalidatePath(`/konto/moje-kursy/zapisane`)
}

export async function rateCourse(courseId: string, rating: number, update: boolean) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Dostępne tylko dla zalogowanych użytkowników' }
	}

	if (update) {
		const { error: updateError } = await supabase
			.from('user_ratings')
			.update({ rating: rating })
			.eq('user_id', authData.user.id)
			.eq('course_id', courseId)

		if (updateError) {
			return { error: 'Błąd podczas zmiany oceny kursu. Proszę spróbowac ponownie' }
		}
	} else {
		const { error: insertError } = await supabase
			.from('user_ratings')
			.insert([{ user_id: authData.user.id, course_id: courseId, rating: rating }])
			.select()

		if (insertError) {
			return { error: 'Błąd podczas zmiany ocenianiy kursu. Proszę spróbowac ponownie' }
		}
	}

	revalidatePath(`/kursy/${courseId}`)
	revalidatePath(`/konto/`)
	revalidatePath(`/konto/moje-kursy/ocenione`)
}

export async function sendFeedback(message: string, courseID: string | null, userID: string | null) {
	const supabase = await createClient()

	const { error } = await supabase
		.from('feedback')
		.insert([{ user_id: userID || null, course_id: courseID, message: message }])
		.select()

	if (error) {
		return { error: 'Wystąpił problem podczas wysyłania zgłoszenia, proszę spróbować ponownie później.' }
	}
}
export async function reportUser(message: string, reportedUser: string | null) {
	const supabase = await createClient()

	let userID = null

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) {
		userID = null
	}
	if (authData.user) {
		userID = authData.user.id
	}
	if (authData.user && authData.user.id === reportedUser) {
		return { error: 'Miło, że jesteś wobec siebie tak surowy, ale nie możesz zgłosić samego siebie! 😅' }
	}

	const { error } = await supabase
		.from('users_feedback')
		.insert([{ user_id: userID, reported_user: reportedUser, message }])
		.select()

	if (error) {
		return { error: 'Wystąpił problem podczas wysyłania zgłoszenia, proszę spróbować ponownie później.' }
	}
}

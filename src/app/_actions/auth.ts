'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../utils/supabase/server'
import { changePasswordSchema, ChangePasswordType, loginSchema, resetSchema, signUpSchema } from '../_lib/validators'
import toast from 'react-hot-toast'

export async function login(formData: FormData) {
	const result = loginSchema.safeParse({
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	})

	if (!result.success) {
		return { error: 'Niepoprawne dane logowania' }
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: result.data.email.toLowerCase(),
		password: result.data.password,
	})

	if (error) {
		return { error: 'Niepoprawne dane logowania' }
	}

	revalidatePath('/konto')
	redirect('/konto')
}
export async function resetPassword(formData: FormData) {
	const result = resetSchema.safeParse({
		email: formData.get('email') as string,
	})

	if (!result.success) {
		return { error: 'Niepoprawny adres email' }
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.resetPasswordForEmail(result.data.email.toLocaleLowerCase())

	if (error) {
		return { error: 'Niepoprawny adres email' }
	}
}
export async function loginWithGoogle() {
	const supabase = await createClient()

	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: 'http://localhost:3000/auth/callback',
			queryParams: {
				access_type: 'offline',
				prompt: 'consent',
			},
		},
	})

	if (data.url) {
		redirect(data.url)
	}
}

export async function signup(formData: FormData) {
	const result = signUpSchema.safeParse({
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		confirmPassword: formData.get('confirmPassword') as string,
		username: formData.get('username') as string,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas rejestracji, proszę spróbować ponownie.' }
	}

	const supabase = await createClient()

	const { data: existingUser } = await supabase.from('users').select('id').eq('email', result.data.email).single()

	if (existingUser) {
		return {
			error: 'Ten adres e-mail jest już zarejestrowany w naszym systemie. Spróbuj się zalogować lub użyj innego adresu.',
		}
	}

	const { data: authData, error } = await supabase.auth.signUp({
		email: result.data.email.toLowerCase(),
		password: result.data.password,
	})

	if (error) {
		return { error: 'Wystąpił problem podczas rejestracji, proszę spróbować ponownie.' }
	}

	const userId = authData.user?.id

	if (userId) {
		const { error: createError } = await supabase.from('users').insert({
			id: userId,
			email: result.data.email,
			username: result.data.username,
			role: 'Student',
			country: 'Polska',
		})
		if (createError) {
			return { error: 'Wystąpił problem podczas rejestracji, proszę spróbować ponownie.' }
		}
	}
}
export async function logout() {
	const supabase = await createClient()

	const { error } = await supabase.auth.signOut()
	if (error) throw new Error(error.message)

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function getRankUser(limit: number, filter: string) {
	const supabase = await createClient()

	const { data: allUsers, error } = await supabase
		.from('full_user_data')
		.select(`id, username, created_courses, points, avatar, short_description`)
		.order(filter, { ascending: false })
		.range(0, limit)

	if (error) {
		toast.error('Błąd pobierania danych')
	}

	const { count, error: countError } = await supabase
		.from('full_user_data')
		.select('id', { count: 'exact', head: true })

	if (countError) {
		toast.error('Błąd pobierania danych')
	}

	return { allUsers, count }
}

export async function getTopUsersByCreatedCourses(rangeStart?: number, rangeEnd?: number) {
	const supabase = await createClient()

	let query = supabase
		.from('full_user_data')
		.select('id, username, created_courses, avatar, short_description')
		.order('created_courses', { ascending: false })

	if (rangeStart !== undefined && rangeEnd !== undefined) {
		query = query.range(rangeStart, rangeEnd)
	}

	const { data: allUsers, error } = await query
	if (error) {
		throw new Error(error.message)
	}
	return allUsers
}

export async function getTopUsersByPoints(rangeStart?: number, rangeEnd?: number) {
	const supabase = await createClient()

	let query = supabase
		.from('full_user_data')
		.select('id, username, points, avatar, short_description')
		.order('points', { ascending: false })

	if (rangeStart !== undefined && rangeEnd !== undefined) {
		query = query.range(rangeStart, rangeEnd)
	}

	const { data: allUsers, error } = await query

	if (error) {
		throw new Error(error.message)
	}
	return allUsers
}

export async function getUserAccount() {
	const supabase = await createClient()

	const { data, error } = await supabase.auth.getUser()

	if (error) {
		throw new Error(error.message)
	}

	return data.user
}
export async function getCurrentUser() {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	const userEmail = authData.user?.email

	const { data: user, error } = await supabase.from('full_user_data').select('*').eq('email', userEmail).single()

	if (error) {
		return { error: 'Wystąpił problem podczas pobierania danych' }
	}

	return user
}

export async function updatePassword(updateData: ChangePasswordType) {
	const result = changePasswordSchema.safeParse({
		...updateData,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas aktualizacji hasła , proszę spróbować ponownie później.' }
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.updateUser({ password: result.data?.password })

	if (error) {
		return { error: 'Wystąpił problem podczas edycjowania danych' }
	}
}

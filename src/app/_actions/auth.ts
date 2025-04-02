// import supabase from '../_lib/supabase'
// export const signInWithGoogle = async () => {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//     })
//     return { data, error }
// }

// export const signInWithEmail = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//     })
//     if (error) throw new Error(error.message)
//     return { data, error }
// }

// export const signUpWithEmail = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//     })
//     if (error) throw new Error(error.message)
//     return { data, error }
// }

// export const signOut = async () => {
//     const { error } = await supabase.auth.signOut()
//     if (error) throw new Error(error.message)
// }

// export const getUser = async () => {
//     const { data: session } = await supabase.auth.getSession()
//     if (!session.session) return null

//     const { data, error } = await supabase.auth.getUser()
//     if (error) throw new Error(error.message)
//     return data?.user
// }
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../utils/supabase/server'

export async function login(formData: FormData) {
	const supabase = await createClient()

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signInWithPassword(data)

	if (error) {
		return { error: 'Niepoprawne dane logowania' }
	}

	revalidatePath('/konto/panel')
	redirect('/konto/panel')
}
export async function loginWithGoogle() {
	const supabase = await createClient()


	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
		  redirectTo: 'https://staekcbwplnzsgcpuggb.supabase.co/auth/v1/callback',
		 
		},
	  })
	  if (error) {
		return { error: 'Niepoprawne dane logowania' }
	}

	  if (data.url) {
		redirect(data.url)
	  }
}

export async function signup(formData: FormData) {
	const supabase = await createClient()

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		username: formData.get('username') as string,
		gender: formData.get('gender') as string,
	}

	const { data: authData, error } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	})

	if (error) {
		return { error: 'Wystąpił problem podczas rejestracji' }
	}

	const userId = authData.user?.id

	if (userId) {
		const { error: createError } = await supabase.from('users').insert({
			id: userId,
			email: data.email,
			username: data.username,
			gender: data.gender,
		})
		if (createError) {
			return { error: 'Wystąpił problem podczas rejestracji' }
		}
	}

	revalidatePath('/panel/rejestracja')
	redirect('/')
}
export async function logout() {
	const supabase = await createClient()

	const { error } = await supabase.auth.signOut()
	if (error) throw new Error(error.message)

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function getUser () {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	return authData
}

export async function getCurrentUser() {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	const userId = authData.user?.id

	const { data: user, error } = await supabase.from('users').select('*').eq('id', userId).single()

	if (error) throw new Error(error.message)

	return user

	// revalidatePath('/', 'layout')
}

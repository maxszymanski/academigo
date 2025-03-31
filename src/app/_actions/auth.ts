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
        redirect('/')
    }
    const { data: user } = await supabase.auth.getUser()
    console.log(user)
    revalidatePath('/konto')
    // redirect(`/konto/${user.id}`)
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/panel/zaloguj-sie')
    }

    // revalidatePath('/', 'layout')
    // redirect('/')
}
export async function logout() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)

    // revalidatePath('/', 'layout')
    redirect('/')
}

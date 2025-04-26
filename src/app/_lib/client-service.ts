import { revalidatePath } from 'next/cache'
import { createClientOnBrowser } from '../utils/supabase/client'

export async function getSubCategoriesOnClient(categorySlug?: string | null) {
	const supabase = createClientOnBrowser()
	let query = supabase.from('sub_categories').select('*').order('name')

	if (categorySlug) {
		query = query.eq('slug_category', categorySlug)
	}

	const { data, error } = await query

	if (error) {
		throw new Error('Błąd pobierania podkategorii')
	}

	return data
}

export async function getSpecializationsOnClient(categorySlug: string | null, subCategorySlug: string | null) {
	const supabase = createClientOnBrowser()
	let query = supabase.from('specializations').select('*').order('name')

	if (categorySlug && !subCategorySlug) {
		query = query.eq('slug_category', categorySlug)
	}
	if (subCategorySlug) {
		query = query.eq('slug_sub_category', subCategorySlug)
	}

	const { data, error } = await query

	if (error) {
		throw new Error('Błąd pobierania specjalizacji')
	}

	return data
}

export async function trackCourseView(courseId: string) {
	const supabase = createClientOnBrowser()

	const { data: authData } = await supabase.auth.getUser()
	const userId = authData?.user?.id ?? null

	const now = Date.now()
	const tenMinutes = 10 * 60 * 1000

	const storageKey = `course_view_${courseId}`

	const lastViewTimestamp = localStorage.getItem(storageKey)

	const hasViewedRecently = lastViewTimestamp && now - Number(lastViewTimestamp) < tenMinutes

	if (hasViewedRecently) {
		return
	}

	localStorage.setItem(storageKey, now.toString())

	if (userId) {
		await supabase.from('course_views').insert({
			course_id: courseId,
			user_id: userId,
		})
	} else {
		await supabase.from('course_views').insert({
			course_id: courseId,
			user_id: null,
		})
	}

	revalidatePath(`/kursy/${courseId}`)
}

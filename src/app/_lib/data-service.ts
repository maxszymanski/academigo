import { createClient } from '../utils/supabase/server'

export async function getCategories() {
	const supabase = await createClient()
	const { data, error } = await supabase.from('categories').select('*')

	if (error) {
		throw new Error('Błąd pobierania kategorii')
	}

	return data
}
export async function getSubCategories(categorySlug?: string | null) {
	const supabase = await createClient()
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

export async function getSpecializations(categorySlug: string | null, subCategorySlug: string | null) {
	const supabase = await createClient()
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

export async function getPlatforms() {
	const supabase = await createClient()

	const { data, error } = await supabase.from('settings').select('*').eq('name', 'platforms')

	if (error) {
		throw new Error('Błąd pobierania platform')
	}

	return data
}
export async function getCoursesCreatedByUser() {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.eq('created_by', authData.user.id)
		.order('created_at')

	if (error) {
		throw new Error('Błąd pobierania kursów stworzonych przez użytkownika')
	}

	return data
}

export async function getCourseById(courseID: string | number) {
	const supabase = await createClient()

	const { data, error } = await supabase.from('courses').select('*').eq('id', courseID).single()

	if (error) {
		throw new Error('Błąd pobierania danych kursu')
	}

	return data
}

export async function getNewestCourses() {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(12)

	if (error) {
		throw new Error('Błąd pobierania danych kursu')
	}

	return data
}
export async function getPopularCourses() {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.order('average_rating', { ascending: true })
		.limit(12)

	if (error) {
		throw new Error('Błąd pobierania danych kursu')
	}

	return data
}
export async function getSelectedByUsCourses() {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.eq('promoted', true)
		.order('created_by', { ascending: false })
		.limit(12)

	if (error) {
		throw new Error('Błąd pobierania danych kursu')
	}

	return data
}
export async function getCoursesByFilter(
	type: string = '',
	category?: string | null,
	subCategory?: string | null,
	specialization?: string | null
) {
	const supabase = await createClient()

	let query = supabase.from('full_course_data').select('*').order('created_at', { ascending: false })

	if (type === 'darmowy') {
		query = query.eq('free', true)
	} else if (type === 'platny') {
		query = query.eq('free', false)
	}

	if (category && !subCategory && !specialization) {
		query = query.eq('categories', category)
	}
	if (subCategory && !specialization) {
		query = query.eq('sub_categories', subCategory)
	}
	if (specialization) {
		query = query.eq('specialization', specialization)
	}

	const { data, error } = await query

	if (error) {
		throw new Error('Błąd pobierania kursów')
	}

	return data
}

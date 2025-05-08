import { cache } from 'react'
import { FullCourseDataType } from '../_types/types'
import { createClient } from '../utils/supabase/server'
import toast from 'react-hot-toast'

export const getCategories = cache(async () => {
	const supabase = await createClient()
	const { data, error } = await supabase.from('categories').select('*')

	if (error) {
		throw new Error('Błąd pobierania kategorii')
	}

	return data
})

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

export const getPlatforms = cache(async () => {
	const supabase = await createClient()

	const { data, error } = await supabase.from('settings').select('*').eq('name', 'platforms').single()

	if (error) {
		throw new Error('Błąd pobierania platform')
	}

	return data
})
export const getGenders = cache(async () => {
	const supabase = await createClient()

	const { data, error } = await supabase.from('settings').select('*').eq('name', 'genders').single()

	if (error) {
		throw new Error('Błąd pobierania kategorii płci')
	}

	return data
})

export const getCoursesCreatedByUser = cache(async () => {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.eq('created_by', authData.user.id)
		.order('created_at', { ascending: false })

	if (error) {
		throw new Error('Błąd pobierania kursów stworzonych przez użytkownika')
	}

	return data || []
})

export const getUserCoursesByID = cache(async (userId: string) => {
	const supabase = await createClient()

	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.eq('created_by', userId)
		.order('created_at', { ascending: false })

	if (error) {
		throw new Error('Błąd pobierania kursów stworzonych przez użytkownika')
	}

	return data || []
})

export const getCourseById = cache(async (courseID: string) => {
	const supabase = await createClient()

	const { data, error } = await supabase.from('full_course_data').select('*').eq('id', courseID).single()

	if (error) {
		throw new Error('Błąd pobierania danych kursu')
	}

	return data
})
export async function getCourseModerator(userID: string) {
	const supabase = await createClient()

	const { data, error } = await supabase.from('full_user_data').select('*').eq('id', userID).single()

	if (error) {
		throw new Error('Błąd pobierania danych uzytkownika')
	}

	return data
}

export const getNewestCourses = cache(async () => {
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
})
export const getPopularCourses = cache(async () => {
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
})
export const getSelectedByUsCourses = cache(async () => {
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
})

export async function getCoursesByFilter(
	page: number = 1,
	type?: string | null,
	category?: string | null,
	subCategory?: string | null,
	specialization?: string | null,
	search?: string | null,
	sort?: string | null
) {
	const supabase = await createClient()

	let query = supabase.from('full_course_data').select('*')

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

	if (search) {
		query = query.ilike('title', `%${search}%`)
	}
	if (sort) {
		query.order(sort, { ascending: false })
	}
	let countQuery = supabase.from('full_course_data').select('id', { count: 'exact', head: true })

	if (type === 'darmowy') {
		countQuery = countQuery.eq('free', true)
	} else if (type === 'platny') {
		countQuery = countQuery.eq('free', false)
	}

	if (category && !subCategory && !specialization) {
		countQuery = countQuery.eq('categories', category)
	}
	if (subCategory && !specialization) {
		countQuery = countQuery.eq('sub_categories', subCategory)
	}
	if (specialization) {
		countQuery = countQuery.eq('specialization', specialization)
	}

	if (search) {
		countQuery = countQuery.ilike('title', `%${search}%`)
	}
	if (sort) {
		countQuery.order(sort, { ascending: false })
	}

	const perPage: number = 15

	const start = (page - 1) * perPage
	const end = start + perPage - 1
	query = query.range(start, end)

	const { data: courses, error } = await query

	if (error) {
		toast.error('Błąd pobierania kursów')
	}

	const { count, error: countError } = await countQuery

	if (countError) {
		toast.error('Błąd pobierania ilości kursów')
	}

	if (sort === 'average_rating' && courses) {
		courses.sort((a, b) => {
			if (a.average_rating === null) return 1
			if (b.average_rating === null) return -1
			return b.average_rating - a.average_rating
		})
	}

	return { courses, count }
}

export const getLikedCourses = cache(async () => {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return []

	const { data, error } = await supabase
		.from('user_likes')
		.select('course_id, full_course_data(*)')
		.eq('user_id', authData.user.id)
		.order('created_at', { ascending: false })

	if (error) {
		throw new Error('Błąd pobierania kursów polubionych przez użytkownika')
	}

	const formattedData = data.map(item => ({
		course_id: item.course_id,
		full_course_data: Array.isArray(item.full_course_data) ? item.full_course_data[0] : item.full_course_data,
	}))

	return formattedData.map(item => item.full_course_data) || []
})

export const getRatedCourses = cache(async () => {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return []

	const { data, error } = await supabase
		.from('user_ratings')
		.select('course_id, full_course_data(*)')
		.eq('user_id', authData.user.id)
		.order('created_at', { ascending: false })

	if (error) {
		throw new Error('Błąd pobierania kursów ocenionych przez użytkownika')
	}

	const formattedData = data.map(item => ({
		course_id: item.course_id,
		full_course_data: Array.isArray(item.full_course_data) ? item.full_course_data[0] : item.full_course_data,
	}))

	return formattedData.map(item => item.full_course_data) || []
})

export async function getRatedCourse(courseId: string) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	const { data, error } = await supabase
		.from('user_ratings')
		.select('*')
		.eq('user_id', authData.user.id)
		.eq('course_id', courseId)
		.single()

	if (error) {
		return null
	}
	return data || []
}

export const getSavedCourses = cache(async () => {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return []

	const { data, error } = await supabase
		.from('user_saved_courses')
		.select('course_id, full_course_data(*)')
		.eq('user_id', authData.user.id)
		.order('created_at', { ascending: false })

	if (error) {
		throw new Error('Błąd pobierania kursów zapisanych przez użytkownika')
	}

	const formattedData = data.map(item => ({
		course_id: item.course_id,
		full_course_data: Array.isArray(item.full_course_data) ? item.full_course_data[0] : item.full_course_data,
	}))

	return formattedData.map(item => item.full_course_data) || []
})

export async function getUserRankByPoints(userId?: string) {
	const supabase = await createClient()

	const { data: currentUser, error } = await supabase
		.from('full_user_data')
		.select('points')
		.eq('id', userId)
		.single()
	if (error) {
		throw new Error('Nie znaleziono użytkownika')
	}

	const { count: higherCount, error: countError } = await supabase
		.from('full_user_data')
		.select('*', { count: 'exact', head: true })
		.gt('points', currentUser.points)

	if (countError) {
		throw new Error('Błąd podczas obliczania pozycji w rankingu')
	}
	const rank = (higherCount ?? 0) + 1

	return rank
}
export async function getUserRankByCourses(userId: string) {
	const supabase = await createClient()

	const { data: currentUser, error } = await supabase
		.from('full_user_data')
		.select('created_courses')
		.eq('id', userId)
		.single()
	if (error) {
		throw new Error('Nie znaleziono użytkownika')
	}

	const { count: higherCount, error: countError } = await supabase
		.from('full_user_data')
		.select('*', { count: 'exact', head: true })
		.gt('created_courses', currentUser.created_courses)

	if (countError) {
		throw new Error('Błąd podczas obliczania pozycji w rankingu')
	}
	const rank = (higherCount ?? 0) + 1

	return rank
}

export async function getRecommendedCourses(
	courseID: string,
	specialization?: string,
	sub_category?: string,
	category?: string
) {
	const supabase = await createClient()
	let courses: FullCourseDataType[] = []
	const limit = 6
	// 1. Pobierz po specialization
	if (specialization) {
		const { data } = await supabase
			.from('full_course_data')
			.select('*')
			.eq('specialization', specialization)
			.neq('id', courseID)
			.order('average_rating', { ascending: true })
			.limit(limit - courses.length)

		if (data && data.length > 0) courses = data
	}

	// 2. Jeśli za mało, pobierz po sub_category
	if (courses.length < limit && sub_category) {
		const { data } = await supabase
			.from('full_course_data')
			.select('*')
			.eq('sub_categories', sub_category)
			.neq('id', courseID)
			.not('id', 'in', `(${courses.map(c => c.id).join(',')})`)
			.order('average_rating', { ascending: true }) // unikalność
			.limit(limit - courses.length)

		if (data) courses = [...courses, ...data]
	}

	// 3. Jeśli nadal za mało, pobierz po category
	if (courses.length < limit && category) {
		const { data } = await supabase
			.from('full_course_data')
			.select('*')
			.eq('categories', category)
			.neq('id', courseID)
			.not('id', 'in', `(${courses.map(c => c.id).join(',')})`)
			.order('average_rating', { ascending: true })
			.limit(limit - courses.length)

		if (data) courses = [...courses, ...data]
	}

	// 4. Na końcu, jeśli nadal za mało, pobierz losowe kursy
	if (courses.length < limit) {
		const { data } = await supabase
			.from('full_course_data')
			.select('*')
			.neq('id', courseID)
			.not('id', 'in', `(${courses.map(c => c.id).join(',')})`)
			.order('average_rating', { ascending: true })
			.limit(limit - courses.length)

		if (data) courses = [...courses, ...data]
	}

	courses.sort((a, b) => {
		const ratingA = a.average_rating ?? -1
		const ratingB = b.average_rating ?? -1
		return ratingB - ratingA
	})

	return courses
}

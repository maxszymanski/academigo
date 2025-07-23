import { cache } from 'react'
import { FullCourseDataType } from '../_types/types'
import { createClient } from '../utils/supabase/server'
import { supabase } from '../utils/supabase/server-public'

export const getCategories = cache(async () => {
	const { data, error } = await supabase.from('categories').select('*, courses(count)')

	if (error) {
		throw new Error('Błąd pobierania kategorii')
	}

	const result = data.map(category => ({
		id: category.id,
		name: category.name,
		slug: category.slug,
		courseCount: category.courses[0]?.count || 0,
	}))
	return result
})

export async function getSubCategories(categorySlug?: string | null) {
	let query = supabase.from('sub_categories').select('*, courses(count)').order('name')

	if (categorySlug) {
		query = query.eq('slug_category', categorySlug)
	}

	const { data, error } = await query

	if (error) {
		throw new Error('Błąd pobierania podkategorii')
	}

	const result = data.map(category => ({
		id: category.id,
		name: category.name,
		slug_category: category.slug_category,
		subcategory_slug: category.subcategory_slug,
		courseCount: category.courses[0]?.count || 0,
	}))
	return result
}

export async function getSpecializations(categorySlug: string | null, subCategorySlug: string | null) {
	let query = supabase.from('specializations').select('*, courses(count)').order('name')

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

	const result = data.map(category => ({
		id: category.id,
		name: category.name,
		slug_category: category.slug_category,
		slug_sub_category: category.slug_sub_category,
		spec_slug: category.spec_slug,
		courseCount: category.courses[0]?.count || 0,
	}))
	return result
}

export const getPlatforms = cache(async () => {
	const { data, error } = await supabase.from('settings').select('*').eq('name', 'platforms').single()

	if (error) {
		throw new Error('Błąd pobierania platform')
	}

	return data
})
export const getGenders = cache(async () => {
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
	const { data, error } = await supabase
		.from('full_course_data')
		.select('*')
		.order('views_count', { ascending: false })
		.limit(12)

	if (error) {
		throw new Error('Błąd pobierania danych kursu')
	}

	return data
})
export const getSelectedByUsCourses = cache(async () => {
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
		return { error: 'Błąd pobierania kursów' }
	}

	const { count, error: countError } = await countQuery

	if (countError) {
		return { error: 'Błąd pobierania ilości kursów' }
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
	let courses: FullCourseDataType[] = []
	const limit = 6

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

	if (courses.length < limit && sub_category) {
		const { data } = await supabase
			.from('full_course_data')
			.select('*')
			.eq('sub_categories', sub_category)
			.neq('id', courseID)
			.not('id', 'in', `(${courses.map(c => c.id).join(',')})`)
			.order('average_rating', { ascending: true })
			.limit(limit - courses.length)

		if (data) courses = [...courses, ...data]
	}

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

export async function getPostsSlugs() {
	const { data, error } = await supabase
		.from('blog')
		.select('id, created_at,title, short_description, slug, image')

		.order('created_at', { ascending: false })

	if (error) {
		return []
	}
	return data
}

export async function getPostBySlug(slug: string) {
	const { data, error } = await supabase.from('blog').select('*').eq('slug', slug).single()

	if (error) {
		return { error: 'Błąd pobierania postu' }
	}

	return data
}

export async function getNextPost(id: string) {
	const { data: nextPost } = await supabase
		.from('blog')
		.select('slug, title')
		.gt('id', id)
		.order('id', { ascending: true })
		.limit(1)
		.single()

	if (nextPost) {
		return nextPost
	}

	const { data: firstPost, error: firstPostError } = await supabase
		.from('blog')
		.select('slug, title')
		.order('id', { ascending: true })
		.limit(1)
		.single()

	if (firstPostError) {
		console.error('Błąd pobierania ostatniego posta')
		return null
	}

	return firstPost || null
}

export async function getPreviousPost(id: string) {
	const { data: prevPost } = await supabase
		.from('blog')
		.select('slug, title')
		.lt('id', id)
		.order('id', { ascending: false })
		.limit(1)
		.single()

	if (prevPost) {
		return prevPost
	}

	const { data: lastPost, error: lastPostError } = await supabase
		.from('blog')
		.select('slug, title')
		.order('id', { ascending: false })
		.limit(1)
		.single()

	if (lastPostError) {
		console.error('Błąd pobierania ostatniego posta')
		return null
	}

	return lastPost || null
}

export async function getPostComments(post: string) {
	const {
		data: comments,
		count,
		error,
	} = await supabase
		.from('post_comments')
		.select('*, full_user_data(id, username, avatar)', { count: 'exact' })
		.eq('post_slug', post)
		.limit(15)
		.order('created_at', { ascending: false })

	if (error) {
		return { error: 'Wystąpił problem podczas pobierania komentarzy, proszę spróbować ponownie później.' }
	}

	return {
		comments,
		totalCount: count,
	}
}

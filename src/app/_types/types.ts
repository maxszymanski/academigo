import { AddCourseType } from '../_lib/validators'

export interface Category {
	id: number
	name: string
	slug: string
	courseCount: number
}

export interface CategoriesType {
	categories: Category[]
}

export interface SubCat {
	id: number
	name: string
	slug_category: string
	subcategory_slug: string
	courseCount: number
}

export interface CurrentUserType {
	id: string
	created_at: string
	username: string
	email: string
	gender: string
	avatar: string
	liked_courses: number
	created_courses: number
	saved_courses: number
	rated_courses: number
	age: string | null
	country: string | null
	city: string | null
	page: string | null
	linkedin: string | null
	github: string | null
	social: string | null
	role: string | null
	profession: string | null
	points: number
	long_description: string | null
	short_description: string | null
}
export interface RankType {
	id: string
	username: string
	avatar: string
	created_courses?: number
	points?: number
	short_description: string | null
}

export type FullCourseDataType = AddCourseType & {
	created_at: string
	id: string
	created_by: string
	specialization_name: string
	category_name: string
	sub_category_name: string
	likes_count: number
	average_rating: number | null
	ratings_count: number
	saved_count: number
	views_count: number
}

export interface PostProps {
	title: string
	created_at: string
	short_description: string
	slug: string
	id?: string
	content?: string
	image?: string
}

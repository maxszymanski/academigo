export interface Category {
	id: number
	name: string
	slug: string
}

export interface CategoriesType {
	categories: Category[]
}

export interface SubCat {
	id: number
	name: string
	slug_category: string
	subcategory_slug: string
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
}

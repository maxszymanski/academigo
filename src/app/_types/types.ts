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

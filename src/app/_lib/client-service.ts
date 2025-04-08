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

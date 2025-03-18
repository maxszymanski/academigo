import supabase from './supabase'

export async function getCategories() {
    const { data, error } = await supabase.from('categories').select('*')

    if (error) {
        throw new Error('Błąd pobierania kategorii')
    }

    return data
}
export async function getSubCategories(categorySlug: string | null) {
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

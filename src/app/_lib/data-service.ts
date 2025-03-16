import supabase from './supabase'

export async function getCategories() {
    const { data, error } = await supabase.from('categories').select('*')

    if (error) {
        throw new Error('Błąd pobierania kategorii')
    }

    return data
}
export async function getSubCategories(categorySlug: string = 'programowanie') {
    const { data, error } = await supabase
        .from('sub_categories')
        .select('*')
        .eq('slug_category', categorySlug)

    if (error) {
        throw new Error('Błąd pobierania podkategorii')
    }

    return data
}

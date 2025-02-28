import supabase from './supabase'

export async function getCategories() {
    const { data: categories, error } = await supabase
        .from('categories')
        .select('*')

    if (error) throw new Error('Błąd pobierania kategorii')

    return categories
}

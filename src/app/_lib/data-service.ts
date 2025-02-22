import supabase from './supabase'

export async function getCourses() {
	const { data, error } = await supabase.from('courses').select('*')

	if (error) {
		console.error(error)
		throw new Error('Cabins could not be loaded')
	}

	return data
}

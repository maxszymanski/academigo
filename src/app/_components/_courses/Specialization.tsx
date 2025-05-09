import { getSpecializations } from '@/app/_lib/data-service'
import SpecializationsList from './SpacializationsList'

export interface SpecializationType {
	id: number
	name: string
	slug_category: string
	slug_sub_category: string
	spec_slug: string
	courseCount: number
}

async function Specialization({ category, subCategory }: { category: string | null; subCategory: string | null }) {
	const specializations: SpecializationType[] = await getSpecializations(category, subCategory)

	return <SpecializationsList specializations={specializations} />
}

export default Specialization

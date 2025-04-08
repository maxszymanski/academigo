import { getSubCategories } from '@/app/_lib/data-service'
import SubCategoriesList from './SubCategoriesList'
import { SubCat } from '@/app/_types/types'

async function SubCategories({ category }: { category: string | null }) {
	const subCategories: SubCat[] = await getSubCategories(category || null)

	return <SubCategoriesList subCategories={subCategories} />
}

export default SubCategories

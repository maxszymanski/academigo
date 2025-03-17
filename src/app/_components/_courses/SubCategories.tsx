import { getSubCategories } from '@/app/_lib/data-service'
import SubCategoriesList from './SubCategoriesList'

export interface SubCat {
    id: number
    name: string
    slug_category: string
    subcategory_slug: string
}

async function SubCategories({ category }: { category: string | null }) {
    const subCategories: SubCat[] = await getSubCategories(category || null)

    return <SubCategoriesList subCategories={subCategories} />
}

export default SubCategories

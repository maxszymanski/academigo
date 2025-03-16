import Button from '../_ui/Button'

interface SubCat {
    id: number
    name: string
    slug_category: string
}

function SubCategories({ subCategories }: { subCategories: SubCat[] }) {
    //

    console.log(subCategories)

    return (
        <div className="flex flex-col gap-0">
            {subCategories.map((subCat) => (
                <Button
                    variant="category"
                    restClass="px-2 text-sm"
                    key={subCat.name}
                >
                    {subCat.name}
                </Button>
            ))}
        </div>
    )
}

export default SubCategories

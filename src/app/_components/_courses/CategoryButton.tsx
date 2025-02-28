import Button from '../_ui/Button'

function CategoryButton({ name, value }) {
    const setCategory = () => {
        console.log(value)
    }

    return (
        <Button variant="panel" value={value} onClick={setCategory}>
            {name}
        </Button>
    )
}

export default CategoryButton

import Button from './Button'

function AuthButton() {
    // const session = await auth()
    // console.log(session)
    return (
        <li>
            <Button href="/panel" restClass=" xl:min-w-[160px]">
                Moje konto
            </Button>
        </li>
    )
}

export default AuthButton

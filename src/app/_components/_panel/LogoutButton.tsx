'use client'
import { IoLogOut } from 'react-icons/io5'
import NavigationLink from '../_ui/NavigationLink'

function LogoutButton() {
    return (
        <NavigationLink
            onClick={() => console.log('siema')}
            panelNav
            restClass="hidden lg:flex"
        >
            <IoLogOut className="mr-4 size-8 flex-shrink-0" />{' '}
            <span className="">Wyloguj się</span>
        </NavigationLink>
    )
}

export default LogoutButton

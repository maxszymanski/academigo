'use client'

import useAppStore from '@/app/stores/store'
import { useEffect } from 'react'

import { IoMenu, IoClose } from 'react-icons/io5'
import Button from './Button'
import Logo from './Logo'

function MobileNav({
    blackNav = false,
    pathname,
}: {
    blackNav?: boolean
    pathname: string
}) {
    const { isNavOpen, toggleNavigation, closeNavigation } = useAppStore()

    useEffect(() => {
        closeNavigation()
    }, [pathname, closeNavigation])

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflowY = 'hidden'
            document.body.style.height = '100vh'
        } else {
            document.body.style.overflowY = 'visible'
            document.body.style.height = '100%'
        }
    })

    return (
        <div
            className={`left-0 top-0 flex w-full items-center justify-between border-b px-4 py-1 md:hidden ${
                blackNav
                    ? 'border-transparent bg-dark'
                    : 'border-slate50 bg-white'
            }`}
        >
            <Logo isMobile />
            <Button
                restClass="relative z-50"
                variant="transparent"
                onClick={() => {
                    toggleNavigation()
                }}
            >
                {isNavOpen ? (
                    <IoClose
                        className={`size-12 font-semibold text-primary ${blackNav ? 'bg-dark' : 'bg-white'}`}
                    />
                ) : (
                    <IoMenu
                        className={`size-12 ${blackNav ? 'bg-dark' : 'bg-white'} font-semibold text-primary`}
                    />
                )}
            </Button>
        </div>
    )
}

export default MobileNav

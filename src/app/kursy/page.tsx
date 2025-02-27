'use client'
import Navigation from '../_components/_ui/Navigation'

import CourseHeader from '../_components/_courses/CourseHeader'
import Search from '../_components/_courses/Search'
import Button from '../_components/_ui/Button'
import { FaChevronDown } from 'react-icons/fa6'
import { FaList } from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'
import CourseCard from '../_components/_courses/CourseCard'
import Footer from '../_components/_footer/Footer'
import { useState } from 'react'

function CoursePage() {
    const [view, setView] = useState('card')

    return (
        <>
            <Navigation />
            <CourseHeader />
            <main className="mx-auto h-full min-h-screen w-full px-4 py-10 lg:container xl:py-20">
                <Search />
                <section className="relative h-full w-full pt-12 lg:flex lg:items-start lg:justify-between lg:gap-6 xl:pt-16">
                    <div className="w-full max-w-6xl">
                        <div className="mx-auto flex w-full max-w-[320px] flex-wrap items-center justify-center gap-5 md:max-w-full md:justify-between lg:px-2">
                            <Button
                                onClick={() => console.log('siema')}
                                variant="filter"
                                restClass="w-full justify-between px-7 xl:px-6  md:w-fit "
                            >
                                Kategorie{' '}
                                <FaChevronDown className="ml-2.5 size-2.5 justify-items-end" />
                            </Button>
                            <div className="flex flex-wrap-reverse items-center justify-center gap-5">
                                <div className="flex items-center gap-5 md:gap-2">
                                    <Button
                                        variant="view"
                                        onClick={() => setView('list')}
                                        isActive={view === 'list'}
                                    >
                                        <FaList className="size-8" />
                                    </Button>
                                    <Button
                                        variant="view"
                                        onClick={() => setView('card')}
                                        isActive={view === 'card'}
                                    >
                                        <RxDashboard className="size-8" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3.5">
                                    <Button
                                        onClick={() => console.log('siema')}
                                        variant="filter"
                                        restClass="lg:hidden"
                                    >
                                        Filtrowanie{' '}
                                        <FaChevronDown className="ml-2.5 size-2.5" />
                                    </Button>
                                    <Button
                                        onClick={() => console.log('siema')}
                                        variant="filter"
                                    >
                                        Sortowanie{' '}
                                        <FaChevronDown className="ml-2.5 size-2.5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-12 pt-12 md:gap-x-8 lg:justify-between">
                            {Array.from({ length: 15 }, (_, i) => (
                                <CourseCard
                                    isList={view === 'list'}
                                    key={i}
                                    i={i}
                                />
                            ))}
                        </div>
                    </div>
                    <aside className="sticky top-8 hidden flex-col gap-8 text-nowrap px-12 lg:flex">
                        <div className="text-xs text-stone400 xl:text-sm">
                            <h4 className="mb-4 text-lg font-bold">
                                Podkategorie
                            </h4>
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <p>Web development</p>
                                </li>
                                <li>
                                    <p>Design</p>
                                </li>
                                <li>
                                    <p>Web development</p>
                                </li>
                                <li>
                                    <p>Web development</p>
                                </li>{' '}
                                <li>
                                    <p>Web development</p>
                                </li>{' '}
                                <li>
                                    <p>Web development</p>
                                </li>{' '}
                                <li>
                                    <p>Web development</p>
                                </li>{' '}
                                <li>
                                    <p>Web development</p>
                                </li>{' '}
                                <li>
                                    <p>Web development</p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-xs text-stone400">
                            <h4 className="mb-4 text-lg font-bold">
                                Typ kursu
                            </h4>
                            <div>
                                <p className="mb-3">Płatne</p>
                                <p>Darmowe</p>
                            </div>
                        </div>

                        <Button>Filtruj</Button>
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CoursePage

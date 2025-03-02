'use client'
import Button from '../_ui/Button'

function Filters() {
    return (
        <aside className="sticky top-8 hidden flex-col gap-8 overflow-y-auto text-nowrap pl-4 pr-12 lg:flex">
            <div className="text-xs text-stone400 xl:text-sm">
                <h4 className="mb-4 text-lg font-bold">Podkategorie</h4>
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
                <h4 className="mb-4 text-lg font-bold">Typ kursu</h4>
                <div>
                    <p className="mb-3">Płatne</p>
                    <p>Darmowe</p>
                </div>
            </div>

            <Button>Filtruj</Button>
        </aside>
    )
}

export default Filters

import { FaSearch } from 'react-icons/fa'
import Input from '../_ui/Input'

function Search() {
    return (
        <div className="w-full">
            <Input
                wrapperClass="bg-primary pb-5 pt-4 rounded-xl sm:px-12  md:px-20 xl:pb-7 xl:pt-5"
                restClass="pl-10 !placeholder-white/90 !text-white  !border-b-2  sm:text-base placeholder:text-sm xl:placeholder:text-base sm:pb-1 xl:pb-2"
                name="search"
                type="search"
                placeholder="Szukaj"
            >
                <FaSearch className="mb-1 size-5 text-white/90 sm:mb-0 xl:mb-2" />
            </Input>
        </div>
    )
}

export default Search

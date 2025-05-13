import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

async function ContactInfo() {
	return (
		<div className="text-dark2/90 w-full pb-12 md:pt-6 md:pb-0 lg:w-1/2">
			<div className="text-dark2/90 mx-auto w-full max-w-sm text-center text-sm lg:max-w-lg lg:text-base xl:max-w-[450px]">
				<h3 className="mb-5 text-2xl text-primary font-medium lg:text-4xl lg:leading-[140%]">
					Masz pytania? <br /> Skontaktuj się z nami!
				</h3>
				<p className="mb-1 leading-[170%] lg:mb-4">Chętnie odpowiemy na Twoje pytania</p>
				<p className="leading-[170%]">
					Wypełnij formularz kontaktowy, zadzwoń lub napisz do nas – jesteśmy do Twojej dyspozycji!
				</p>
			</div>
			<div className="flex flex-col items-center gap-2.5 pt-6">
				<Link
					className="text-dark2/90 hover:text-primary flex items-center gap-2 p-1.5 transition-colors"
					href={`mailto:kontakt@academigo.pl`}>
					<MdEmail className="text-primary3 size-5" /> kontakt@academigo.pl
				</Link>
				<Link
					className="text-dark2/90 hover:text-primary flex items-center gap-2 p-1.5 transition-colors"
					href={`tel:+48999888777`}>
					<FaPhoneAlt className="text-primary3 size-5" /> kontakt@academigo.pl
				</Link>
			</div>
		</div>
	)
}

export default ContactInfo

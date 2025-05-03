import { FaPlus } from 'react-icons/fa6'
import PanelLink from './PanelLink'

function QuickSecion() {
	return (
		<div className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-4 pb-4 pt-8 xl:pb-6">
			<PanelLink href="/konto/dodaj-kurs" name="Dodaj kurs">
				<FaPlus className="size-16 text-white sm:size-20" />
			</PanelLink>
		</div>
	)
}

export default QuickSecion

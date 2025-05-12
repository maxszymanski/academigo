import { FaEdit } from 'react-icons/fa'
import Button from '../_ui/Button'

function EditDeleteComent() {
	return (
		<div className="w-fit flex gap-5 items-center">
			<Button
				variant="transparentDark"
				restClass="!text-dark2 hover:!text-dark2/75 px-4 py-2 rounded-xl border border-transparent !bg-slate50 hover:!border-slate-300"
				title="Edytuj komentarz">
				<FaEdit className="mr-2" /> Edytuj
			</Button>{' '}
			<Button
				variant="transparentDark"
				restClass="!text-red-500 hover:!text-red-600 px-4 py-2 rounded-xl !bg-slate50 hover:!border-red-600 border border-transparent"
				title="Usuń komentarz">
				Usuń
			</Button>
		</div>
	)
}

export default EditDeleteComent

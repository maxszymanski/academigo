'use client'

import { useState } from 'react'
import Checkbox from '../_ui/Checkbox'
import PanelInput from '../_ui/PanelInput'

function AddCourseForm() {
	const [isFree, setIsFree] = useState(false)
	return (
		<form className="w-full px-3 py-8 border border-slate-200 bg-white rounded-lg flex flex-col flex-wrap gap-7 shadow-md shadow-stone-200 md:flex-row md:flex-wrap md:items-start md:justify-evenly 2xl:px-12 xl:gap-8 lg:py-14">
			<PanelInput label="Tytuł " type="text" name="title" placeholder="Wpisz tytuł kursu" required />
			<PanelInput
				label="Krótki opis"
				type="text"
				name="short-description"
				placeholder="Wpisz krótki opis kursu"
				required
			/>
			<PanelInput
				label="Nazwa platforma"
				type="text"
				name="platform-name"
				placeholder="Nazwa platformy"
				required
			/>
			<PanelInput label="Link do kursu" type="text" name="course-link" placeholder="Link do kursu" required />
			<PanelInput
				label="Cena kursu"
				type="number"
				name="price"
				placeholder="Cena kursu"
				min={1}
				disabled={isFree}>
				<Checkbox id="free" name="free" label="Darmowy kurs" onClick={() => setIsFree(is => !is)} />
			</PanelInput>
			<PanelInput
				label="Czas trwania kursu"
				type="number"
				name="duration"
				placeholder="Czas trwania kursu w minutach"
				min={1}
			/>

			<PanelInput label="Autor kursu" type="text" name="author-name" placeholder="Imię i nazwisko" />
			<PanelInput label="Link do profilu autora" type="text" name="author-link" placeholder="Link do profilu " />

			<PanelInput
				textArea
				label="Opis kursu"
				name="long-description"
				placeholder="Wprowadź opis kursu"
				required
			/>
		</form>
	)
}

export default AddCourseForm

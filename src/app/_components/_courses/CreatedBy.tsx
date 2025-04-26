import UserAvatar from '../_ui/UserAvatar'

function CreatedBy() {
	return (
		<div>
			<p>Kurs dodany przez użytkowika:</p>
			<div>
				<UserAvatar href="/" /> <p>Max</p>
			</div>
		</div>
	)
}

export default CreatedBy

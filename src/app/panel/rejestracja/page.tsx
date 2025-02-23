'use client'

import LoginPanelLayout from '@/app/_components/_login/LoginPanelLayout'
import RegistrationForm from '@/app/_components/_login/RegistrationForm'

function SignIn() {
	return (
		<LoginPanelLayout>
			<RegistrationForm />
		</LoginPanelLayout>
	)
}

export default SignIn

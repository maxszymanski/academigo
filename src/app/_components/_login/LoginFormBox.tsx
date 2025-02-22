import { FaArrowLeftLong } from 'react-icons/fa6'

import Button from '../Button'

function LoginFormBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="  lg:w-2/5  min-h-full w-full flex-grow flex">
			<div className="max-w-96 w-full mx-auto flex h-full flex-col justify-between gap-12 lg:py-6 relative">
				<div className="absolute left-2 top-12 w-fit hidden lg:block">
					<Button variant="dark" href="/" restClass="rounded-lg">
						<FaArrowLeftLong className="size-4 mr-3" /> Strona Główna
					</Button>
				</div>
				{children}
			</div>
		</div>
	)
}

export default LoginFormBox

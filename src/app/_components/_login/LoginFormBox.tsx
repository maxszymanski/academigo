import { FaArrowLeftLong } from 'react-icons/fa6'

import Button from '../_ui/Button'

function LoginFormBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-full w-full flex-grow lg:w-2/5">
			<div className="relative mx-auto flex h-full w-full max-w-96 flex-col justify-between gap-12 lg:py-6 lg:pr-4">
				<div className="mt-12 w-fit ">
					<Button variant="dark" href="/" restClass="rounded-lg">
						<FaArrowLeftLong className="mr-3 size-4" /> Strona Główna
					</Button>
				</div>
				{children}
			</div>
		</div>
	)
}

export default LoginFormBox

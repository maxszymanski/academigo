import { ReactNode } from 'react'
import Footer from '@/app/_components/_footer/Footer'
import NavigationBox from '@/app/_components/_ui/NavigationBox'

function WithNavLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<NavigationBox />
			{children}
			<Footer />
		</>
	)
}

export default WithNavLayout

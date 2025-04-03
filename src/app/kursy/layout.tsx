import CourseHeader from '../_components/_courses/CourseHeader'
import Footer from '../_components/_footer/Footer'

function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<CourseHeader />
			{children}
			<Footer />
		</>
	)
}

export default layout

import CourseHeader from '../_components/_courses/CourseHeader'
import Footer from '../_components/_footer/Footer'
import Navigation from '../_components/_ui/Navigation'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Navigation />
            <CourseHeader />
            {children}
            <Footer />
        </>
    )
}

export default layout

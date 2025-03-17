import LoadingCourseCard from '../_components/_courses/LoadingCourseCard'

function loading() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
                <LoadingCourseCard key={i} />
            ))}
        </div>
    )
}

export default loading

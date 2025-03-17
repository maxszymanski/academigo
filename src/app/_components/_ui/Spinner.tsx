function Spinner() {
    return (
        <div className="fixed left-0 top-0 flex h-full items-center justify-center bg-transparent">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
        </div>
    )
}

export default Spinner

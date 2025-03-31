'use client'

import Footer from './_components/_footer/Footer'
import Button from './_components/_ui/Button'
import Navigation from './_components/_ui/Navigation'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <>
            <Navigation />
            <main className="py-30 flex flex-1 flex-col items-center justify-center gap-10 px-6 text-center text-primary">
                <h1 className="text-3xl font-semibold">Coś poszło nie tak!</h1>
                <p className="text-lg">{error.message}</p>

                <Button variant="purple" onClick={reset}>
                    Spróbuj ponownie
                </Button>
            </main>
            <Footer />
        </>
    )
}

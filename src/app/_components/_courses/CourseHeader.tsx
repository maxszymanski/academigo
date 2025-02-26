import Image from 'next/image'

function CourseHeader() {
    return (
        <header className="bg-gradient-primary pt-16 md:pt-0">
            <div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
                <div className="flex h-full w-full flex-col justify-center gap-4 text-center text-second md:w-1/2 md:items-start md:pl-6 md:text-left lg:py-20 2xl:gap-8">
                    <h1 className="w-full text-xl font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
                        Przeszukuj naszą <br /> Bazę kursów <br /> I znajdź coś
                        dla siebie!{' '}
                    </h1>
                    <p className="text-sm xl:text-base">
                        Filtruj, sortuj i odkrywaj kursy dopasowane do Twoich
                        potrzeb!
                    </p>
                </div>
                <div className="flex items-center justify-center md:w-1/2">
                    <Image
                        width={400}
                        height={352}
                        src="/open-book.png"
                        alt="student"
                        priority
                    />
                </div>
            </div>
        </header>
    )
}

export default CourseHeader

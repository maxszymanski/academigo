import LearnInfo from './LearnInfo'

const aboutInfo = [
    {
        title: 'Nieograniczony dostęp',
        description: 'Linki do najlepszych zasobów w jednym miejscu!',
        src: '/access.svg',
    },
    {
        title: 'Eksperccy nauczyciele',
        description:
            'Ucz się od ekspertów branżowych, którzy dzielą się swoją wiedzą i pasją',
        src: '/teacher.svg',
    },
    {
        title: 'Nauka w dowolnym miejscu',
        description: 'Korzystaj z kursów na komputerze, tablecie lub telefonie',
        src: '/learn.svg',
    },
]

function LearnInfoSection() {
    return (
        <section className="container mx-auto flex flex-wrap items-center justify-center gap-20 px-6 lg:gap-10 xl:gap-36 2xl:gap-48">
            {aboutInfo.map((info) => (
                <LearnInfo
                    variant="dark"
                    src={info.src}
                    alt="ikona"
                    title={info.title}
                    description={info.description}
                    key={info.src}
                />
            ))}
        </section>
    )
}

export default LearnInfoSection

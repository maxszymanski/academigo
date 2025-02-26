interface Learn {
    src: string
    alt: string
    title: string
    description: string
    variant: 'dark' | 'light'
}

function LearnInfo({ src, alt, description, title, variant }: Learn) {
    return (
        <div className="flex flex-col items-center justify-between gap-5 text-center">
            <img src={src} alt={alt} />
            <div className="mx-auto max-w-72 text-center">
                <p
                    className={`${
                        variant === 'dark'
                            ? 'mb-1.5 text-stone400 xl:text-lg'
                            : variant === 'light'
                              ? 'mb-3 mt-2 text-4xl text-white'
                              : ''
                    } font-semibold`}
                >
                    {title}
                </p>
                <p
                    className={`${
                        variant === 'dark'
                            ? 'text-stone400'
                            : variant === 'light'
                              ? 'max-w-56 text-white xl:max-w-72 xl:px-3'
                              : ''
                    } text-xs xl:text-sm`}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

export default LearnInfo

interface RankRow {
    user_id: number
    name: string
    total_courses?: number | null
    points?: number | null
}
interface userInfo {
    courses: {
        added: number
        ranking: number
    }
    popularity: { points: number; ranking: number }
}

function RankCard({
    ranking = [],
    title,
    userRank = undefined,
}: {
    ranking?: RankRow[]
    title: string
    userRank?: userInfo | undefined
}) {
    return (
        <ul
            className="flex h-72 w-80 flex-shrink-0 flex-col gap-2.5 rounded-3xl border-[3px] border-transparent bg-white px-5 py-8 text-dark shadow-md shadow-stone-200 outline-none transition-colors duration-300 focus:border-primary xl:border-2"
            tabIndex={1}
        >
            <h3 className="mb-5 text-center font-medium text-primary">
                {title}
            </h3>
            {ranking.length > 0 &&
                ranking.map((user, index) => (
                    <li key={user.user_id} className="flex items-center">
                        <p className="mr-2 w-10 font-semibold text-primary">
                            #{index + 1}
                        </p>
                        <div className="flex w-full items-center justify-between">
                            <p className="font-medium">
                                {user.name}{' '}
                                {index === 0
                                    ? '🥇'
                                    : index === 1
                                      ? '🥈'
                                      : index === 2
                                        ? '🥉'
                                        : ''}{' '}
                            </p>
                            {user.total_courses && (
                                <p className="text-sm text-dark/70">
                                    ({user.total_courses} kursów)
                                </p>
                            )}
                            {user.points && (
                                <p className="text-sm text-dark/70">
                                    ({user.points} punktów)
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            {userRank && (
                <>
                    <li className="mb-4 text-center font-semibold text-primary">
                        <p className="mb-2.5">Najwięcej dodanych kursów</p>
                        <p>
                            #{userRank.courses.ranking}{' '}
                            <span className="ml-5 text-sm font-normal text-dark/70">
                                ({userRank.courses.added} kursów)
                            </span>
                        </p>
                    </li>
                    <li className="text-center font-semibold text-primary">
                        <p className="mb-2.5">Najaktywniejsi użytkowicy</p>
                        <p>
                            #{userRank.popularity.ranking}{' '}
                            <span className="ml-5 text-sm font-normal text-dark/70">
                                ({userRank.popularity.points} punktów)
                            </span>
                        </p>
                    </li>
                </>
            )}
        </ul>
    )
}

export default RankCard

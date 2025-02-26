import { FaTrophy } from 'react-icons/fa6'
import RankCard from './RankCard'

const courseRank = [
    { user_id: 1, name: 'Aga', total_courses: 1000 },
    { user_id: 2, name: 'Max', total_courses: 820 },
    { user_id: 3, name: 'Tomek', total_courses: 750 },
    { user_id: 4, name: 'Paweł', total_courses: 640 },
    { user_id: 5, name: 'Marysia', total_courses: 510 },
]
const activityRank = [
    { user_id: 1, name: 'Pola', points: 8790 },
    { user_id: 2, name: 'Aga', points: 7850 },
    { user_id: 3, name: 'Marysia', points: 6510 },
    { user_id: 4, name: 'Max', points: 4320 },
    { user_id: 5, name: 'Bronek', points: 3260 },
]

const userInfo = {
    courses: {
        added: 310,
        ranking: 17,
    },
    popularity: { points: 1350, ranking: 14 },
}

function RankSection() {
    return (
        <div className="py-8">
            <h2 className="flex items-center justify-center gap-3 pb-6 text-center text-xl font-bold text-primary lg:px-6 lg:pb-8 xl:pb-10 xl:text-2xl">
                <FaTrophy className="size-8 text-yellow-400" /> Ranking
                użytkowników
            </h2>
            <div className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-5 py-6 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 sm:gap-8">
                <RankCard
                    ranking={courseRank}
                    title="Najwięcej dodanych kursów"
                />
                <RankCard title="Twój ranking" userRank={userInfo} />
                <RankCard
                    ranking={activityRank}
                    title="Najaktywniejsi użytkownicy"
                />
            </div>
        </div>
    )
}

export default RankSection

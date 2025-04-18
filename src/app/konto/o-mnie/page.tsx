import { getCurrentUser } from '@/app/_actions/auth'
import AvatarForm from '@/app/_components/_panel/AvatarForm'
import MoreInfoForm from '@/app/_components/_panel/MoreInfoForm'
import PersonalForm from '@/app/_components/_panel/PersonalForm'
import SocialForm from '@/app/_components/_panel/SocialForm'
import { getGenders } from '@/app/_lib/data-service'

async function page() {
	const genders = await getGenders()
	const currentUser = await getCurrentUser()

	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">O mnie</h1>
			<div className="w-full flex flex-wrap gap-7 justify-evenly items-start">
				<div className="w-full flex flex-col gap-7 items-center lg:gap-20 2xl:gap-28 md:max-w-md">
					<PersonalForm genders={genders.value} user={currentUser} />
					<MoreInfoForm user={currentUser} />
				</div>
				<div className="w-full flex flex-col gap-7 items-center lg:gap-20 2xl:gap-28 md:max-w-md">
					<AvatarForm user={currentUser} />
					<SocialForm user={currentUser} />
				</div>
			</div>
		</section>
	)
}

export default page

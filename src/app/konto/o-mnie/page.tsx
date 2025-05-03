import { getCurrentUser } from '@/app/_actions/auth'
import AboutMeDescription from '@/app/_components/_panel/AboutMeDescription'
import AvatarForm from '@/app/_components/_panel/AvatarForm'
import MoreInfoForm from '@/app/_components/_panel/MoreInfoForm'
import PersonalForm from '@/app/_components/_panel/PersonalForm'
import SocialForm from '@/app/_components/_panel/SocialForm'
import { getGenders } from '@/app/_lib/data-service'

async function page() {
	const genders = await getGenders()
	const currentUser = await getCurrentUser()

	return (
		<>
			<section className="w-full px-4 lg:px-6 pb-8">
				<h1 className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">O mnie</h1>
				<div className="w-full flex flex-wrap gap-14 justify-evenly items-stretch">
					<div className="w-full flex flex-col gap-14 items-center xl:justify-between lg:gap-20 2xl:gap-28 md:max-w-md 2xl:max-w-lg xl:order-2">
						<PersonalForm genders={genders.value} user={currentUser} />
						<MoreInfoForm user={currentUser} />
					</div>
					<div className="w-full flex flex-col gap-14 items-center  lg:gap-20 2xl:gap-28 md:max-w-md 2xl:max-w-lg xl:order-1">
						<AvatarForm user={currentUser} />
						<SocialForm user={currentUser} />
					</div>
				</div>
				<div className="flex w-full  justify-center pt-14 lg:pt-20 2xl:pt-28">
					<AboutMeDescription user={currentUser} />
				</div>
			</section>
		</>
	)
}

export default page

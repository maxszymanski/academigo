import UserAvatar from '../_ui/UserAvatar'

function CommentCard() {
	return (
		<div className="flex flex-col sm:flex-row gap-3 sm:gap-7 py-7 sm:py-10 md:px-10 md:gap-12 px-4 xl:py-11">
			<div className="w-fit flex-shrink-0 flex sm:flex-col gap-3 items-center">
				<UserAvatar href={`/profil/`} size="h-12 w-12 sm:h-24 sm:w-24 " />
				<p className=" font-medium text-primary">Maksymilian</p>
			</div>
			<div className="flex flex-col justify-between gap-6 sm:gap-10  lg:max-w-xl ">
				<p className="text-dark2/85 text-sm leading-[170%] sm:leading-[170%]">
					with your budget in mind, it is easy to plan a chartered yacht vacation. Companies often have a
					fleet of sailing vessels that can accommodate parties of various sizes.
				</p>
				<p className="text-xs text-dark2/75">11 Maja 2025</p>
			</div>
		</div>
	)
}

export default CommentCard

function PostHeader({ title, description, createdAt }: { title: string; description: string; createdAt: string }) {
	return (
		<header className=" pt-12 md:pt-0 md:pb-8 lg:pb-0">
			<div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
				<div className="flex h-full w-full flex-col justify-center gap-4 py-10 text-center text-primary/90 md:w-2/3 lg:w-1/2 md:items-start md:py-0 md:text-left lg:py-16 lg:pl-6 2xl:gap-8 xl:pl-24">
					<h1 className="w-full text-xl font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
						{title}
					</h1>
					<p className="leading-[170%] text-xs md:text-sm lg:text-base md:!leading-[170%]  text-dark2/85 flex flex-col ">
						{description} <span className="block text-dark2/80 mt-3 sm:mt-5 text-sm ">{createdAt}</span>
					</p>
				</div>
			</div>
		</header>
	)
}

export default PostHeader

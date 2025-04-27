function CourseDescription({ description }: { description: string }) {
	return (
		<div>
			<p>Opis</p>
			{description.split('\n').map((paragraph, idx) => (
				<p className="leading-[170%] text-base mb-4" key={idx}>
					{paragraph}
				</p>
			))}
		</div>
	)
}

export default CourseDescription

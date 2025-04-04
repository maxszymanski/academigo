import Image from 'next/image'
import Link from 'next/link'

export default function CoursePage({
	// przykładowe dane, docelowo będą dynamiczne z API lub propsów
	course = {
		title: 'React od podstaw',
		author: 'Jan Kowalski',
		platform: 'Udemy',
		thumbnail: '/images/react-course.jpg',
		level: 'Początkujący',
		duration: '5h 30min',
		price: '129 zł',
		description: 'Naucz się Reacta od podstaw w praktycznym kursie krok po kroku.',
		skills: ['JSX', 'Componenty', 'Hooki', 'State', 'Props'],
		requirements: ['Podstawy HTML i JS'],
		certificate: true,
		url: 'https://udemy.com/kurs-react',
	},
}) {
	return (
		<main className="max-w-4xl mx-auto px-4 py-8">
			<div className="flex flex-col md:flex-row gap-8">
				<div className="w-full md:w-1/2 relative aspect-video">
					<Image src={course.thumbnail} alt={course.title} fill className="object-cover rounded-2xl" />
				</div>

				<div className="w-full md:w-1/2 space-y-4">
					<h1 className="text-3xl font-bold">{course.title}</h1>
					<p className="text-muted-foreground">{course.description}</p>
					<p className="text-sm">
						Autor: <span className="font-medium">{course.author}</span> ({course.platform})
					</p>
					<p className="text-sm">Poziom: {course.level}</p>
					<p className="text-sm">Czas trwania: {course.duration}</p>
					<p className="text-sm">
						Cena: <span className="font-semibold">{course.price}</span>
					</p>
					<p className="text-sm">Certyfikat: {course.certificate ? 'Tak' : 'Nie'}</p>

					<Link
						href={course.url}
						target="_blank"
						className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
						Przejdź do kursu
					</Link>
				</div>
			</div>

			<div className="mt-8 grid md:grid-cols-2 gap-6">
				<div>
					<h2 className="text-xl font-semibold mb-2">Czego się nauczysz</h2>
					<ul className="list-disc list-inside text-sm">
						{course.skills.map((skill, i) => (
							<li key={i}>{skill}</li>
						))}
					</ul>
				</div>

				<div>
					<h2 className="text-xl font-semibold mb-2">Wymagania</h2>
					<ul className="list-disc list-inside text-sm">
						{course.requirements.map((req, i) => (
							<li key={i}>{req}</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	)
}

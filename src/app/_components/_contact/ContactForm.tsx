'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../_ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import PanelInput from '../_ui/PanelInput'
import toast from 'react-hot-toast'
import { contactSchema, ContactType } from '@/app/_lib/validators'
import { sendEmail } from '@/app/_actions/contact'

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactType>({ resolver: zodResolver(contactSchema) })
	const [isPending, startTransition] = useTransition()

	const onSubmit: SubmitHandler<ContactType> = data => {
		startTransition(async () => {
			const formData = new FormData()
			formData.append('name', data.user_name)
			formData.append('email', data.user_email)
			formData.append('message', data.user_message)

			const response = await sendEmail(formData)

			if (response.status === 'success') {
				toast.success('Twoja wiadomość została wysłana')
			} else {
				toast.error('Twoja wiadomość nie została wysłana')
			}
		})
	}

	return (
		<form
			className={`text-primary  mx-auto flex h-fit w-full max-w-md flex-col rounded-2xl bg-linear-to-r px-4 py-8 shadow-xl border shadow-slate50 border-slate-200 transition-colors duration-300 sm:px-6 ${isPending ? 'cursor-wait' : 'cursor-auto'}`}
			onSubmit={handleSubmit(onSubmit)}>
			<h3 className="mb-8 text-center text-[28px] font-medium xl:text-3xl">Napisz do nas</h3>
			<PanelInput
				name="user_email"
				label="Adres Email"
				type="email"
				formRegister={register('user_email')}
				error={errors?.user_email || null}
				message={errors?.user_email?.message || null}
				disabled={isPending}
			/>
			<PanelInput
				name="user_name"
				label="Imię"
				type="text"
				formRegister={register('user_name')}
				error={errors?.user_name || null}
				message={errors?.user_name?.message || null}
				disabled={isPending}
			/>

			<PanelInput
				textArea
				name="user_message"
				label="Wiadomość"
				type="text"
				formRegister={register('user_message')}
				error={errors?.user_message || null}
				message={errors?.user_message?.message || null}
				disabled={isPending}
			/>
			<Button variant="submit" restClass="my-4 " disabled={isPending}>
				{isPending ? 'Wysyłanie...' : 'Wyślij'}
			</Button>
		</form>
	)
}

export default ContactForm

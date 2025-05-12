'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../_ui/Button'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'

function CommentForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ChangePasswordType>({
		resolver: zodResolver(changePasswordSchema),
	})

	const onSubmit: SubmitHandler<ChangePasswordType> = async data => {
		const result = await updatePassword(data)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Twój komentarz został dodany')
		}
		reset()
	}

	return (
		<div className="pt-14 pb-6 md:pt-20 xl:pt-24 xl:pb-20">
			<h2 className="text-3xl sm:text-4xl pb-8 md:pb-10 text-dark2/85 font-bold ">Zostaw Komentarz</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<textarea
					placeholder="Twój komentarz"
					className={`peer block max-h-32 min-h-32 w-full max-w-3xl  resize-y appearance-none border  text-sm outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300  placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 px-5 py-3.5 rounded-lg  bg-white border-slate-200 hover:border-slate-300`}
					name="comment"
					lang="pl"
				/>
				<Button
					variant="white"
					restClass="mt-4 xl:mt-6 border border-slate-200 !py-3.5 !px-12 !text-dark2/90 !rounded-xl">
					Wyślij
				</Button>
			</form>
			{/* <p className="text-dark2/90">Tylko zalogowani użytkownicy mogą dodawać komentarze.</p> */}
		</div>
	)
}

export default CommentForm

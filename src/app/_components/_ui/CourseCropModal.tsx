import useAppStore from '@/app/stores/store'
import { useRef } from 'react'
import Modal from './Modal'
import Button from './Button'
import Cropper, { Area } from 'react-easy-crop'

function CourseCropModal({
	preview,
	handleChange,
	handleCloseAvatarModal,
	crop,
	setCrop,
	showCroppedImage,
}: {
	preview: string
	handleChange: (a: Area, b: Area) => void
	handleCloseAvatarModal: () => void
	crop: { x: number; y: number }
	setCrop: (crop: { x: number; y: number }) => void
	showCroppedImage: () => Promise<void>
}) {
	const modalRef = useRef<HTMLDivElement | null>(null)

	const openModal = useAppStore(state => state.openModal)

	if (openModal != 'course-crop-modal') return null

	return (
		<Modal modalRef={modalRef} closeModal={handleCloseAvatarModal} fullPageModal buttonId="change-course-img">
			<div className="p-4 lg:py-8 lg:px-16 flex flex-col justify-center">
				<>
					<div className="relative w-full  h-96 max-w-96 lg:w-[600px]  rounded-xl  overflow-hidden block cursor-pointer mt-1 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300  hover:border-slate-400 self-center ">
						<Cropper
							image={preview}
							crop={crop}
							onCropChange={setCrop}
							onCropComplete={handleChange}
							aspect={7 / 4}
						/>
					</div>
				</>
				<div className="flex items-center flex-wrap justify-center gap-5 sm:gap-8 pt-8 pb-4">
					<Button variant="submit" id="crop" restClass="2xl:!text-base w-[177px]" onClick={showCroppedImage}>
						Przytnij
					</Button>
					<Button variant="danger" onClick={handleCloseAvatarModal} restClass="2xl:!text-base min-w-[177px] ">
						Anuluj
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default CourseCropModal

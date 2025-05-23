import useAppStore from '@/app/stores/store'
import { useRef } from 'react'
import Modal from './Modal'
import Button from './Button'
import Cropper, { Area } from 'react-easy-crop'

function CropModal({
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

	if (openModal != 'crop-modal') return null

	return (
		<Modal modalRef={modalRef} closeModal={handleCloseAvatarModal} fullPageModal buttonId="change-avatar">
			<div className="p-4 lg:py-8 lg:px-16 flex flex-col justify-center">
				<div className="relative max-w-[240px] h-[240px]   sm:h-96 w-96 sm:max-w-full lg:w-[600px]  rounded-xl  overflow-hidden block cursor-pointer mt-1 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300  hover:border-slate-400 self-center ">
					<Cropper
						image={preview}
						crop={crop}
						aspect={1}
						onCropChange={setCrop}
						onCropComplete={handleChange}
						cropShape="round"
					/>
				</div>

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

export default CropModal

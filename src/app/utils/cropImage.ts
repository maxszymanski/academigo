import { Area } from 'react-easy-crop'

export const getCroppedImg = async (imageSrc: string | null, pixelCrop: Area | null): Promise<File | null> => {
	const image = new Image()
	if (!imageSrc || !pixelCrop) {
		return null
	}
	image.src = imageSrc
	await new Promise(resolve => (image.onload = resolve))

	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')

	if (!ctx) {
		return null
	}

	const cropWidth = pixelCrop.width
	const cropHeight = pixelCrop.height
	canvas.width = cropWidth
	canvas.height = cropHeight

	// ctx.drawImage(image, crop.x * -zoom, crop.y * -zoom, width * zoom, height * zoom)
	ctx.drawImage(image, -pixelCrop.x, -pixelCrop.y)

	const croppedCanvas = document.createElement('canvas')

	const croppedCtx = croppedCanvas.getContext('2d')

	if (!croppedCtx) {
		return null
	}

	// Set the size of the cropped canvas
	croppedCanvas.width = 320
	croppedCanvas.height = 320

	// Draw the cropped image onto the new canvas
	croppedCtx.drawImage(
		canvas,
		pixelCrop.x,
		pixelCrop.y,
		pixelCrop.width,
		pixelCrop.height,
		0,
		0,
		pixelCrop.width,
		pixelCrop.height
	)

	return new Promise(resolve =>
		canvas.toBlob(blob => {
			if (blob) {
				// Tworzenie obiektu File na podstawie Blob
				const file = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' })
				resolve(file)
			}
		}, 'image/jpeg')
	)
}

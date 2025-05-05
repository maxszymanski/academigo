export const getCroppedImg = async (imageSrc: string, crop: { x: number; y: number }, zoom: number): Promise<Blob> => {
	const image = new Image()
	image.src = imageSrc
	await new Promise(resolve => (image.onload = resolve))

	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')!
	const width = image.width
	const height = image.height

	const cropWidth = width * zoom
	const cropHeight = height * zoom

	canvas.width = cropWidth
	canvas.height = cropHeight

	ctx.drawImage(image, crop.x * -zoom, crop.y * -zoom, width * zoom, height * zoom)

	return new Promise(resolve =>
		canvas.toBlob(blob => {
			if (blob) resolve(blob)
		}, 'image/jpeg')
	)
}

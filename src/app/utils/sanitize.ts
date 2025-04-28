import { JSDOM } from 'jsdom'
import DOMPurify from 'dompurify'

const window = new JSDOM('').window
const purify = DOMPurify(window)

export function sanitizeHTML(dirty: string) {
	return purify.sanitize(dirty)
}

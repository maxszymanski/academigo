import { pl } from 'date-fns/locale'
import { format } from 'date-fns'

export const formattedDate = (date: string) => {
	return format(new Date(date), 'd MMMM yyyy', { locale: pl })
}

export const formattedDateWithHour = (date: string) => {
	return format(new Date(date), 'd MMMM yyyy HH:mm', { locale: pl })
}

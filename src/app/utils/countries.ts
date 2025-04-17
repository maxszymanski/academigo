import countries from 'i18n-iso-countries'
import pl from 'i18n-iso-countries/langs/pl.json'

countries.registerLocale(pl)

const countryNames = countries.getNames('pl', { select: 'official' })
export const countryOptions = Object.values(countryNames)

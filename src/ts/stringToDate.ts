export default function stringToDate(text: string): Date {
  const [date, time] = text.split(' '),
        [day, month, year] = date.split('/').map(Number),
        [hour, minute] = time.split(':').map(Number)

  return new Date(year, month - 1, day, hour, minute)
}

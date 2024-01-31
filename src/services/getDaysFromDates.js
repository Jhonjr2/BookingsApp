
const getDaysFromDates = (date1, date2) => {

  const initialDate = new Date(date1)
  const finalDate = new Date(date2)

  const difference = finalDate.getTime() - initialDate.getTime()

  const differenceDays = difference / (1000 * 60 * 60 * 24)
    
  return differenceDays + 1
}

export default getDaysFromDates
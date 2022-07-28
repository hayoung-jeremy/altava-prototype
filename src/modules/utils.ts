export function cls(...classnames: string[]) {
  return classnames.join(" ")
}

export const generateRandomColor = () => {
  let colorArr = []
  for (let times = 0; times < 10; times++) {
    colorArr.push("#" + Math.random().toString(16).slice(-6))
  }
  return colorArr
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export function ChangeTimeFormat(time: string) {
  let result = ""
  const MM = new Date(time).getMonth()
  const dd = new Date(time).getUTCDate()
  const yyyy = new Date(time).getFullYear()
  // const hh = new Date(time).getHours()
  // const mm = new Date(time).getUTCMinutes()
  result = `${months[MM]} ${dd} ${yyyy}`
  return result
}

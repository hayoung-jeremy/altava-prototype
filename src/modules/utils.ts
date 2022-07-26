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

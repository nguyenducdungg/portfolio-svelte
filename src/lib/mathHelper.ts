export function minMax(value: number, min = 0, max = 1){
  return Math.min(Math.max(value, min),max)
}

export function lerp(value1: number, value2: number, amount: number){
  amount = minMax(amount)
  return value1 + (value2 - value1) * amount
}

export function newRange(range: number, newStart: number, newEnd: number){
  const newLength = newEnd - newStart
  return minMax((range - newStart)/newLength)
}

export function getProcessFactory(animationTime: number, length: number) {
  return ( indexNo: number, prog: number) => {
  const start = (1- animationTime) * (indexNo+1) / length
  return minMax((prog - start) / animationTime)
}
}

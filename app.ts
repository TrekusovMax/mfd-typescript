interface Price {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = (props: Price): number => {
  const { price, discount, isInstallment, months } = props
  if (isInstallment) {
    return (price * (1 - discount / 100)) / months
  } else {
    return price / months
  }
}

const result = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(result)

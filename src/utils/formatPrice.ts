export function FormatPrice(price: number) {
  return price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
}

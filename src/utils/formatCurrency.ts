export function formatCurrency(value: number) {
  const currnecy = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  })

  return currnecy.format(value).replace("R$","")
}
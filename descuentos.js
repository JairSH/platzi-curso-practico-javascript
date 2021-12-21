
function calcularPrecioConDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

  return precioConDescuento
}

// Calculo de precio con descuento

const arrayDiscount = [
  '5',
  '10',
  '15'
]

function priceDiscount() {
  const inputPrice = document.getElementById('inputPrice')
  const priceValue = inputPrice.value

  const inputDiscount = document.getElementById('inputDiscount')
  const valueDiscount = inputDiscount.value

  let descuento

  switch (valueDiscount) {
    case arrayDiscount[0]:
      descuento = 5
      break
    case arrayDiscount[1]:
      descuento = 10
      break
    case arrayDiscount[2]:
      descuento = 15
      break
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)
  const resultP = document.getElementById('resultP')
  resultP.innerText = precioConDescuento
}

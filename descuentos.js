
function calcularPrecioConDescuento (precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

  return precioConDescuento
}

// Calculo de precio con descuento

function priceDiscount() {
  const inputPrice = document.getElementById('inputPrice')
  const priceValue = inputPrice.value

  const inputDiscount = document.getElementById('inputDiscount')
  const discountValue = inputDiscount.value

  const precioTotal = calcularPrecioConDescuento(priceValue, discountValue)
  const resultP = document.getElementById('resultP')
  resultP.innerHTML = 'El precio con descuento es de: $' + precioTotal
}

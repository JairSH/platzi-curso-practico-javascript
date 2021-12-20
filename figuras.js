// Codigo del Cuadrado

console.group('Cuadrados')
const ladoCuadrado = 5
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm')

function perimetroCuadrado(lado) {
  return lado * 4
}
// console.log('El perimetro del cuadrado es igual: ' + perimetroCuadrado + 'cm')

function areaCuadrado(lado) {
  return lado * lado
}
// console.log('El area del cuadrado es igual: ' + areaCuadrado + 'cm2')

console.groupEnd()

// Codigo del triangulo

console.group('Triangulos')

/*
const ladoTriangulo = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

  console.log(
  'Los lados del Triangulo son: ' +
  ladoTriangulo + 'cm' +
  ', ' +
  ladoTriangulo2 + 'cm' +
  ', ' +
  baseTriangulo + 'cm') */

function perimetroTriangulo (lado1, lado2, base) {
  return lado1 + lado2 + base
}
// console.log('El perimetro del triangulo es: ' + perimetroTriangulo + 'cm')

function areaTriangulo (base, altura) {
  return ((base * altura) / 2)
}
// console.log('El area del triangulo es: ' + areaTriangulo + 'cm2')

console.groupEnd()

// Codigo del circulo
console.group('Circulos')

// Radio
// const radioCirculo = 4
// console.log('El radio del circulo es de: ' + radioCirculo + 'cm')

// Diametro
function diametroCirculo(radio) {
  return radio * 2
}

// console.log('El diametro del circulo es de: ' + diametroCirculo + 'cm')

// PI
const pi = 3.1415
// console.log('La medida de pi es de: ' + pi)

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * pi
}

// console.log('La circunferencia del circulo es de: ' + perimetroCirculo + 'cm')

// Area
function areaCirculo(radio) {
  return (radio * radio) * pi
}

// console.log('El area del circulo es de: ' + areaCirculo + 'cm2')

console.groupEnd()

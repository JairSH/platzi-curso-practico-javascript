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

// Interaccion con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado')
  const value = input.value

  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}

// Validar triangulo isoceles



function validarTrianguloIsoceles () {
  const inputLado1 = document.getElementById('inputLado1Triangulo')
  const valueLado1 = inputLado1.value
  
  const inputLado2 = document.getElementById('inputLado2Triangulo')
  const valueLado2 = inputLado2.value
  
  if (valueLado1 === valueLado2) {
    alert('Triangulo isoceles')
  } else {
    alert('no es un triangulo isoceles')
  }
}

function alturaTriangulo (lado1, lado2, base) {
  const ladoCuadrado = lado1 * lado2
  const baseCuadrado = (base * base) / 4
  const altura = ladoCuadrado - baseCuadrado
  return Math.sqrt(altura)
}

function calcularAlturaTriangulo () {
  const inputBase = document.getElementById('inputBaseTriangulo')
  const valueBase = inputBase.value
  const inputLado1 = document.getElementById('inputLado1Triangulo')
  const valueLado1 = inputLado1.value
  const inputLado2 = document.getElementById('inputLado2Triangulo')
  const valueLado2 = inputLado2.value

  const altura = alturaTriangulo(valueLado1, valueLado2, valueBase)
  alert(altura)
}

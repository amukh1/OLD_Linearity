import linearAlgebra from './linearAlgebra.js'
import calculus from './calculus.js'

let {partial, gradient, gradientDescent} = calculus

// function f3(x, y) {
//   return x * x + 2 * y
// }

// function f2(x) {
//   return x*x
// }

// console.log(partial(f3, 0)(8, 3))
// console.log(gradient(f3)(4, 5))
// console.log(gradient(f2)(6))
// let estm = gradientDescent(f2, 100, 2)
// console.log(estm)
// console.log(f2(estm[0]))

let pack = {linearAlgebra, calculus}

export default pack
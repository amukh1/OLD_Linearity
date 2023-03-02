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

function gradientDescent(fn, n, dim) {
    let vars = dim - 1
    let c = []
    range(vars).forEach(()=>{
      c.push(Math.random() * 100)
    })
    for(var i = 0; i<n; i++) {
      let g = gradient(fn).apply(null, c)
      c.forEach((d,h)=>{
        c[h] = c[h] - 0.1*g[h]
      })
    }
    return c
  }
  
  function gradient(fn) {
    return function() {
      let args2 = Object.keys(arguments)
      args2 = args2.map((x)=>{
        return arguments[x]
      })
      let args = Object.entries(arguments)
      let ret = []
      Object.keys(arguments).forEach(function(key, i) {
        // console.log(args2, i)
        // console.log(args[i][1])
        // console.log(partial(fn, i))
        ret.push(partial(fn, i).apply(null, args2))
      });
  
      return ret
    }
  }
  
  function partial(fn, i) {
    return function() {
      let arg = fn.apply(null, arguments)
      let arg2 = arguments
      arg2[i.toString()] += 0.01
      // console.log(arg,arg2)
      return (fn.apply(null, arg2) - arg) / 0.01
    }
  }
  
  function range(i) {
    let v = []
    for(var k = 0; k<i; k++) {
      v.push(0)
    }
    return v
  }
  
  function derivative(f, x) {
    return (f(x + 0.001) - f(x))/0.001
  }
  
  function differentiate(f) {
    return function(x) {
      return derivative(f,x)
    }
  }
  
  let exp = {gradientDescent, gradient, partial, derivative, differentiate}
  
  export default exp
  export {gradientDescent, gradient, partial, derivative, differentiate}
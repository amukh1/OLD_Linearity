class vector {
    constructor(d) {
      this.v = d
      this.dim = d.length
    }
  
    scale(s) {
      let res = this.v
      res.forEach((x, i) => {
        return res[i] = x * s
      })
      return new vector(res)
    }
  
    add(v) {
      let res = this.v
      res.forEach((x, i) => {
        return res[i] = x + v.v[i]
      })
      return new vector(res)
    }
  
    dot(v) {
      let res = 0
      for (var i = 0; i < this.dim; i++) {
        res += this.v[i] * (v.v[i])
      }
      return res
    }
    cross(v) { }
    magnitude() {
      return Math.sqrt(Math.pow(this.v[0], 2) + Math.pow(this.v[1], 2))
    }
    unit() {
      return new vector([this.v[0] / this.magnitude(), this.v[1] / this.magnitude()])
    }
  }
  
  class matrix {
    constructor(val) {
      this.dim = [val.length, val[0].length]
      this.v = val
    }
  
    gaussian() { }
    det() { }
    mult() { }
    transform(v) {
      let i = new vector(this.v[0])
      let j = new vector(this.v[1])
  
      return i.sc(v.v[0]).a(j.sc(v.v[1]))
    }
  
    nullSpace() {
      // return new space()
    }
  
    columnSpace() {
  
    }
  
    eigenSpace() {
  
    }
  
    eigenValues() {
  
    }
  
    eigenVectors() {
  
    }
  }
  
  class space {
    constructor(dim) {
      this.dim = dim
      this.basii = [[], ['i'], ['i', 'j'], ['i', 'j', 'k']][dim]
    }
  
    includes() { }
  }
  
  class complex {
    constructor(a, b) {
      this.c = new vector([a, b]) // a + bi
    }
  }
  
  // module.exports = { vector, matrix, space }
  let exp = {vector, matrix, space}
  export default exp
  export {vector, matrix, space}
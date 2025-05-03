// let alreadyInvoked = false
let obj = null
function myRequire() {
  if (!obj) obj = { x: 42 }
  obj.x++
  return obj
}

let result
result = myRequire()
console.log(result)

result = myRequire()
console.log(result)

result = myRequire()
console.log(result)

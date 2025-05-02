function fx1() {
  fx2()
  fx3()
  console.log('hello1')
}
function fx2() {
  fx3()
  console.log('hello2')
}
function fx3() {
  console.log('hello3')
}
fx1()

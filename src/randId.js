const randId = () =>
  Math.trunc(Math.random() * 0xffffffff)
    .toString(16)
    .padStart(8, '0')

module.exports = randId

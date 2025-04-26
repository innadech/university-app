function countChars(array) {
  return array.reduce((acc, item) => acc + item.length, 0)
}

const book = {
  words: ['foo', 'bar', 'baz', 'hello', 'world'],

  get countWords() {
    return this.words.length
  },

  // get countChars() {
  //   return this.words.reduce((acc, word) => {
  //     return acc + word.length
  //   }, 0)
  // },

  get countWordsChars() {
    return countChars(this.words)
  },

  get smallWords() {
    return this.words.filter(w => w.length <= 3)
  },

  get countSmallWordsChars() {
    return countChars(this.smallWords)
  },
}

console.log(book.countWords)

console.log(book.countWordsChars)

console.log(book.smallWords)

console.log(book.countSmallWordsChars)

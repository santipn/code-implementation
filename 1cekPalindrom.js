const cekPalindrom = (kata) => {
    const arrayPal = kata.split('')
    const reverseArrayPal = arrayPal.reverse()
    const reverseKata = reverseArrayPal.join('')
    
    if(kata == reverseKata) {
        console.log(`${kata} adalah Palindrom`)
    } else {
        console.log(`${kata} bukan Palindrom`)
    }
}

cekPalindrom('malam')


// const cekPalindrom = (kata) => {
//     if (i < kata.length/2) {
//         if (kata.charAt(i) !== kata.charAt(kata.length()-i-1)) {
//             return false
//         } else {
//             return cekPalindrom(kata, i+1)
//         }
//     } else {
//             return true
//     }
// }
// console.log(cekPalindrom('malam'))

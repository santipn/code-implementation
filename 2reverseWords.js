const reverseWords = (kalimat) => {
    let hasil = kalimat.split(' ')
    if (typeof kalimat !== 'string') {
        console.error ('Input harus string')
    } else if (hasil.length < 2) {
        console.error ('Input minimal 2 kata')
    } else {
        console.log(hasil.reverse().join(' '))
    }
}

reverseWords('Saya Belajar Javascript')

function FazzFood(harga, voucher, jarak, pajak) {
    let potonganHarga = 0
    if(voucher == "FAZZFOOD50" && harga >= 50000) {
        potonganHarga = harga * 0.5;
        if(potonganHarga >= 50000) {
            potonganHarga = 50000;
        }
    } else if (voucher == "DITRAKTIR60" && harga >= 25000) {
        potonganHarga = harga * 0.6;
        if(potonganHarga >= 30000) {
            potonganHarga = 30000;
        }
    } else {
        return "Harga tidak memenuhi pemesanan minimal"
    }

    let biayaAntar = 0
    if (jarak <= 2) {
        biayaAntar = 5000
    } else {
        biayaAntar = 5000 + (jarak - 2) * 3000
    }

    if (pajak == true) {
        pajak = 0.05 * harga
    } else {
        pajak = false
        return "Tidak dikenakan pajak"
    }

    let subTotalHarga = harga - potonganHarga + biayaAntar + pajak
    return (`Harga  : ${harga}
    Potongan    : ${potonganHarga}
    Biaya Antar : ${biayaAntar}
    Pajak       : ${pajak}
    SubTotal    : ${subTotalHarga}`
    )

}
console.log(FazzFood(75000, 'FAZZFOOD50', 5, true))

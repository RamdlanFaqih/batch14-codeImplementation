function pijarFood(harga, voucher, jarak, pajak){
    let diskon = 0;
        if( voucher ==='PIJARFOOD5' && harga >= 50000){
            diskon = Math.min(harga * 0.5, 50000)
        }else if( voucher ==='DITRAKTIRPIJAR' && harga >= 25000){
            diskon = Math.min(harga * 0.6, 30000)
        }else {
            diskon = false
        }

    let ongkir = 0;
    if(jarak <= 2){
        ongkir = 5000
    }else {
        ongkir = 5000 + ((jarak - 2) * 3000)
    }

    let hargaPajak = 0;
    if(pajak === true){
        hargaPajak = harga * 0.05
    }

    let total = harga - diskon + ongkir + hargaPajak;
    console.log("harga :" + harga);
    
    console.log("potongan :" + diskon);
    console.log("biaya antar :" + ongkir);
    console.log("pajak :" + hargaPajak)
    console.log("sub total :" + total);
}

pijarFood(50000, 'PIJARFOOD5', 3, true);

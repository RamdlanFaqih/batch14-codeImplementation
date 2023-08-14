function reverseWord(kalimat) {
    let perKata = kalimat.split(' ');
    perKata.reverse();

    let kalimatTerbalik = perKata.join(' ');

    return kalimatTerbalik;
}

let kalimat = "Saya Belajar Javascript"
let kalimatTerbalik = reverseWord(kalimat);

console.log(kalimatTerbalik);
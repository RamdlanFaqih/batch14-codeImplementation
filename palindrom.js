// let kata = "ibu ubi";
// function deteksiPalindrom(input) {
//     let word = kata.toLowerCase().split(" ").join("");
//     let reverseWord = [...word].reverse().join("");
// console.log(word, reverseWord)
//     if (word === reverseWord) {
//         console.log("Palindrom");
//     } else {
//         console.log("bukan palindrom");
//     }
// }

// deteksiPalindrom(kata);

let kata = "IbU uBi";
const deteksiPalindrom = (input) => {
    let word = input.toLowerCase().split(" ").join("");
    let reverseWord = [...word].reverse().join("");
    // console.log(word, reverseWord)
    if (word === reverseWord) {
        console.log("Palindrom");
    } else {
        console.log("bukan palindrom");
    }
}

deteksiPalindrom(kata);

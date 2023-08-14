
// function divideAndSort(num){
//     let numArray = num.split(0);
//     let sortedNumbers = numArray.map(Number).sort((a, b) => a - b);
//     let combinedString = numArray.join('');
//     let combinedNumbers = parseInt(combinedString, 10);

//     console.log(numArray)
//     console.log(sortedNumbers)
//     console.log(combinedString)
//     console.log(combinedNumbers)
    
// }

// divideAndSort('5956560159466056');

function divideAndSort(num) {
    let string = num.toString();
    let numArray = string.split(0);

    console.log(numArray)
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] = numArray[i].split('').sort().join('');
      }

      let resultString = numArray.join('');

      let numResults = parseFloat(resultString);
      
      console.log(numResults);
}

divideAndSort(5956560159466056);
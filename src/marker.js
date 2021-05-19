class Marker {
  constructor (size, color, remainingInk) {
    this.size = size
    this.color = color
    this.remainingInk = remainingInk
  }

  write(string) {
    if (this.remainingInk === 0) {
      string = ''
      return string
    } else if (this.remainingInk > string.length) {
      let strFiltered = string.replaceAll(' ', '')
      this.remainingInk -= strFiltered.length
      return string
    } else if (this.remainingInk < string.length) {
      function writeSpaces (string, remainingInk) {
        let strArr = string.split('')
        let strArrNew = []
        for (let i = 0; i < strArr.length; i++) {
          if (remainingInk > 0 && strArr[i] !== ' ') {
            strArrNew.push(strArr[i])
            remainingInk--
          } else if (strArr[i] === ' '){
            strArrNew.push(strArr[i])
          }
        }
        let stringNew = strArrNew.join('')
        return stringNew
      }
      return writeSpaces(string, this.remainingInk)
    }
  }
}

let markerTest = new Marker(1, 'blue', 30);
markerTest.write('Hello World');

console.log(markerTest)

module.exports = Marker





// The most commonly used solution to remove desired characters from the input string is to use the replaceAll() method. It replaces each substring of the string that matches the given regular expression with the specified replacement.

// For example, consider the following code, which removes all digits from the given string by passing regex [\d] to replaceAll() method.


// class Main
// {
//     public static String removeNumeric(String str) {
//         return str.replaceAll("[\\d]", "");
//     }

//     public static void main(String[] args)
//     {
//         String input = "A1B2C3D4E5";
//         System.out.println(removeNumeric(input));        // prints `ABCDE`
//     }
// }
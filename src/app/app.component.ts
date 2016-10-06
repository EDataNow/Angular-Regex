import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit () {}

// #1
// Match string on any position, non-case sensitive. Returns the whole string  


 matchOnAnyPosition(barcode, input_string){
    let input = `${input_string}`
    let regEx = new RegExp(input)
    let barcodeMatch = regEx.test(barcode);
  
    if (barcodeMatch) {
      return barcode
    } else {
      return "No Match"
    }
  }

// Case #2
// Case sensitive match on FIRST letter, returns the whole string

  matchOnFirstCharacter(barcode, input_string){
    let input = `^${input_string}`
    let regEx = new RegExp(input)
    let barcodeMatch = regEx.test(barcode);
  
    if (barcodeMatch) {
      return barcode
    } else {
      return "No Match"
    }
  }

// Case #3
// Match on any postion, case sensitive. returns the string proceeding from 
// match including the match

 matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string){
   let input = `${input_string}`
   let regEx = new RegExp(input)
   let barcodeMatch = regEx.exec(barcode);

   if (barcodeMatch) {
   let output = barcode.slice(barcodeMatch.index);
     return output
   } else {
     return "No Match"
   }
  }

// Case #4
// Match on any position, case sensitive. returns the string proceeding from match NOT 
// including the match

 matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string){
   let input = `${input_string}`
   let regEx = new RegExp(input)
   let barcodeMatch = regEx.exec(barcode);

   if (barcodeMatch) {
   let output = barcode.slice(barcodeMatch.index + input.length);
     return output
   } else {
     return "No Match"
   }
  }

// Case #5
// Match on any position, case sensitive. returns the string proceeding from match 
// including the match and specific length after the match

 matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, length){
   let input = `${input_string}`;
   let input_length = length
   let regEx = new RegExp(input)
   let match = regEx.exec(barcode);
    
   if (match) {
    return barcode.slice(match.index, match.index + input_length + input.length);
   } else {
     return "No Match"
   }
  }

// Case #6
// Match on any position, case sensitive. returns the string proceeding from match 
// not including the match and specific length after the match
matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, input_string, length){
   let input = `${input_string}`;
   let input_length = length 
   let regEx = new RegExp(input)
   let match = regEx.exec(barcode);
    
   if (match) {
    return barcode.slice(match.index + input.length, match.index + input.length + length);
   } else {
     return "No Match"
   }
  }

// Case #7
// Match on given index, include match.
 matchGivenIndexIncludeMatch(barcode, start){
   let start_index = start - 1
   let result = barcode.slice(start_index)
   return result;
}

// Case #8
// Match on given index, not include match.
 matchGivenIndexNotIncludeMatch(barcode, start){
   let start_index = start
   let result = barcode.slice(start_index)
   return result;
}

// Case #9
// Match on given index and given length, include match.
 matchGivenIndexAndSpecificLengthIncludeMatch(barcode, start, length){
   let start_index = start - 1
   let input_length = length + 1
   let result = barcode.slice(start_index, start_index + input_length);
   return result;
}

// Case #10
// Match on given index and given length, include match.
 matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, start, length){
   let start_index = start
   let input_length = length
   let result = barcode.slice(start_index, start_index + input_length);
   return result;
}


  

}
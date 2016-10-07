import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  ngOnInit () {}

regEx(input, barcode, index){
  let regEx = new RegExp(input);
  let match = regEx.exec(barcode);
  console.log(match[index]);

   if (match) {
    return match[index]
   } else {
     return null
   }
}


// #1
// Match string on any position, non-case sensitive. Returns the whole string


 matchOnAnyPosition(barcode, input_string){
  let input = `${input_string}` + '(.+)';
  let index = 0;
  return this.regEx(input, barcode, index);
}


// Case #2
// Case sensitive match on FIRST letter, returns the whole string

  matchOnFirstCharacter(barcode, input_string){
    let input = '^' + `${input_string}` + '(.+)';
    let index = 0;
    return this.regEx(input, barcode, index);
  }

// Case #3
// Match on any postion, case sensitive. returns the string proceeding from
// match including the match

 matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string){
   let input = `${input_string}` + '(.*)'
   let index = 0;
   return this.regEx(input, barcode, index);
  }

// Case #4
// Match on any position, case sensitive. returns the string proceeding from match NOT
// including the match

 matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string){
    let input = `${input_string}` + '(.*)' //input(.*)
    let index = 1;
    return this.regEx(input, barcode, index);
  }


// Case #5
// Match on any position, case sensitive. returns the string proceeding from match
// including the match and specific length after the match

 matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, length){
   let input = '(' + `${input_string}` + '.' + '{' + `${length}` +'})'; //(input.{length})
   let index = 0;
   return this.regEx(input, barcode, index);
  }

// Case #6
// Match on any position, case sensitive. returns the string proceeding from match
// not including the match and specific length after the match
matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, input_string, length){
   let input = `${input_string}`+ '(.' + '{' + `${length}` +'})'; //input(.{length})
   let index = 1;
   return this.regEx(input, barcode, index);
  }

// Case #7
  // Match on given index, include match.
  matchGivenIndexIncludeMatch(barcode, start){
    let input = `^.{${start - 1}}(.+)` //`^.{start - 1}(.+)`
    let index = 1;
    return this.regEx(input, barcode, index); 
  }

  // Case #8
  // Match on given index, exclude match.
  matchGivenIndexNotIncludeMatch(barcode, start){
    let input = `^.{${start}}(.+)` //^.{start}(.+)
    let index = 1;
    return this.regEx(input, barcode, index);  
  }

// Case #9
// Match on given index and given length, include match.
 matchGivenIndexAndSpecificLengthIncludeMatch(barcode, start, length){
 	 let input = '^.{' + `${start - 1}` +'}' + '(.{' + `${length + 1}` +'}).*'; //^.{start}(.{length}).*
 	 let index = 1;
   return this.regEx(input, barcode, index);
}

// Case #10
// Match on given index and given length, include match.
 matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, start, length){
   let input = '^.{' + `${start}` +'}' + '(.{' + `${length}` +'}).*'; //^.{start}(.{length}).*
 	 let index = 1;
   return this.regEx(input, barcode, index);
}
  //----------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------

	// Combined Methods
  
  // Case # 1 and case # 2 combined method
  // Must provide a BOOLEAN value set (match_from_index_0) to check if it is matching FROM Index_0
//   matchStringAndReturnWholeString(barcode, input_string, match_from_index_0) {
//     let input = match_from_index_0 ? `^${input_string}` : `${input_string}`
//     let regEx = new RegExp(input)
//     let barcodeMatch = regEx.test(barcode);

//       if (barcodeMatch) {
//         return barcode
//       } else {
//         return "No Match"
//       }
//   }

//   // Case # 3 and case # 4 combined method
//   // Must provide a boolean value set (include_match) to check if it is INCLUDING MATCH or NOT

//   matchAnyPositionReturnStringProceedingMatchIncludingOrNotIncludingMatch(barcode, input_string, include_match) {
//     let input = `${input_string}`
//     let regEx = new RegExp(input)
//     let barcodeMatch = regEx.exec(barcode);

//     if (barcodeMatch) {
//     let output = include_match ? barcode.slice(barcodeMatch.index) : barcode.slice(barcodeMatch.index + input.length);
//       return output
//     } else {
//       return "No Match"
//     }
//   }

//   // Case #5 and case #6 combined method
//   // Must provide a numeric value set for (length) a specific length they want after the match and a boolean value (include_match) set
//   // if they want to include or exclude the match in return.

//   anyPositionsMatchReturnStringProceedingbyLengthInculdeOrNotIncludeMatch (barcode, input_string, include_match, length) {
//     let input = `${input_string}`;
//     let input_length = length
//     let regEx = new RegExp(input)
//     let barcodeMatch = regEx.exec(barcode);
//     
//     if (barcodeMatch) {
//       let match_included = barcode.slice(barcodeMatch.index, barcodeMatch.index + input_length + input.length)
//       let match_excluded = barcode.slice(barcodeMatch.index + input.length, barcodeMatch.index + input.length + length);
//       let output = include_match ?  match_included :  match_excluded
//     
//       return output
//     } else {
//       return "No Match"
//     }
//   }

//   // Case #7 and case #8 combined method
//   // Must provide a (start_postion) and to include or not include_match

//   matchGivenIndexIncludeOrExcludeMatch(barcode, start_position, include_match) {
//     let match_included = start_position - 1;
//     let match_excluded = start_position
//     let start_index = include_match? match_included : match_excluded
//     let result = barcode.slice(start_index)
//     
//     return result;
//   }

//   // Case #9 and case #10 combined method
//   // Must provide a starting (start) position, return (length) length after the match and a boolean (include_match)
//   // to include or exclude match

//     matchGivenIndexAndSpecificLengthIncludeOrExcludeMatch(barcode, start, length, include_match) {
//       let start_index = include_match ? start - 1 : start
//       let input_length = include_match ? length + 1 : length
//       let result = barcode.slice(start_index, start_index + input_length);
//       return result;
//     }
//   }
}
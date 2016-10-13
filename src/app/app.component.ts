import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

includeMatch:boolean = true;
match_on_dropdown: number;
return_dropdown: number;
specificLength:number = 0;
startIndex:number = 0;

  ngOnInit () { }

      regExFunctionFilter(barcode, input_string, match_on_dropdown, return_dropdown, includeMatch, specificLength, startIndex) {
        const output = document.getElementById("output")
       // Case 1
        // if (this.caseOne(match_on_dropdown, return_dropdown, includeMatch)) {
        //     output.innerText = this.matchOnAnyPosition(barcode, input_string);
        // }
        // //Case 2
        // if (this.caseTwo(match_on_dropdown, return_dropdown, includeMatch)) {
        //     output.innerText = this.matchOnFirstCharacter(barcode, input_string);
        // }

        // //Case 3 & 4
        // if (this.caseThreeAndFour(match_on_dropdown, return_dropdown, includeMatch)) {
        //     if (includeMatch === "true"){
        //         output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string);
        //     } else {
        //        output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string);
        //     }
        // }

        // //Case 5 & 6
        // if (this.caseFiveAndSix(match_on_dropdown, return_dropdown, includeMatch, specificLength)) {
        //     if (includeMatch === "true"){
        //         output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, specificLength);
        //     } else {
        //        output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, input_string, specificLength);
        //     }
        // }

        //Case 1 & 2
        if (this.caseOneAndTwo(match_on_dropdown, return_dropdown, includeMatch, startIndex, specificLength, input_string)) {
            if (includeMatch === "true"){
                output.innerText = this. matchGivenIndexAndInputAndSpecificLengthIncludeMatch(barcode, input_string, parseInt(startIndex), parseInt(specificLength));
            } else {
                output.innerText = this.matchGivenIndexandInputAndSpecificLengthNotIncludeMatch(barcode, input_string, startIndex, specificLength)
            }
        }

         //Case 3 & 4
        if (this.caseThreeAndFour(match_on_dropdown, return_dropdown, includeMatch, startIndex, specificLength, input_string)) {
            if (includeMatch === "true"){
                output.innerText = this.matchGivenIndexAndSpecificLengthIncludeMatch(barcode, parseInt(startIndex), parseInt(specificLength));
            } else {
                output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength (barcode, input_string, length);
            }
        }

        //Case 5 & 6
        if (this.caseFiveAndSix(match_on_dropdown, return_dropdown, includeMatch, startIndex, input_string)) {
           if (includeMatch === "true"){
                output.innerText = this.matchGivenIndexAndInputIncludingMatchReturnProceedingString(barcode, parseInt(startIndex), input_string);
            } else {
                output.innerText = this.matchGivenIndexAndInputNotIncludingMatchReturnProceedingString(barcode, parseInt(startIndex), input_string);
            }
        }


        //Case 7 & 8
        if (this.caseSevenAndEight(match_on_dropdown, return_dropdown, includeMatch, specificLength)) {
           if (includeMatch === "true"){
                output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, specificLength);
            } else {
             output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength (barcode, input_string, specificLength);
            }
        }

        //Case 9 & 10
        if (this.caseNineAndTen(match_on_dropdown, return_dropdown, includeMatch)) {
           if (includeMatch === "true"){
                output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string);
            } else {
             output.innerText = this.matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string);
            }
        }

        //Case 11
        if (this.caseEleven(match_on_dropdown, return_dropdown)) {
          output.innerText = this.matchOnAnyPosition(barcode, input_string);
        }
      }


//Case #1
//Match on given index and input and given length, include match.
 matchGivenIndexAndInputAndSpecificLengthIncludeMatch(barcode, input_string, start, length){
    let input = '^.{' + `${start - 1}` + '}(' + `${input_string}` + '.{' + `${length}` + '})' // ^.{start}(input.{length})
    // let input = '^.{' + `${start - 1}` +'}' + '(.{' + `${length + 1}` +'}).*'; //^.{start}(.{length}).*
    let index = 1;
   return this.regEx(input, barcode, index);
}

// Case #2
// Match on given index and input and given length, exclude match.
 matchGivenIndexandInputAndSpecificLengthNotIncludeMatch(barcode, input_string, start, length){
   let input = '^.{' + `${start - 1}` + '}' + `${input_string}` + '(.{' + `${length}` + '})'; //^.{1}A(.{2})
    let index = 1;
   return this.regEx(input, barcode, index);
}

 //Case #3
 // Match on given index and given length, include match.
 matchGivenIndexAndSpecificLengthIncludeMatch(barcode, start, length){
   let input = '^.{' + `${start - 1}` +'}' + '(.{' + `${length + 1}` +'}).*'; //^.{start}(.{length}).*
   let index = 1;
   return this.regEx(input, barcode, index);
 }

//Case #4
// Match on given index and given length, include match.
 matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, start, length){
   let input = '^.{' + `${start}` +'}' + '(.{' + `${length}` +'}).*'; //^.{start}(.{length}).*
   let index = 1;
   return this.regEx(input, barcode, index);
}

//Case #5
// Match on given index and input, include match, return proceeding string
 matchGivenIndexAndInputIncludingMatchReturnProceedingString(barcode, start, input_string){
   let input = '^.{' + `${start - 1}` + '}(' + `${input_string}` + '.+)' ; //^.{start}(.{length}).*
   let index = 1;
   return this.regEx(input, barcode, index);
}

//Case #6
// Match on given index and input, exclude match, return proceeding string
 matchGivenIndexAndInputNotIncludingMatchReturnProceedingString(barcode, start, input_string){
   let input = '^.{' + `${start - 1}` + '}' + `${input_string}` + '(.+)'; //^.{start}(.{length}).*
   let index = 1;
   return this.regEx(input, barcode, index);
}


// // Case #7
// Match on any position, case sensitive. returns the string proceeding from match
// including the match and specific length after the match

 matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, length){
   let input = '(' + `${input_string}` + '.' + '{' + `${length}` +'})'; //(input.{length})
   let index = 0;
   return this.regEx(input, barcode, index);
  }

// // Case #8
// // Match on any position, case sensitive. returns the string proceeding from match
// // not including the match and specific length after the match
matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, input_string, length){
   let input = `${input_string}`+ '(.' + '{' + `${length}` +'})'; //input(.{length})
   let index = 1;
   return this.regEx(input, barcode, index);
  }
// // Case #9
// // Match on any postion, case sensitive. returns the string proceeding from
// // match including the match

 matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string){
   let input = `${input_string}` + '(.*)'
   let index = 0;
   return this.regEx(input, barcode, index);
  }

// // Case #10
// Match on any position, case sensitive. returns the string proceeding from match NOT
// including the match

 matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string){
    let input = `${input_string}` + '(.*)' //input(.*)
    let index = 1;
    return this.regEx(input, barcode, index);
  }

// #11
// Match string on any position, non-case sensitive. Returns the whole string

 matchOnAnyPosition(barcode, input_string){
  let input = '(^.*' + `${input_string}` + '.*$)';
  let index = 0;
  return this.regEx(input, barcode, index);
}
// Combined Methods

// Case # 1 and case # 2 combined method
// Must provide a BOOLEAN value set (match_from_index_0) to check if it is matching FROM Index_0

    matchStringAndReturnWholeString(barcode, input_string, match_from_index_0) {
      let input = match_from_index_0 ? '^' + `${input_string}` + '(.+)' : `${input_string}` + '(.+)';
      let index = 0;

      return this.regEx(input, barcode, index);
    }

// Case # 3 and case # 4 combined method
// Must provide a boolean value set (include_match) to check if it is INCLUDING MATCH or NOT

  matchAnyPositionReturnStringProceedingMatchIncludingOrNotIncludingMatch(barcode, input_string, include_match) {
    let input = include_match ? `${input_string}` + '(.*)' : `${input_string}` + '(.*)'; //input(.*)
    let index = include_match ? 0 : 1;

    return this.regEx(input, barcode, index);
  }


// Case #5 and case #6 combined method
// Must provide a numeric value set for (length) a specific length they want after the match and a boolean value (include_match) set
// if they want to include or exclude the match in return.

  anyPositionsMatchReturnStringProceedingbyLengthInculdeOrNotIncludeMatch (barcode, input_string, include_match, length) {
    // including match RegEx (input.{length})
    // excluding match RegEx input(.{length})
    let input = include_match? '(' + `${input_string}` + '.' + '{' + `${length}` +'})' : `${input_string}`+ '(.' + '{' + `${length}` +'})';
    let index = include_match? 0 : 1

    return this.regEx(input, barcode, index);
  }

// Case #7 and case #8 combined method
// Must provide a (start_postion) and to include or not include_match

  matchGivenIndexIncludeOrExcludeMatch(barcode, start_position, include_match) {
    // including match RegEx ^.{start - 1}(.+)
    // excluding match RegEx ^.{start}(.+)
    let input = include_match ? `^.{${start_position - 1}}(.+)` : `^.{${start_position}}(.+)`
    let index = 1

    return this.regEx(input, barcode, index);
  }

//  Case #9 and case #10 combined method
//  Must provide a starting (start) position, return (length) length after the match and a boolean (include_match)
//  to include or exclude match

    matchGivenIndexAndSpecificLengthIncludeOrExcludeMatch(barcode, start, length, include_match) {
        let input = include_match ? '^.{' + `${start - 1}` +'}' + '(.{' + `${length + 1}` +'}).*' : '^.{' + `${start}` +'}' + '(.{' + `${length}` +'}).*'
        let index = 1

        return this.regEx(input, barcode, index);
    }

private regEx(input, barcode, index){
    let regEx = new RegExp(input);
    let match = regEx.exec(barcode);

     if (match) {
      return match[index]
     } else {
       return null
     }
  }

    //  private caseOne(match_on_dropdown, return_dropdown, includeMatch) {
    //     if (match_on_dropdown === "2" && return_dropdown === "1" && includeMatch === "true" ) {
    //         return true
    //     }
    // }

    // private caseTwo(match_on_dropdown, return_dropdown, includeMatch) {
    //     if (match_on_dropdown === "1" && return_dropdown === "1" && includeMatch === "true" ) {
    //         return true
    //     }
    // }

    // private caseThreeAndFour(match_on_dropdown, return_dropdown, includeMatch) {
    //     if (match_on_dropdown === "2" && return_dropdown === "3" && (includeMatch === "true" || includeMatch === "false") ) {
    //         return true
    //     }
    // }


    private caseThreeAndFour(match_on_dropdown, return_dropdown, includeMatch, startIndex, specificLength, input_string) {
        if (match_on_dropdown === "1" && return_dropdown === "1" && (includeMatch === "true" || includeMatch === "false") && startIndex > 0 && specificLength > 0 && input_string === '') {
            return true
        }
    }

    private caseOneAndTwo(match_on_dropdown, return_dropdown, includeMatch, startIndex, specificLength, input_string) {
        if (match_on_dropdown === "1" && return_dropdown === "1" && (includeMatch === "true" || includeMatch === "false") && startIndex > 0  && specificLength > 0 && input_string !== '') {
            return true
        }
    }

    private caseFiveAndSix(match_on_dropdown, return_dropdown, includeMatch, startIndex, input_string) {
        if (match_on_dropdown === "1" && return_dropdown === "2" && (includeMatch === "true" || includeMatch === "false") && startIndex > 0 && input_string !== '') {
            return true
        }
    }

    private caseSevenAndEight(match_on_dropdown, return_dropdown, includeMatch, specificLength ) {
        if (match_on_dropdown === "2" && return_dropdown === "1" && (includeMatch === "true" || includeMatch === "false") && specificLength > 0 ) {
            return true
        }
    }

    private caseNineAndTen(match_on_dropdown, return_dropdown, includeMatch) {
        if (match_on_dropdown === "2" && return_dropdown === "2" && (includeMatch === "true" || includeMatch === "false")) {
            return true
        }
    }

     private caseEleven(match_on_dropdown, return_dropdown) {
        if (match_on_dropdown === "2" && return_dropdown === "3") {
            return true
        }
    }
}

// // Case #7
//   // Match on given index, include match.
//   matchGivenIndexIncludeMatch(barcode, start){
//     let input = `^.{${start - 1}}(.+)` //`^.{start - 1}(.+)`
//     let index = 1;
//     return this.regEx(input, barcode, index);
//   }

//   // Case #8
//   // Match on given index, exclude match.
//   matchGivenIndexNotIncludeMatch(barcode, start){
//     let input = `^.{${start}}(.+)` //^.{start}(.+)
//     let index = 1;
//     return this.regEx(input, barcode, index);
//   }
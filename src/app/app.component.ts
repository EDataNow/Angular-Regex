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

matchOnDropDownValue:number;
returnOnDropDownValue:number;

  ngOnInit () {}

      regExFunctionFilter(barcode, input_string, match_on_dropdown, return_dropdown, includeMatch, specificLength, startIndex) {
        const output = document.getElementById("output")
       
       // Case 1
        if (this.caseOne(match_on_dropdown, return_dropdown, includeMatch)) {
            output.innerText = this.matchOnAnyPosition(barcode, input_string);
        }
        //Case 2
        if (this.caseTwo(match_on_dropdown, return_dropdown, includeMatch)) {
            output.innerText = this.matchOnFirstCharacter(barcode, input_string);
        }

        //Case 3 & 4
        if (this.caseThreeAndFour(match_on_dropdown, return_dropdown, includeMatch)) {
            let include_match_boolean = JSON.parse(includeMatch);

            output.innerText = this.matchAnyPositionReturnStringProceedingMatchIncludingOrNotIncludingMatch(barcode, input_string, include_match_boolean);
        }

        //Case 5 & 6
        if (this.caseFiveAndSix(match_on_dropdown, return_dropdown, includeMatch, specificLength)) {
            let include_match_boolean = JSON.parse(includeMatch);

            output.innerText = this.anyPositionsMatchReturnStringProceedingbyLengthInculdeOrNotIncludeMatch(barcode, input_string, include_match_boolean, specificLength);
        }

         //Case 7 & 8
        if (this.caseSevenAndEight(match_on_dropdown, return_dropdown, includeMatch, startIndex)) {
            let include_match_boolean = JSON.parse(includeMatch);
      
            output.innerText = this.matchGivenIndexIncludeOrExcludeMatch(barcode, startIndex, include_match_boolean);
        }

        //Case 9 & 10
        if (this.caseNineAndTen(match_on_dropdown, return_dropdown, includeMatch, startIndex, specificLength)) {
            let include_match_boolean = JSON.parse(includeMatch);

            output.innerText = this.matchGivenIndexAndSpecificLengthIncludeOrExcludeMatch(barcode, parseInt(startIndex), parseInt(specificLength), include_match_boolean);
        }
    }
    
    setMatchOnDropdownValue(value) {
        this.matchOnDropDownValue = value
        console.log("matchOnDropDownValue", this.matchOnDropDownValue);
    }

     setReturnDropdownValue(value) {
        this.matchOnDropDownValue = value
        console.log("ReturnDropDownValue", this.matchOnDropDownValue);
    }



// #1
// Match string on any position, non-case sensitive. Returns the whole string

private matchOnAnyPosition(barcode, input_string){
  let input = '(^.*' + `${input_string}` + '.*$)';
  let index = 0;
  return this.regEx(input, barcode, index);
}


// Case #2
// Case sensitive match on FIRST letter, returns the whole string

private matchOnFirstCharacter(barcode, input_string){
    let input = '^' + `${input_string}` + '(.+)';
    let index = 0;
    return this.regEx(input, barcode, index);
  }

// Combined Methods

// Case # 3 and case # 4 combined method
// Match on any postion, case sensitive. returns the string proceeding from
// match including or excluding the match.

private matchAnyPositionReturnStringProceedingMatchIncludingOrNotIncludingMatch(barcode, input_string, include_match) {
    let input = include_match ? `${input_string}` + '(.*)' : `${input_string}` + '(.*)'; //input(.*)
    let index = include_match ? 0 : 1;
    return this.regEx(input, barcode, index);
  }


// Case #5 and case #6 combined method
// Match on any position, case sensitive. returns the string proceeding from match
// including or excluding the match and specific length after the match

private anyPositionsMatchReturnStringProceedingbyLengthInculdeOrNotIncludeMatch (barcode, input_string, include_match, length) {
    // including match RegEx (input.{length})
    // excluding match RegEx input(.{length})
    let input = include_match ? '(' + `${input_string}` + '.' + '{' + `${length}` +'})' : `${input_string}`+ '(.' + '{' + `${length}` +'})';
    let index = include_match ? 0 : 1

    return this.regEx(input, barcode, index);
  }

// Case #7 and case #8 combined method
// Match on given index, including or excluding the index.

private matchGivenIndexIncludeOrExcludeMatch(barcode, start_position, include_match) {
    // including match RegEx ^.{start - 1}(.+)
    // excluding match RegEx ^.{start}(.+)
    let input = include_match ? `^.{${start_position - 1}}(.+)` : `^.{${start_position}}(.+)`
    let index = 1

    return this.regEx(input, barcode, index);
  }

//  Case #9 and case #10 combined method
// Match on given index and return given length proceeding from index, include or exclude match.

private matchGivenIndexAndSpecificLengthIncludeOrExcludeMatch(barcode, start, length, include_match) {
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

     private caseOne(match_on_dropdown, return_dropdown, includeMatch) {
        if (match_on_dropdown === "2" && return_dropdown === "1" && includeMatch === "true" ) {
            return true
        }
    }

    private caseTwo(match_on_dropdown, return_dropdown, includeMatch) {
        if (match_on_dropdown === "1" && return_dropdown === "1" && includeMatch === "true" ) {
            return true
        }
    }

    private caseThreeAndFour(match_on_dropdown, return_dropdown, includeMatch) {
        if (match_on_dropdown === "2" && return_dropdown === "3" && (includeMatch === "true" || includeMatch === "false") ) {
            return true
        }
    }

    private caseFiveAndSix(match_on_dropdown, return_dropdown, includeMatch, specificLength ) {
        if (match_on_dropdown === "2" && return_dropdown === "2" && (includeMatch === "true" || includeMatch === "false") && specificLength > 0 ) {
            return true
        }
    }

    private caseSevenAndEight(match_on_dropdown, return_dropdown, includeMatch, startIndex) {
        if (match_on_dropdown === "3" && return_dropdown === "3" && (includeMatch === "true" || includeMatch === "false") && startIndex > 0 ) {
            return true
        }
    }

    private caseNineAndTen(match_on_dropdown, return_dropdown, includeMatch, startIndex, specificLength) {
        if (match_on_dropdown === "3" && return_dropdown === "2" && (includeMatch === "true" || includeMatch === "false") && startIndex > 0  && specificLength > 0 ) {
            return true
        }
    }

// Case #3
// Match on any postion, case sensitive. returns the string proceeding from
// match including the match

//  matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string){
//    let input = `${input_string}` + '(.*)'
//    let index = 0;
//    return this.regEx(input, barcode, index);
//   }

// // Case #4
// // Match on any position, case sensitive. returns the string proceeding from match NOT
// // including the match

//  matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string){
//     let input = `${input_string}` + '(.*)' //input(.*)
//     let index = 1;
//     return this.regEx(input, barcode, index);
//   }


// Case #5
// Match on any position, case sensitive. returns the string proceeding from match
// including the match and specific length after the match

//  matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, length){
//    let input = '(' + `${input_string}` + '.' + '{' + `${length}` +'})'; //(input.{length})
//    let index = 0;
//    return this.regEx(input, barcode, index);
//   }

// Case #6
// Match on any position, case sensitive. returns the string proceeding from match
// not including the match and specific length after the match
// matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, input_string, length){
//    let input = `${input_string}`+ '(.' + '{' + `${length}` +'})'; //input(.{length})
//    let index = 1;
//    return this.regEx(input, barcode, index);
//   }

// Case #7
  // Match on given index, include match.
//   matchGivenIndexIncludeMatch(barcode, start){
//     let input = `^.{${start - 1}}(.+)` //`^.{start - 1}(.+)`
//     let index = 1;
//     return this.regEx(input, barcode, index);
//   }

  // Case #8
  // Match on given index, exclude match.
//   matchGivenIndexNotIncludeMatch(barcode, start){
//     let input = `^.{${start}}(.+)` //^.{start}(.+)
//     let index = 1;
//     return this.regEx(input, barcode, index);
//   }

// Case #9
// Match on given index and given length, include match.
//  matchGivenIndexAndSpecificLengthIncludeMatch(barcode, start, length){
//     let input = '^.{' + `${start - 1}` +'}' + '(.{' + `${length + 1}` +'}).*'; //^.{start}(.{length}).*
//     let index = 1;
//    return this.regEx(input, barcode, index);
// }

// Case #10
// Match on given index and given length, include match.
//  matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, start, length){
//    let input = '^.{' + `${start}` +'}' + '(.{' + `${length}` +'}).*'; //^.{start}(.{length}).*
//     let index = 1;
//    return this.regEx(input, barcode, index);
// }

}
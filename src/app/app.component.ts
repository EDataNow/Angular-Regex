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

// declaration values for the dropdown menus in template
matchOnDropDownValue: number;
returnOnDropDownValue: number;

  ngOnInit () { }


    // sets match dropdown menu value
    setMatchOnDropdownValue(value) {
        this.matchOnDropDownValue = parseInt(value)
    }

    // sets the return dropdown menu value
    setReturnDropdownValue(value) {
        this.returnOnDropDownValue = parseInt(value)
    }


    // Defines Ui Logic in Template
    matchOnUiLogic() {
        if( this.matchOnDropDownValue === 2 ) {
            return true
        }
    }

    // Defines Ui Logic in Template
    returnUiLogic() {
        if( this.returnOnDropDownValue === 2 || this.returnOnDropDownValue === 3 ) {
            return true
        }
    }

      regExFunctionFilter(barcode, input_string, match_on_dropdown, return_dropdown,  specificLength, startIndex, select_index) {
        const output = document.getElementById("output")

        //Case 1 & 2
        if (this.caseOneAndTwo(match_on_dropdown, return_dropdown, startIndex, input_string, select_index)) {
            output.innerText = this.matchStartIndexAndInputAndSelectIndex(barcode, input_string, startIndex, specificLength, select_index);
        }

        //Case 3 & 4
        if (this.caseThreeAndFour(match_on_dropdown, return_dropdown,  startIndex, input_string)) {
            output.innerText = this.matchStartIndexAndInput(barcode, startIndex, input_string, specificLength);
        }

        // //Case 5 & 6
        if (this.caseFiveAndSix(match_on_dropdown, return_dropdown,  startIndex, input_string)) {
            output.innerText = this.matchStartIndexAndInputAndIncludeMatch(barcode, startIndex, input_string, specificLength);
        }

        // //Case 7 & 8
        if (this.caseSevenAndEight(match_on_dropdown, return_dropdown,  select_index, input_string)) {
            output.innerText = this.matchOnAnyPositionAndInput(barcode, select_index, input_string, specificLength);
        }

        // //Case 9 & 10
        if (this.caseNineAndTen(match_on_dropdown, return_dropdown, input_string)) {
            output.innerText = this.matchOnAnyPositionAndInputProceedingFromMatch(barcode, input_string, specificLength);
        }

        // //Case 11 & 12
        if (this.caseEleveAndTwelve(match_on_dropdown, return_dropdown, input_string)) {
            output.innerText = this.matchOnAnyPositionIncludeMatchProceed(barcode, input_string, specificLength);
        }
      }

// Combined Methods

    // Case #1 & Case #2 combined methods
    //Match on start index, given input string, and select index

    matchStartIndexAndInputAndSelectIndex(barcode, input_string, start_index, length, select_index){
        let sanitizedInput = this.sanitizeForRegEx(input_string);
        let check = length > 0
        let input = check ? '^.{'+ `${start_index - 1}`+ '}' + `${sanitizedInput}`+'.{'+ `${select_index - (input_string.length) - start_index}` + '}(.{' +`${length}` +'})' : '^.{'+ `${start_index - 1}` + '}' + `${sanitizedInput}` +'.{'+ `${select_index - (input_string.length) - start_index}` + '}(.+)';
        let index =  1
        return this.regEx(input, barcode, index);
    }

    // // Case # 3 and case # 4 combined method
    // // Match on given index and input, including or excluding match, return proceeding string

    matchStartIndexAndInput(barcode, start_index, input_string, length){
        let sanitizedInput = this.sanitizeForRegEx(input_string);
        let check = length > 0;
        let input = check ? '^.{' + `${start_index - 1}` + '}' + `${sanitizedInput}` + '(.{' + `${length}` + '})' : '^.{' + `${start_index - 1}` + '}' + `${sanitizedInput}` + '(.+)';
        console.log(input)
        let index = 1;
        return this.regEx(input, barcode, index);
    }

    // Case # 5 and case # 6 combined method
    // Match on given index and given length, include or excluding the match.

     matchStartIndexAndInputAndIncludeMatch(barcode, start_index, input_string, length){
        let sanitizedInput = this.sanitizeForRegEx(input_string);
        let check = length > 0;
        let input = check ? '^.{' + `${start_index - 1}` + '}(' + `${sanitizedInput}` + '.{' + `${length - (input_string.length)}` + '})' : '^.{' + `${start_index - 1}` + '}(' + `${sanitizedInput}` + '.+)'
        let index = 1;
        return this.regEx(input, barcode, index);
    }

    // // Case # 7 and case # 8 combined method
    // Match any position return on given index after the match, returning a specific length.

    matchOnAnyPositionAndInput(barcode, select_index, input_string, length){
        let check = length > 0;

        let input = check ? `(${input_string}.{${select_index - 1}})(.{${length}})` : `(${input_string}.{${select_index - 1}})(.+)`
        let index = 2

        return this.regEx(input, barcode, index);
    }


   // Case # 9 and case # 10 combined method
   // Match any position, returning everything after the match or a return given length after the match.

    matchOnAnyPositionAndInputProceedingFromMatch(barcode, input_string, length){
        let check = length > 0;

        let input = check ? `${input_string}(.{${length}})` : `${input_string}(.+)`
        let index = 1

        return this.regEx(input, barcode, index);
    }


   // Case #11 and case #12 combined method
   // Match any position, return the whole string including the match or return a specific length string including the match

    matchOnAnyPositionIncludeMatchProceed(barcode, input_string, length){
        let check = length > 0;

        let input = check ? `(${input_string}.{${length - (input_string.length)}})` : `(${input_string}.+)`
        let index = 1

        return this.regEx(input, barcode, index);
    }

    private regEx(input, barcode, index){
        let regEx = new RegExp(input, 'i');
        console.log(regEx)
        let match = regEx.exec(barcode);
        console.log(match)


        if (match) {
        return match[index]
        } else {
        return "No Match"
        }
    }

    private sanitizeForRegEx(input){
        return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }


    private caseOneAndTwo(match_on_dropdown, return_dropdown, startIndex, input_string, select_index) {
        if (match_on_dropdown === "1" && return_dropdown === "1"  && startIndex > 0  && input_string !== '' && select_index > 0) {
            return true
        }
    }

    private caseThreeAndFour(match_on_dropdown, return_dropdown, startIndex, input_string) {
        if (match_on_dropdown === "1" && return_dropdown === "2"  && startIndex > 0  && input_string !== '') {
            return true
        }
    }


    private caseFiveAndSix(match_on_dropdown, return_dropdown, startIndex, input_string) {
        if (match_on_dropdown === "1" && return_dropdown === "3" && startIndex > 0 && input_string !== '') {
            return true
        }
    }

    private caseSevenAndEight(match_on_dropdown, return_dropdown, selectIndex, input_string) {
        if (match_on_dropdown === "2" && return_dropdown === "1" && selectIndex > 0 && input_string !== '') {
            return true
        }
    }

    private caseNineAndTen(match_on_dropdown, return_dropdown, input_string) {
        if (match_on_dropdown === "2" && return_dropdown === "2" && input_string !== '') {
            return true
        }
    }

    private caseEleveAndTwelve(match_on_dropdown, return_dropdown, input_string) {
        if (match_on_dropdown === "2" && return_dropdown === "3" && input_string !== '') {
            return true
        }
    }
}

//Case #1
//Match on given index and input and given length, include match.
//  matchGivenIndexAndInputAndSpecificLengthIncludeMatch(barcode, input_string, start, length){
//     let input = '^.{' + `${start - 1}` + '}(' + `${input_string}` + '.{' + `${length}` + '})' // ^.{start}(input.{length})
//     let index = 1;
//    return this.regEx(input, barcode, index);
// }

// Case #2
// Match on given index and input and given length, exclude match.
//  matchGivenIndexandInputAndSpecificLengthNotIncludeMatch(barcode, input_string, start, length){
//    let input = '^.{' + `${start - 1}` + '}' + `${input_string}` + '(.{' + `${length}` + '})'; //^.{1}A(.{2})
//     let index = 1;
//    return this.regEx(input, barcode, index);
// }

 //Case #3
 // Match on given index and given length, include match.
//  matchGivenIndexAndSpecificLengthIncludeMatch(barcode, start, length){
//    let input = '^.{' + `${start - 1}` +'}' + '(.{' + `${length + 1}` +'}).*'; //^.{start}(.{length}).*
//    let index = 1;
//    return this.regEx(input, barcode, index);
//  }

//Case #4
// Match on given index and given length, exclude match.
//  matchGivenIndexAndSpecificLengthNotIncludeMatch(barcode, start, length){
//    let input = '^.{' + `${start}` +'}' + '(.{' + `${length}` +'}).*'; //^.{start}(.{length}).*
//    let index = 1;
//    return this.regEx(input, barcode, index);
// }

//Case #5
// Match on given index and input, include match, return proceeding string
//  matchGivenIndexAndInputIncludingMatchReturnProceedingString(barcode, start, input_string){
//    let input = '^.{' + `${start - 1}` + '}(' + `${input_string}` + '.+)'; //^.{start}(.{length}).*
//    let index = 1;
//    return this.regEx(input, barcode, index);
// }

//Case #6
// Match on given index and input, exclude match, return proceeding string
//  matchGivenIndexAndInputNotIncludingMatchReturnProceedingString(barcode, start, input_string){
//    let input = '^.{' + `${start - 1}` + '}' + `${input_string}` + '(.+)'; //^.{start}(.{length}).*
//    let index = 1;
//    return this.regEx(input, barcode, index);
// }


// // Case #7
// Match on any position, case sensitive. returns the string proceeding from match
// including the match and specific length after the match

//  matchOnAnyPositionReturnStringProceedingMatchIncludingMatchOfSpecificLength (barcode, input_string, length){
//    let input = '(' + `${input_string}` + '.' + '{' + `${length}` +'})'; //(input.{length})
//    let index = 0;
//    return this.regEx(input, barcode, index);
//   }

// // Case #8
// // Match on any position, case sensitive. returns the string proceeding from match
// // not including the match and specific length after the match
// matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatchOfSpecificLength(barcode, input_string, length){
//    let input = `${input_string}`+ '(.' + '{' + `${length}` +'})'; //input(.{length})
//    let index = 1;
//    return this.regEx(input, barcode, index);
//   }

// // Case #9
// // Match on any postion, case sensitive. returns the string proceeding from
// // match including the match

//  matchOnAnyPositionReturnStringProceedingMatchIncludingMatch(barcode, input_string){
//    let input = `${input_string}` + '(.*)'
//    let index = 0;
//    return this.regEx(input, barcode, index);
//   }

// // Case #10
// Match on any position, case sensitive. returns the string proceeding from match NOT
// including the match

//  matchOnAnyPositionReturnStringProceedingMatchNotIncludingMatch(barcode, input_string){
//     let input = `${input_string}` + '(.*)' //input(.*)
//     let index = 1;
//     return this.regEx(input, barcode, index);
//   }

// #11
// Match string on any position, non-case sensitive. Returns the whole string

//  matchOnAnyPosition(barcode, input_string){
//   let input = '(^.*' + `${input_string}` + '.*$)';
//   let index = 0;
//   return this.regEx(input, barcode, index);
// }